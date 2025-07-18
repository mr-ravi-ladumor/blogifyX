# BlogifyX 📝

A blogging platform where users can share their stories and thoughts. Built with Node.js and MongoDB.

## Features

- User signup/login with JWT authentication
- Create, edit and delete blog posts
- Upload cover images for posts
- Add comments on posts
- Responsive design

## Tech Stack

- Node.js & Express.js
- MongoDB with Mongoose
- EJS templating
- JWT for authentication
- Multer for file uploads
- Bootstrap for styling

## Setup

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:

   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database_name>
   PORT=3000
   JWT_SECRET=your_jwt_secret_key
   ```

   **Note:**

   - Replace `<username>`, `<password>`, `<cluster>`, and `<database_name>` with your actual MongoDB Atlas credentials
   - You can also use a local MongoDB: `mongodb://127.0.0.1:27017/blogifyx`
   - Generate a strong JWT secret for production

4. Run the app:
   ```bash
   npm start
   ```

Visit `http://localhost:3000` to see the app.

## Screenshots

Here's how the website looks:

### HomePage

![Blog View](public/images/Screenshot%202025-07-07%20154328.png)

### Signin Page

![Homepage](public/images/Screenshot%202025-07-07%20152854.png)

### Blog View

![Blog Creation](public/images/Screenshot%202025-07-07%20154349.png)

## How it works

- Users can register and login
- Authenticated users can write blog posts with images
- Anyone can read posts and logged-in users can comment
- Authors can edit/delete their own posts

## Project Structure

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

Made with ❤️ while learning full-stack development
