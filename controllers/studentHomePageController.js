const mongoose = require('mongoose');
const createPost = require('../models/createPostModels');
const userSchema = require('../models/studentLoginModel')

exports.studHomPag = async(req,res) => {
    const Posts = await createPost.find();
    const len = Posts.length;
    if(Posts) {
        res.render('studentHomePage', { Posts: Posts, len: len });

    }
    else {
        res.render('studentHomePage', { Posts: '' });
    }
}
// exports.deletetheUser = async(req,res)=>{
//     const obj_id = req.session.userId.toString();
//     // console.log(obj_id);
//     let postt = await userSchema.deleteOne({_id: obj_id});
//     res.redirect("/loginPage");
// }

