const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    
    password:{
        type:String,
        required:true,
    },
    savedRecipe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"recipe"
    }
  },
  {
    collection:"user"
  },
);
   
const userModel = mongoose.model("user",schema);
module.exports=userModel;
