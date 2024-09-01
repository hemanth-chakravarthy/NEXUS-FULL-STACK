const mongoose = require('mongoose');
const editSchema = require('../models/interestedFormModels');
const users = require('../models/profileModel');
const path = require("path");
const profileModel = require('../models/profileModel');

exports.interestedWorkForm = async(req,res,next) => {
    try{
        const id = req.session.userId;
        const userProfile = await users.findOne({id:id});
        let studentName = userProfile.fullname;
        let category = req.body.category;
        let resume = path.join("uploadsPdf", req.file.originalname);
        let details = req.body.details;
        const image = userProfile.profileImg;

        const newEdit = new editSchema({
            studentName,
            category,
            resume,
            details,
            image
        });
        await profileModel.findOneAndUpdate({id:req.session.userId},{$set:{interestedToWork:true}},{new:true});
        let profile = await profileModel.findOne({id:req.session.userId});
        res.render('profilePage',{profile:profile});
        await newEdit.save();
    }
    catch(error){
        console.log(error);
    }
}