const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    
    ingredients:[{
        type:String,
        required:true
    }],
    instructions:{
        type:String,
        required:true,
    },
    imageurl:{
        type:String,
        required:true,
    },
    cookingTime:{
        type:Number,
        required:true,
    },
    userOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
  },
  {
    collection:"recipe"
  },
);
   
const recipeModel = mongoose.model("recipe",recipeSchema);
module.exports=recipeModel;