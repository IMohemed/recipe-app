const express = require('express');
const mongoose = require("mongoose");
const recipeModel = require("../Models/recipes");
const userModel = require('../Models/Users');

const recipeRouter=express.Router();

recipeRouter.get ("/" , async (req,res) => {
    try {
        const response= await recipeModel.find({});
        res.json(response);
    } catch (err) {
       res.json(err) 
    }
})
recipeRouter.post ("/" , async (req,res) => {
    const recipe = new recipeModel(req.body);
    try {
        const response= await recipe.save();
        res.json(response);
    } catch (err) {
       res.json(err) 
    }
})
recipeRouter.put ("/" , async (req,res) => {
    
    try {
        const recipe = await recipeModel(req.body.recipeID);
        const user = await userModel(req.body.userID);
        user.savedRecipe.push(recipe);
        await user.save();
        res.json({savedRecipe:user.savedRecipe});
    } catch (err) {
       res.json(err) 
    }
})
recipeRouter.get ("/savedRecipes/ids" , async (req,res) => {
    try {
        const user = await userModel.findById(req.body.userID);
        res.json({savedRecipe:user?.savedRecipe});
    } catch (err) {
       res.json(err) 
    }
})
recipeRouter.get ("/savedRecipes" , async (req,res) => {
    try {
        const user = await userModel.findById(req.body.userID);
        const savedRecipe = await recipeModel.find({
            _id:{$in:user.savedRecipe}
        });
        res.json({savedRecipe});
    } catch (err) {
       res.json(err) 
    }
})

module.exports=recipeRouter;