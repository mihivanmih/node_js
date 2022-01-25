import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './router/index.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)

const PORT = process.env.PORT || 3200

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`) )
    } catch (e) {
        console.log(e)
    }
}

start()