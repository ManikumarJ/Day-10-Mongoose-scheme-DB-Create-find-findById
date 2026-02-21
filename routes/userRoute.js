import express from "express";
import { createData, getById, getData } from "../controllers/dataControl.js";

const movieRoute = express.Router()


movieRoute.post('/create',createData)
movieRoute.get('/getData',getData)
movieRoute.get('/getByData/:userid',getById)

export default movieRoute

//  http://localhost:5000/api/movie/create
//  http://localhost:5000/api/movie/getData
//  http://localhost:5000/api/movie/getByData/:userid