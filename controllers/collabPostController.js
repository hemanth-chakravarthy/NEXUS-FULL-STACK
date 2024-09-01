const express = require("express");
const router = express.Router();
const {ObjectId} = require("mongoose").Types;
const projectCollabModel = require("../models/projectPostModel");
const projectUserCollabModel = require("../models/projectPostUserModel");
const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("public", "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/api/create-new-post",
  upload.single("image"),
  async (req, res) => {
    try {
      // Get the data from the frontend form
      const { name, category, description } = req.body;

      const userId = req.session.userId;

      // Create a new instance of the projectCollab model
      const newPost = new projectCollabModel({
        projectName: name,
        category: category,
        description: description,
        image: path.join("uploads", req.file.filename),
        owner: userId,
      });

      // Save the new post to the database
      await newPost.save();
      res.redirect('/collabPage');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);


router.post("/api/collab-request", async (req, res) => {
  try {
    const { projectId } = req.body;

    const userId = req.session.userId;

    // Create a new instance of the projectUserCollab model
    const newRequest = new projectUserCollabModel({
      projectId: projectId,
      userId: userId,
      status: "Pending",
    });

    await newRequest.save();
    res.status(201).json({ message: "Request sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/api/get-all-posts", async (req, res) => {
  try {
    const userId = req.session.userId;

    const user_projects = await projectUserCollabModel.find(
      { userId: userId },
      { projectId: 1, _id: 0 }
    );

    const postsNoRequests = await projectCollabModel
      .find({
        _id: {
          $nin: user_projects.map((project) => project.projectId),
        },
        owner: {
          $ne: userId,
        },
      })
      .exec();

    const postsRequests = await projectCollabModel
      .find({
        _id: {
          $in: user_projects.map((project) => project.projectId),
        },
        owner: {
          $ne: userId,
        },
      })
      .exec();

    const posts = {
      postsNoRequests: postsNoRequests,
      postsRequests: postsRequests,
    };

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//===================================================================================================================
router.post("/api/handle-request", async (req, res) => {
  try {
    const { projectId, userId, status } = req.body;

    await projectUserCollabModel.updateOne(
      { projectId: projectId, userId: userId },
      { status: status }
    );

    res.status(200).json({ message: "Request handled successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/api/get-my-posts", async (req, res) => {
  try {
    const userId = req.session.userId;

    const posts = await projectCollabModel.find({ owner: userId });

    const requestsPending = await projectUserCollabModel.aggregate([
      {
        $match: { projectId: { $in: posts.map((post) => post._id) } },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $lookup: {
          from: "projects_collabs",
          localField: "projectId",
          foreignField: "_id",
          as: "project",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $unwind: "$project",
      },
      {
        $match: {
        status: 'Pending',
        },
      },
    ]);

    const requestsNotPending = await projectUserCollabModel.aggregate([
      {
        $match: { projectId: { $in: posts.map((post) => post._id) } },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $lookup: {
          from: "projects_collabs",
          localField: "projectId",
          foreignField: "_id",
          as: "project",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $unwind: "$project",
      },
      {
        $match: {
        status: {$in:['Accepted','Rejected']},
        },
      },
    ]);  

    const requests = {
      requestsPending: requestsPending,
      requestsNotPending: requestsNotPending,
    };

    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//=========================================================================================================================

router.get("/api/get-my-requests", async (req, res) => {
  try {
    const userId = new ObjectId(req.session.userId);
    
    const requests = await projectUserCollabModel.aggregate([
      {
        $match:{
          userId: userId,
        }
      },
      {
        $lookup: {
          from: "projects_collabs",
          localField: "projectId",
          foreignField: "_id",
          as: "project",
        },
      },
      {
        $unwind: "$project",
      },
    ]);

    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
