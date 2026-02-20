import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 3000

const movie = express()

movie.listen(PORT,()=>{
    console.log(`Server is On : http://localhost:${PORT}`);
})