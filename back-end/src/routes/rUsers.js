import express from "express";
import * as control from "../controller/cUsers.js";
const router = express.Router();

router.get("/", async (req, res) => {
    const result = await control.getAll();

    result
        ? res.json(result)
        : res.json("No users found");
});

export default router;
