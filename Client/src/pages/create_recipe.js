import axios from "axios";
import { useState } from "react";
import {getUserId} from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";

export const CreateRecipe= () => {
   const userID = getUserId();
    const [recipe,setRecipe] = useState({
        name : "",
        ingredients:[],
        instructions:"",
        imageurl: "",
        cookingTime:0,
        userOwner:userID,
    })

    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name,value} = event.target;
        setRecipe({...recipe, [name]:value})
     };
     const handleIngredientChange = (event,index) => {
        const {value} = event.target;
        const ingredients = recipe.ingredients;
        ingredients[index] = value;
        setRecipe({...recipe, ingredients});
        
     };
     const addIngredient = ()=> {
        setRecipe({...recipe, ingredients:[...recipe.ingredients,""]});
     };
     console.log(recipe);
     const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/recipies", recipe)
            alert("recipe created");
            navigate("/");
        } catch (err) {
            console.error(err);
        }
     }
    return (
        <div className="create-recipe">
          <h2>Create Recipe</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              //value={recipe.name}
              onChange={handleChange}
            />
            {/* <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={recipe.description}
              onChange={handleChange}
            ></textarea> */}
            <label htmlFor="ingredients">Ingredients</label>
            {recipe.ingredients.map((ingredient, index) => (
              <input
                key={index}
                type="text"
                name="ingredients"
                value={ingredient}
                onChange={(event) => handleIngredientChange(event, index)}
              />
            ))}
            <button type="button" onClick={addIngredient}>
              Add Ingredient
            </button>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              //value={recipe.instructions}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="imageurl">Image URL</label>
            <input
              type="text"
              id="imageurl"
              name="imageurl"
              value={recipe.imageurl}
              onChange={handleChange}
            />
            <label htmlFor="cookingTime">Cooking Time (minutes)</label>
            <input
              type="number"
              id="cookingTime"
              name="cookingTime"
              //value={recipe.cookingTime}
              onChange={handleChange}
            />
            <button type="submit">Create Recipe</button>
          </form>
        </div>
    )
}