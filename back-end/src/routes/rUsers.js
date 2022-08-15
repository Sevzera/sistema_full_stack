import express from "express";
import * as control from "../controller/cUsers.js";
const router = express.Router();

router.get("/", async (req, res) => {
    const result = await control.getAll(req, res);
    const data = JSON.stringify(result);
	res.send(data);
});

export default router;
