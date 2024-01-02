const mongoose = require('mongoose');
const userSchema = new mongoose.Schema

const UserSchema = new mongoose.Schema({
    _id: String,
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number,
});
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;