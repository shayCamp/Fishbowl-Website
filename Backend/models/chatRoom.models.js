const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Creating a new schema model - To write the format for our user model

const chatSchema = new Schema({ //Creating model
    CreatedByID:{type:String},
    CreatedByImage:{type:String},
    CreatedByName: {type:String},
    Date:{ type: Object},
    Tags: {type:Array},
    Deleted: {type:Boolean},
    Title: {type:String},
    Question:{type:String},
    Messages:{type:Array},
    Answered:{type:Boolean},
})

const Chat = mongoose.model('Chat', chatSchema) //Exporting model for use elsewhere
module.exports = Chat