const mongoose = require('mongoose');
const postSchema = require('../models/createPostModels');

exports.findthepost = async(req,res)=>{
    const obj_id = req.body.searchquery.toString();
    console.log(obj_id)
    let posts = await postSchema.findOne({obj_id});
    const projects = await postSchema.find({});
    res.render('searchpage',{posts:posts,projects:projects});
}
