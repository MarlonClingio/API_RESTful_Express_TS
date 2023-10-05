import { Router, Request, Response } from "express";
import { createMovie, findMovieById, getAllMOvies, removeMovie, updateMovie } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router()

export default router
  .get("/api", (req: Request, res: Response) => {
    res.status(200).send("API Working!")
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById)
  .get("/movie", getAllMOvies)
  .delete("/movie/:id", removeMovie)
  .patch("/movie/:id", movieCreateValidation(), validate, updateMovie)