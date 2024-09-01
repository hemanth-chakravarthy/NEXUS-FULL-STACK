const express = require("express");
const bcryptjs = require("bcryptjs")
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
// const collection = require("./config"); 
const createPost = require("../controllers/createPostController"); 
const editProfile = require("../controllers/editProfileController"); 
const interestForm = require("../controllers/interestedFormController");
const hireProfile = require("../controllers/hireStudentCardController");
const hiredProfile = require("../controllers/hiredCardsController");
const savedProfile = require("../controllers/savedStudentsCardController");
const InterestedForm = require('../models/interestedFormModels')
const mongoURI = 'mongodb://localhost:27017/NEXUS'
const userModel = require('../models/studentLoginModel');
const userController = require('../controllers/messageUserController');
const cors = require('cors');
const projModel = require('../models/createPostModels')
const studentHomePage = require('../controllers/studentHomePageController');
const projControl = require('../controllers/adminDashBoardController')
const ejs = require('ejs');
const Chat = require('../models/chatModel');
const viewcontroller = require('../controllers/projectPostController')
const searchcontrol = require('../controllers/searchpageController')
const userProfile = require('../models/profileModel')
const { default: router } = require("../controllers/collabPostController");
// >>>>>>> 3b792c975126b2da3475d4d96219b5dd6f5c7b19

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
var usp = io.of('/user-namespace');



app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.json());
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
  const storagePdf = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join("public", "uploadsPdf"));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
const upload = multer({ storage: storage });
const uploadsPdf = multer({ storage: storagePdf });
mongoose
    .connect(mongoURI, {
    useNewUrlParser : true,
    useCreateIndex : true,
    // useUnifiedTopology: true,
    useUnifiedTopology: true,
    })
    .then((res)=> {
        console.log("MongoDB Connected")
    });

    const store = new MongoDBStore({
        uri: 'mongodb://localhost:27017/NEXUS',
        collection: 'mysessions'
    });

  app.use(session({
      secret:'key that will sign the cookie',
      resave:false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
      saveUninitialized:false, //Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified
      store: store,
      cookie: { maxAge: 1800000 },
      userId:0
      })
  );
  const isAuth = (req,res,next) => {
    if(req.session.isAuth){
        next();
    }
    else
    {
        res.redirect('/login');
    }
}
usp.on('connection',(socket)=>{
  console.log("User connected");
  console.log(socket.handshake.auth.token);
  userId = socket.handshake.auth.token;
  socket.on('disconnect',()=>{
    console.log('user disconnected');
  });
  socket.on('newChat',(messageDetails)=>{
    socket.broadcast.emit('loadNewChat',messageDetails);
  });
  socket.on('loadOldChats',async (data)=>{
    var chats=await Chat.find({$or:[
      {sender_id:data.sender_id,receiver_id:data.receiver_id},
      {sender_id:data.receiver_id,receiver_id:data.sender_id}
    ]});
    socket.emit('loadChatshelper',{chats:chats,receiver_id:data.receiver_id});
  })
});

app.post('/studentHomePage', createPost.createStudentHomePage); //

app.post('/editprofileDets',upload.single('image'),editProfile.editprofileDets); //

app.post('/interestedToWork',uploadsPdf.single('resume'), interestForm.interestedWorkForm ); //

app.post('/deletepost', projControl.deleteUser);

app.post('/postPage', viewcontroller.viewthepost);

app.post('/savedposts',viewcontroller.viewsavedposts);

app.post('/updateuser',projControl.updateUser)

// app.post('/deletetheuser',studentHomePage.deletetheUser)

// app.post('/searchPage', searchcontrol.findthepost);

app.post('/sendreport',viewcontroller.reportposts);


app.get("/", (req, res) => {
  res.render("landingPage");
});
app.get('/landingPage', (req, res) => {
  res.render('landingPage');
});
app.get('/login', (req, res) => {
    res.render('loginPage');
});
app.get('/adminLogin', (req, res) => {
  res.render('adminLogin');
});
app.get('/adminDashBoard',isAuth, async(req, res) => {
  const users = await userModel.find({});
  const projects = await projModel.find({});
  res.render('adminDashBoard',{users:users,projects:projects});
});
app.get('/adminPage', (req, res) => {
  res.render('adminPage');
});
app.get('/postPage',isAuth, (req, res) => {
  res.render('postPage');
});
app.get('/studentHomePage',isAuth, studentHomePage.studHomPag);
app.get('/searchPage',isAuth, async(req, res) => {
    const projects = await projModel.find({});
    const obj_id = req.body.searchquery;
    let posts = await projModel.find({ obj_id});
    res.render('searchPage',{projects:projects,posts:posts});
});
app.get('/hirePage',isAuth, (req, res) => {
  res.render('hirePage');
});

