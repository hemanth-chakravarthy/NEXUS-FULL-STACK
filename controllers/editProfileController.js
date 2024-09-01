const mongoose = require('mongoose');
const editSchema = require('../models/editProfileModels');
// const newbio = require('../models/studentLoginModel');
const profileModel = require('../models/profileModel');
const path = require("path");

exports.editprofileDets = async(req,res,next) => {
    try{
        let{
            name,
            about,
            image
        } = req.body;
        image = path.join("uploads", req.file.filename);

        await profileModel.findOneAndUpdate({id:req.session.userId},{$set:{fullname:name,bio:about,profileImg:image}},{new:true});
        let profile = await profileModel.findOne({id:req.session.userId});
        res.render('profilePage',{profile:profile});
    }
    catch(error){
        console.log(error);
    }
}