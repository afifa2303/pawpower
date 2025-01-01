const mongoose = require('mongoose');

// Define the Donation schema
const DonationSchema = new mongoose.Schema({
    donorName: { type: String, required: true },
    amount: { type: Number, required: true },
    message: { type: String },
    donatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Donation', DonationSchema);