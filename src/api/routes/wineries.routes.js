const Vin = require("../models/wineries.model");
const express = require("express");
const router = express.Router();

const formData = require("express-form-data");
router.use(formData.parse());

router.get("/", async (req, res) => {
    try {
        const vins = await Vin.find();
        res.status(200).json(vins);
    } catch (error) {
        res.status(500).json({ message: "There was an error in" + error.message });
    }
});

router.get("/:vinid", async (req, res) => {
    try {
        const vin = await Vin.findById(req.params.vinid);
        res.status(200).json(vin);
    } catch (error) {
        res.status(500).json({ message: "There was an error in" + error.message });
    }
});

router.post("/", async (req, res) => {
    console.log("request body: ", req.body);
    try {
        let newVin = new Vin(req.body);
        await newVin.save();
        res
            .status(201)
            .json({ message: "Der er oprettet en ny vin gaard", created: newVin });
    } catch (err) {
        console.log("ERROR ", err);
        res.status(400).json({ ERROR: "There was an error" });
    }
});

router.put("/:vinid", async (req, res) => {
    if (JSON.stringify(req.body) === "{}") {
        return res.status(410).json({ message: "No data to edit" });
    }

    try {
        let editVin = await Vin.findByIdAndUpdate(req.params.vinid, req.body, {
            new: true,
        });
        if (editVin) {
            res.status(200).json({ message: "Todo is edited", edited: editVin });
        } else {
            res.status(410).json({ message: "Nothing was edited", edited: editVin });
        }
    } catch (err) {
        console.log("ERROR", err);
        res.status(500).json({ message: "There was an error" });
    }
});

router.delete("/:vinid", async (req, res) => {
    try {
        let deleteVin = await Vin.findByIdAndDelete(req.params.vinid);
        if (deleteVin) {
            res.status(200).json({ message: "Todo is deleted", deleted: deleteVin });
        } else {
            res
                .status(410)
                .json({ message: "Nothing got deleted", deleted: deleteVin });
        }
    } catch (err) {
        console.log("ERROR", err);
        res.status(500).json({ message: "There was an error" });
    }
});

module.exports = router;
