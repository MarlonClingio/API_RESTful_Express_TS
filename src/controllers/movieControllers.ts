import { Request, Response } from "express";

import { MovieModel } from "../models/Movie";

import logger from "../../config/logger";
import { error } from "console";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body
    const movie = await MovieModel.create(data)
    return res.status(201).json(movie)
  } catch (e: any) {
    logger.error(`Erro no Sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde." })
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe!" })
    }

    return res.status(200).json(movie)

  } catch (e: any) {
    logger.error(`Erro no Sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde." })
  }
}

export async function getAllMOvies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find()
    return res.status(200).json(movies)
  } catch (e: any) {
    logger.error(`Erro no sistema: ${e.message}`)
    return res.status(500).json({ error: "Por favor, tente mais tarde." })
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe!" })
    }

    await movie.deleteOne()

    return res.status(200).json({ msg: "Filme removido com Sucesso!" })

  } catch (e: any) {
    logger.error(`Erro no sistema: ${e.message}`)
    return res.status(500).json({ error: "Por favor, tente mais tarde." })
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {

    const id = req.params.id
    const data = req.body
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe!" })
    }

    await MovieModel.updateOne({ _id: id }, data)

    return res.status(200).json(data)

  } catch (e: any) {
    logger.error(`Erro no sistema: ${e.message}`)
    return res.status(500).json({ error: "Por favor, tente mais tarde." })
  }
}