const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/smartstay");
}

const initDB = async () => {
  await Listing.deleteMany({});
  console.log("Existing listings deleted.");
  await Listing.insertMany(initData.data);
  console.log("Database initialized with sample data.");
};

initDB();
