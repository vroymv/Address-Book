require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

var addresses = [];

app.use(bodyParser.json());
main().catch((err) => console.log(err));

//Mongoose DB connection
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  // posts = await Blog.find();
}

//Creating Database Schema
const AddressBookSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  twitter: String,
  avatar: String,
  notes: String,
});

const Address = new mongoose.model("address", AddressBookSchema);

app.get("/api", async function (req, res) {
  try {
    addresses = await Address.find();
  } catch (err) {
    console.log(err);
  } finally {
    res.json(addresses);
  }
});

app.post("/updateAddress", async function (req, res) {
  const filter = {
    id: req.body.id,
  };

  const newAddress = {
    firstName: req.body.first,
    lastName: req.body.last,
    twitter: req.body.twitter,
    avatar: req.body.avatar,
    notes: req.body.notes,
  };

  try {
    await Address.findOneAndUpdate(filter, newAddress);
    res.json({
      status: "Id successfully received",
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/createAddress", async function (req, res) {
  try {
    let id = Math.random().toString(36).substring(2, 9);
    const newAddress = new Address({
      id: id,
    });
    await newAddress.save();
    res.json({
      id: id,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/findContact", async function (req, res) {
  try {
    const address = await Address.find({ id: req.body.contactId });
    res.json(address);
  } catch (error) {
    console.log(error);
  }
});

app.post("/deleteContact", async function (req, res) {
  try {
    await Address.deleteOne({ id: req.body.id });
  } catch (error) {
    console.log(error);
  }
});

// app.post('/compose',  async (req, res)=>{
//   try{
//     const newPost = new Blog({
//       postHead: req.body.title,
//       postBody: req.body.content
//     })

//     await newPost.save();
//     res.json({
//       message : 'Post added successfully'
//     })
//   }
//   catch(err) {
//     console.log(err);
//   }
// })

app.listen(3000, () => {
  console.log("server started on port 3000");
});
