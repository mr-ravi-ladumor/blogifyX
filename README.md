# BlogifyX

A simple blogging platform built with Node.js where users can write and share their stories.

## ✨ Features

- User registration and login
- Create and publish blog posts
- Upload cover images for posts
- Comment on posts
- Edit and delete your own posts

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS templates, Bootstrap
- **Authentication**: JWT tokens
- **File Upload**: Multer

## 🚀 Getting Started

1. Clone this repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file:
    ```
    MONGODB_URI=mongodb://127.0.0.1:27017
    PORT=3000
    ```
4. Start the server:
    ```bash
    npm start
    ```
5. Open http://localhost:3000

## 📚 How to Use

1. Sign up for an account
2. Sign in to start writing
3. Click "Write New Story" to create a post
4. Upload a cover image and write your content
5. Publish and share with others

## 📁 Project Structure

```
├── index.js                 # Main application entry point
├── package.json             # Dependencies and scripts
├── .env                     # Environment variables (create this)
├── .gitignore               # Git ignored files and folders
├── models/                  # Database models
│   ├── user.js             # User schema and methods
│   ├── blog.js             # Blog post schema
│   └── comment.js          # Comment schema
├── routes/                  # Express route handlers
│   ├── user.js             # Authentication routes
│   └── blog.js             # Blog and comment routes
├── middlewares/             # Custom middleware
│   └── authentication.js   # JWT authentication middleware
├── services/                # Business logic services
│   └── authentication.js   # JWT token services
├── views/                   # EJS templates
│   ├── home.ejs            # Homepage with blog listings
│   ├── blog.ejs            # Individual blog post view
│   ├── addBlog.ejs         # Create new blog form
│   ├── signin.ejs          # User login form
│   ├── signup.ejs          # User registration form
│   └── partials/           # Reusable template components
└── public/                  # Static assets
     ├── styles.css          # Custom styling
     ├── images/             # Default images
     └── uploads/            # User uploaded images
```

## 🎯 Usage

1. **Creating an Account**: Click "Sign Up" to register with your name, email, and password
2. **Writing Blogs**: After signing in, click "Write New Story" to create blog posts
3. **Adding Images**: Upload cover images when creating blog posts
4. **Commenting**: Sign in to comment on any blog post
5. **Reading**: Browse all published stories on the homepage

**Built with ❤️ for the blogging community**



## 📁 Project Structure

```
├── index.js                 # Main application entry point
├── package.json             # Dependencies and scripts
├── .env                     # Environment variables (create this)
├── .gitignore               # Git ignored files and folders
├── models/                  # Database models
│   ├── user.js             # User schema and methods
│   ├── blog.js             # Blog post schema
│   └── comment.js          # Comment schema
├── routes/                  # Express route handlers
│   ├── user.js             # Authentication routes
│   └── blog.js             # Blog and comment routes
├── middlewares/             # Custom middleware
│   └── authentication.js   # JWT authentication middleware
├── services/                # Business logic services
│   └── authentication.js   # JWT token services
├── views/                   # EJS templates
│   ├── home.ejs            # Homepage with blog listings
│   ├── blog.ejs            # Individual blog post view
│   ├── addBlog.ejs         # Create new blog form
│   ├── signin.ejs          # User login form
│   ├── signup.ejs          # User registration form
│   └── partials/           # Reusable template components
└── public/                  # Static assets
    ├── styles.css          # Custom styling
    ├── images/             # Default images
    └── uploads/            # User uploaded images
```



**Built with ❤️ for the blogging community**
