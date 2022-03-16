import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { config } from "./shared/config";

mongoose
    .connect(config.mongodb.host, { keepAlive: true, dbName: config.mongodb.dbName })
    .then(() => {
        console.log("Connected to database");
    })
    .catch(() => {
        console.log("Database connection failed");
    });

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS, PUT");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.get("/", (req, res) => {
    console.log("server is running");
    res.send("Medium clone server is running");
});

export default app;
