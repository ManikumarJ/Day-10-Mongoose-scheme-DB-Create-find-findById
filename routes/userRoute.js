import express from "express";
import { createData } from "../controllers/dataControl";

const movieRoute = express.Router()


movieRoute.post('/create',createData)
// movieRoute.get('/get',getData)
// movieRoute.get('/getid/:userid',getByID)

export default movieRoute

//  http://localhost:5000/api/movie/create