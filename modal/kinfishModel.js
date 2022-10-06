import mongoose  from "mongoose";
// the data structure for our databases in the schema
const kinfishSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    tech: {
        type:String, 
        required:true,
    },
    subs: {
        type:Boolean,
        required:true,
        default:false,
    }
})
export default mongoose.model('Kinfish' ,kinfishSchema)