import express from "express";
import { createData, getData } from "../controllers/dataControl.js";

const movieRoute = express.Router()


movieRoute.post('/create',createData)
movieRoute.get('/getData',getData)
// movieRoute.get('/getid/:userid',getByID)

export default movieRoute

//  http://localhost:5000/api/movie/create
//  http://localhost:5000/api/movie/getData