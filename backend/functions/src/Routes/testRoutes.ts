import express from "express";
import {getClient} from "../db"
import test from "../model/testModel"

const testRoutes = express.Router();


testRoutes.get('/', async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection<test>('toad_test').find().toArray();
        console.log(results);
        res.json(results);
    } catch  (e) {
        console.error("Error ", e);
        res.status(500).json({message: "Internal Server Error"});
    }
});


const axios = require('axios');

var cron = require('node-cron');

cron.schedule('* * * * *', () => {
    console.log("Exicuted ---------------------------------------------------")
    var potato = axios.get('http://localhost:5001/test-333f0/us-central1/api/toad-test')
    .then((response: { data: any; }) => {
        return response.data;
        console.log(response.data);
    });
    console.log(potato);
});  


testRoutes.post("/", async (req, res) => {
    const test = req.body as test;
    try {
    const client = await getClient();
    await client.db().collection<test>('new_data').drop();
    await client.db().collection<test>('new_data').insertOne(test);
    res.status(201).json(test);
    } catch (e) {
        console.error("Error ", e);
        res.status(500).json({message: "Internal Server Error"});
    }
});


export default testRoutes;