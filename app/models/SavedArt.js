var mongoose = require("mongoose");
var savedSchema = mongoose.Schema({
    title: String,
    url: String
});

module.exports = mongoose.model("saved", savedSchema);