import express from "express"
const router = express.Router()
// import studentController from "../controllers/studentController.js"
import recipeController from "../controllers/recipeController.js"

router.get("/", recipeController.getAllDoc)
router.post("/", recipeController.createDoc)
router.get("/edit/:id", recipeController.editDoc)
router.post("/update/:id", recipeController.updateDocById)
router.post("/delete/:id", recipeController.deleteDocById)


export default router