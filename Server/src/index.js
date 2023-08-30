const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');


const router = require ("./routes/users.js");
const recipeRouter = require ("./routes/recipies.js");

mongoose.connect('mongodb+srv://mohemed:ijas1420@cluster0.wt5qu7d.mongodb.net/merntutorial?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
app.use(express.json());
app.use(cors());
app.use("/auth", router)
app.use("/recipies", recipeRouter)
// app.get("/getuser",async (req,res) => {
//     try {
//         const alluser=await usermodel.find({});
//         res.json(alluser);
//     } catch (error) {
//         console.log(error); 
//     }
    
    
// });


app.listen(3001,()=>{
    console.log('server runs');
});