// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   biodata: { type: String, required: true },
//   jobRole: { type: String, required: true },
// });

// const User = mongoose.model("Post", userSchema);

// export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  biodata: { type: String, required: true },
  jobRole: { type: String, required: true },
  image: { type: String } // Add image as a URL
});

const User = mongoose.model("Post", userSchema);

export default User;
