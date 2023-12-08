import express, { Router } from "express"
import http from 'http'

export const createServer = async () => {
    const router = Router()
    const serverRestApi = Router()

    const app = express()
    
    const server = http.createServer(app)

    app.use('/api', serverRestApi)

    return server
}