const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
tag : {
  type : String,
  required : true,
},
patterns : [String],
   
responses: [String],

});

const Listing = mongoose.model("Listing", chatSchema);
module.exports = Listing;