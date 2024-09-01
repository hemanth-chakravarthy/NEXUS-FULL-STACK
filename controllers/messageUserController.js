const User = require('../models/studentLoginModel');
const Chat = require('../models/chatModel');

const saveChat = async(req,res)=>{
    try{
        var newChat = new Chat({
            sender_id:req.body.sender_id,
            receiver_id:req.body.receiver_id,
            message:req.body.message
        });
        await newChat.save();
        res.status(200).send({success:true,msg:newChat.message});

    }catch(error){
        res.status(400).send({success:false,msg:error.msg});
    }
}


module.exports = {saveChat};