import { body } from 'express-validator'

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título é obrigátorio!")
      .isLength({ min: 5 })
      .withMessage("O Titulo precisa ter no mínimo 5 caracteres"),
    body("rating")
      .isNumeric()
      .withMessage("A nota precisa ser um número valido!")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("A nota precisa ser entre 0 a 10!")
        }
        return true
      }),
    body("description")
      .isString()
      .withMessage("A descrição é obrigátoria!"),
    body("director")
      .isString()
      .withMessage("O diretor do filme é obrigátorio!"),
    body("poster")
      .isURL()
      .withMessage("A imagem precisa ser uma URL.")
  ]
}