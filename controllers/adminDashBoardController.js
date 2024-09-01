const mongoose = require('mongoose');
const postSchema = require('../models/createPostModels');
const userSchema = require('../models/studentLoginModel')

exports.deleteUser = async(req,res)=>{
    const obj_id = req.body.obj_id.toString();
    // console.log(obj_id);
    let postt = await postSchema.deleteOne({_id: obj_id});
    res.redirect("/adminDashboard");
}
exports.updateUser = async(req,res)=>{
    const userid = req.session.userId;
    const newrole = req.body.newrole.toString();
    try{
        let user1 = await userSchema.findByIdAndUpdate(userid,{ role: newrole},{new:true})
    }catch(error){
        console.log(error);
    }
    res.redirect("/adminDashboard");
}