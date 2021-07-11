const Mongoose = require("mongoose");
const infoSchema = Mongoose.Schema;

let Message = new infoSchema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    message:{
        type: String
    }
});

module.exports = Mongoose.model("Message", Message);