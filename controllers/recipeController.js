import RecipeModel from "../models/recipe.js"

class recipeController {
    static createDoc = async (req, res) => {

        //  console.log(req.body)

        try {
            const { title, description, ingredients, instruction } = req.body
            const doc = new RecipeModel({
                title: title,
                description: description,
                ingredients: ingredients,
                instruction: instruction
            })
            // saving doc 
            const result = await doc.save()
            // console.log(result)
            res.redirect("/recipe")
            
           console.log(req.body)
        } catch (error) {
            console.log(error)
        }
    }
    static getAllDoc = async (req, res) => {
        try {
            const result = await RecipeModel.find()
            // console.log(result)
            res.render("index", { data: result })
        } catch (error) {
            console.log(error)
        }

    }
    static editDoc = async (req, res) => {
       // console.log(req.params.id)
        try {
            const result = await RecipeModel.findById(req.params.id)
            // console.log(result)
            res.render("edit", {data: result})
        } catch (error) {
            console.log(error)
        }
        
    }
    static updateDocById = async (req, res) => {
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await RecipeModel.findByIdAndUpdate(req.params.id, req.body)
        } catch (error) {
            console.log(error)
        }
        res.redirect("/recipe")
    }
    static deleteDocById = async (req, res) => {
        try {
            const result = await RecipeModel.findByIdAndDelete(req.params.id)
            res.redirect("/recipe")
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default recipeController