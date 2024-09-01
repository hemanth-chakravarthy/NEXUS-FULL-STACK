const mongoose = require('mongoose');
const postSchema = require('../models/createPostModels');
const profileModel = require('../models/profileModel');

exports.viewthepost = async(req,res)=>{
    const obj_id = req.body.obj_id;
    // const id = req.session.userId;
    // console.log(obj_id);
    let projectData = await postSchema.findOne({_id: obj_id});
    let id = projectData.studentId;
    let user = await profileModel.findOne({id:id});
    let fullname = user.fullname;
    let userimage = user.profileImg;
    let project = {
        _id:projectData._id,
        fullname:fullname,
        userimage:userimage,
        projectName:projectData.projectName,
        description:projectData.description,
        image:projectData.image,
        category:projectData.category,
    }
    res.render("postPage",{project:project});
}
exports.viewsavedposts = async(req,res)=>{
    const obj_id = req.body.obj_id;
    let project = await postSchema.findOne({_id: obj_id});
    res.render("profilePage",{project:project});
    // res.redirect('/profilePage')
};
exports.reportposts = async (req, res) => {
    const projectId = req.body.report; // Assuming this is the project ID

    try {
        // Find the project by ID and increment the reports field by 1
        const projectData = await postSchema.findByIdAndUpdate(projectId, { $inc: { reports: 2 } }, { new: true });
        let id = projectData.studentId;
        let user = await profileModel.findOne({id:id});
        let fullname = user.fullname;
        let userimage = user.profileImg;
        let project = {
            _id:projectData._id,
            fullname:fullname,
            userimage:userimage,
            projectName:projectData.projectName,
            description:projectData.description,
            image:projectData.image,
            category:projectData.category
        };
        res.render('postPage',{project:project})
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error reporting project' });
    }
};