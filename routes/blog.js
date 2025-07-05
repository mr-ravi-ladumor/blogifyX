const {Router} = require('express'); 
const multer = require('multer');
const Blog = require('../models/blog');
const Comment = require('../models/comment');
const path = require('path');
const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('./public/uploads/'))
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
  })
  
const upload = multer({ storage: storage })
  

router.get('/add-new',(req,res) => {
    res.render('addBlog', {user : req.user,});
});

router.get('/:id', async (req,res) => {
    const blogId = req.params.id;
    const blog   = await Blog.findById(blogId).populate("createdBy");

    const comments = await Comment.find({blogId : blogId}).populate("createdBy");
    return res.render("blog", {
      user : req.user,
      blog,
      comments,
    });
});


router.post('/',upload.single("coverImage") , async (req,res) => {
    const {title, body} = req.body;
    const blog = await Blog.create({
        body,
        title,
        createdBy : req.user._id,
        coverImageURL : `/uploads/${req.file.filename}`,
    })
    return res.redirect(`/blog/${blog._id}`);
});


router.post("/comment/:blogId", async (req,res) => {
  await Comment.create({
    comment : req.body.content,
    blogId : req.params.blogId,
    createdBy : req.user._id,
  });

  return res.redirect(`/blog/${req.params.blogId}`);
});


router.delete('/delete/:id', async (req,res) => {
    const blogId = req.params.id;
    const blog   = await Blog.findById(blogId);

    if(!blog) return res.status(404).send("Blog Not Found");    

    if(blog.createdBy.toString() !== req.user._id.toString()) {
        return res.status(403).send("You are not allowed to delete this blog");
    }

    await Blog.findByIdAndDelete(blogId);
    return res.redirect("/");
});

router.put('/edit/:id', async (req,res) => {
    const blogId = req.params.id;
    const {title, body} = req.body;
    const blog   = await Blog.findById(blogId);

    if(!blog) return res.status(404).send("Blog Not Found");

    if(blog.createdBy.toString() !== req.user._id.toString()) {
        return res.status(403).send("You are not allowed to edit this blog");
    }

    blog.title = title; 
    blog.body  = body;
    await blog.save();

    return res.redirect(`/blog/${blogId}`);
}
);


module.exports = router;