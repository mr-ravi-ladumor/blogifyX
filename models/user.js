const { createHmac, randomBytes } = require("crypto");
const { Schema, model } = require("mongoose");
const {createTokenForUser,validateToken } = require('../services/authentication');

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageURL: {
      type: String,
      default: "/images/default.png",
    },
  },
  { timestamps: true }
);

// Pre-save middleware for hashing the password
userSchema.pre("save", function (next) {
  const user = this;

  // Only hash the password if it is modified
  if (!user.isModified("password")) return next();

  const salt = randomBytes(16).toString('hex');
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

// Static method for matching the password during login
//userSchema.static("matchPassword", async function(e,p)) 
userSchema.statics.matchPasswordAndGenerateToken = async function(email, password) {
  const user = await this.findOne({ email });

  if (!user) throw new Error('User Not Found!');

  const salt = user.salt;
  const hashedPassword = user.password;

  // Create the hash for the password provided by the user
  const userProvidedHash = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  // Compare the stored hash and the user-provided hash
  if (hashedPassword !== userProvidedHash) {
    throw new Error('Incorrect password!');
  }
  const token = createTokenForUser(user);
  return token;
};

const User = model("user", userSchema);
module.exports = User;
