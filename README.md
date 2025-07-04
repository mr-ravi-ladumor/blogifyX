# BlogifyX

A simple blogging platform built with Node.js where users can write and share their stories.

## Features

- User registration and login
- Create and publish blog posts
- Upload cover images for posts
- Comment on posts
- Edit and delete your own posts

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS templates, Bootstrap
- **Authentication**: JWT tokens
- **File Upload**: Multer

## Getting Started

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

## How to Use

1. Sign up for an account
2. Sign in to start writing
3. Click "Write New Story" to create a post
4. Upload a cover image and write your content
5. Publish and share with others

## Project Structure

```
├── index.js              # Main server file
├── models/               # Database schemas
├── routes/               # API routes
├── views/                # EJS templates
├── public/               # Static files (CSS, images)
└── middlewares/          # Custom middleware
```


## ✨ Features

- **User Authentication**: Secure signup/signin with JWT tokens and password hashing
- **Blog Management**: Create, read, and view blog posts with rich content
- **Image Uploads**: Upload and display cover images for blog posts using Multer
- **Comment System**: Users can comment on blog posts and engage with content
- **Responsive Design**: Clean, modern UI that works on all devices
- **User Profiles**: Profile management with custom avatars
- **MongoDB Integration**: Robust data storage with Mongoose ODM

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Youtube-Blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017
   PORT=3000
   ```
   
   For MongoDB Atlas, replace with your connection string:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net
   PORT=3000
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`



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
