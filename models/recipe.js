import mongoose from "mongoose";

// Defining Schema

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    instruction: {type: String, required: true}
})

// Model
const RecipeModel = mongoose.model("recipe", recipeSchema)

export default RecipeModel