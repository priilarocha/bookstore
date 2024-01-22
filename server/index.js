import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { mongo } from "mongoose";

const app = express();

app.get("/", (request, response) => {
    // console.log(request)
    // return response.status(234).send("Welcome to MERN Stack");
    response.send("Yay, welcome to MERN Stack")
});


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });