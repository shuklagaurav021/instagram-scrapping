import express, { Application, Request, Response } from 'express'

import todoRoutes from './routes/index'
const createServer = (): express.Application => {
  
  const app: Application = express()

  // Body parsing Middleware
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(todoRoutes)

  app.get('/', async (req: Request, res: Response): Promise<Response> => {
    console.log(req)
    return res.status(200).send({
      message: 'Hello World!',
    })
  })

  return app
}

export default createServer