app.get('/notificationPage',isAuth, (req, res) => {
    res.render('notificationPage');
});
app.get('/collabPage',isAuth, (req, res) => {
    res.render('collabPage');
});
app.get('/profilePage',isAuth, async(req, res) => {
    const profile = await userProfile.findOne({id:req.session.userId});
    res.render('profilePage',{profile:profile});
});

app.post('/deletetheuser',async(req,res)=>{
  const userid = req.session.userId;
  let deleted = await userModel.deleteOne({_id: userid});
  res.redirect('/login')
})
  
app.post('/deleteuser' ,async(req,res)=>{
  const {gmail} = req.body;
  let user = await userModel.deleteOne({gmail});
  res.redirect("/adminDashboard");
});

app.post("/login", async(req,res)=>{
  const {gmail , password} = req.body;

  const user = await userModel.findOne({gmail});

  if(!user){
      return res.redirect("/login");
  }
  const isMatch = await bcryptjs.compare(password,user.password1);

  if(!isMatch){
      return res.redirect("/login");
  }
  
  req.session.isAuth=true;
  req.session.userId = user._id;
  console.log(user._id);
  let userid = user._id;
  let userdetails = await userModel.findOne({_id:userid});
  let profile = await userProfile.findOne({id:userid});
  if(!profile){
    profile = new userProfile({
      id:userid,
      fullname:userdetails.fullname,
      bio:"write your bio here...",
      profileImg:"/assets/User-Profile-Image.png",
      interestedToWork:false,
    })
    async function saveProfile() {
      try {
        await profile.save();
      } catch (error) {
        console.error(error);
      }
    }
    saveProfile();
    // profile.save();
  }
  res.redirect("/studentHomePage");
});
app.post("/adminlogin", async(req,res)=>{
  const { gmail, password } = req.body;

  // if (gmail !== "nexus@gmail.com" || password !== "nexus") {
  //   return res.redirect("/adminLogin");
  // }
  
  const user = await userModel.findOne({role:'Admin'});
  const isMatch = await bcryptjs.compare(password,user.password1);

  if(!isMatch){
    res.redirect("/adminLogin");
  }
  req.session.isAuth = true;
  res.redirect("/adminDashboard");
});


app.post("/signup", async(req,res)=>{
  const {fullname , phno,gmail, password1} = req.body;

  let user = await userModel.findOne({gmail});
  if(user){
      return res.redirect('/login');
  }
  const hashpassword= await bcryptjs.hash(password1,12);
  user = new userModel({
    fullname ,
    phno,
    gmail, 
    password1:hashpassword,
    about: "",
    image: "profile_img.png"
  });

  async function saveUser() {
      try {
        await user.save();
      } catch (error) {
        console.error(error);
      }
    }
  saveUser();
  res.redirect('/login')
});

app.get('/messagePage',isAuth, async(req, res) => {
  const users = await profileModel.find({id:{$nin:[req.session.userId]}});
  const currUserId = req.session.userId;
  res.render('messagePage',{users,currUserId});
});


app.post('/logout',(req,res)=>{
  req.session.destroy((err)=>{
      if(err) throw err;
      res.redirect("/")
  });
});



// Route to fetch data from MongoDB and send it as JSON
app.get('/interested-forms', async (req, res) => {
  try {
    const forms = await interestForm.find();
    res.json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Import the backend API from the collab page controller
const collabRouter = require('../controllers/collabPostController');
const profileModel = require("../models/profileModel");

app.use(collabRouter);


//messaging - save
app.post('/save-chat',async (req,res)=>{
  try{
    userController.saveChat(req,res);
  }catch(error){
    res.status(500).json({ message: error.message });
  }
});


const port = 5000;
http.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
});