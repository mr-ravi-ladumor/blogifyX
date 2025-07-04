const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path    = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const {checkForAuthCookie} = require('./middlewares/authentication');


const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/blog-app`);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect:', err);
  }
})();


// Importing routes and models
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const Blog = require('./models/blog'); 



// Set EJS as the view engine
app.set('view engine', 'ejs')
app.set('views' , path.resolve("./views"))

// Middleware setup
app.use(express.static(path.resolve('./public')));
app.use(express.urlencoded({extended : false})) 
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(checkForAuthCookie("token"));


// Route mounting
app.use('/user',userRouter);
app.use('/blog',blogRouter);


// Home route: lists all blogs
app.get('/', async (req,res) => {
   const allBlogs = await Blog.find({});
   res.render("home", {
     user : req.user,
     blogs : allBlogs,
   }) 
})


// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server Started at Port ${process.env.PORT}`);
});
