const mongoose = require("mongoose");
const newSchema = new mongoose.Schema({
    originalURL: { type: String, required: true },
    shortURLKey: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
    clickCount: { type: Number, default: 0 },
    clickTimestamps: [{ type: Date }],
})
const Url=mongoose.model("url",newSchema);
module.exports=Url;