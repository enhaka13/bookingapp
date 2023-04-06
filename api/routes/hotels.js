import express from "express"
import Hotel from "../models/Hotel.js"

const router = express.Router()

//CREATE
router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.send(201).json(savedHotel)
    } catch (err) {
        throw err
    }
})

export default router