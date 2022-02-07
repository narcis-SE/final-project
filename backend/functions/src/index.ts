import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
// import {scheduler} from "./Routes/toad-scheduler"

import testRoutes from "./Routes/testRoutes";

const app = express();
app.use(cors());
app.use(express.json());





app.use('/toad-test', testRoutes);

export const api = functions.https.onRequest(app);