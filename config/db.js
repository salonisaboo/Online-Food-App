const mongoose = require("mongoose");

// MongoDB connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ Connected to Database: ${mongoose.connection.host}`);
  } catch (error) {
    console.log("❌ DB Connection Error:", error);
    process.exit(1); // stop app if DB fails
  }
};

module.exports = connectDb;
