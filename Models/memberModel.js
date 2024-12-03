import mongoose from "mongoose";


const memberSchema = new mongoose.Schema({
    name: {type:String,require: true},
    position: {type:String,require: true}
})

const memberModel = mongoose.models.member || mongoose.model('member',memberSchema);

export default memberModel