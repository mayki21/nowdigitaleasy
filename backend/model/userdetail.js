const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String, // Changed type to String for flexibility with phone number formats
        required: true
    }
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
