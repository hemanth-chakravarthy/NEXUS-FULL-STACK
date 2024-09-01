const mongoose = require('mongoose');
const Profile = require('../models/hireStudentCardModels');

// Controller function to fetch all profiles
const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a new profile
const createProfile = async (req, res) => {
  const profile = new Profile({
    studentName: req.body.studentName,
    category: req.body.category,
    details: req.body.details,
    image: req.body.image,
    isSaved: req.body.isSaved || false,
    isHired: req.body.isHired || false
  });

  try {
    const newProfile = await profile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to update an existing profile
// const updateProfile = async (req, res) => {
//   try {
//     const profile = await Profile.findById(req.params.id);
//     if (profile == null) {
//       return res.status(404).json({ message: 'Profile not found' });
//     }

//     if (req.body.studentName != null) {
//       profile.studentName = req.body.studentName;
//     }
//     if (req.body.category != null) {
//       profile.category = req.body.category;
//     }
//     if (req.body.details != null) {
//       profile.details = req.body.details;
//     }
//     if (req.body.image != null) {
//       profile.image = req.body.image;
//     }
//     if (req.body.isSaved != null) {
//       profile.isSaved = req.body.isSaved;
//     }
//     if (req.body.isHired != null) {
//       profile.isHired = req.body.isHired;
//     }

//     const updatedProfile = await profile.save();
//     res.json(updatedProfile);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Controller function to delete a profile
const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (profile == null) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    await profile.remove();
    res.json({ message: 'Profile deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProfiles, createProfile, deleteProfile };
