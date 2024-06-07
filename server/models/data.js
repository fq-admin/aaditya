import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    name: {type:String, required:true},
    data: {type:String,requrired:true},
});

const DataModel=mongoose.model('Data', DataSchema);

export {DataModel};