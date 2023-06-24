import mongoose from "mongoose";

// Defining Schema

const recipeSchema = new mongoose.Schema({
    title: { type: String, trim: true },
    description: { type: String,   },
    ingredients: { type: String,  },
    instruction: {type: String, }
})

// Model
const RecipeModel = mongoose.model("recipe", recipeSchema)

export default RecipeModel