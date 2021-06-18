const express = require("express");
const router = express.Router();
const Vin = require("../models/wineries.model");

const multer = require( 'multer' );
const upload = multer( {

    storage: multer.diskStorage( {
        destination: function ( req, file, cb ) {
            cb( null, 'public/images' );
        },
        filename: function ( req, file, cb ) {
            //cb(null, Date.now() + '-' + file.originalname)
            cb( null, file.originalname )
        }
    } )
} );

// const formData = require("express-form-data");
// router.use(formData.parse());

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

router.post("/admin", upload.single( 'image' ), async (req, res) => {
    console.log("request body: ", req.body);
    // let newVin;
    try {
        newVin = new Vin(req.body);
        newVin.image = req.file ? req.file.filename : '404.jpg';
        await newVin.save();
        res.status(201).json({ message: "Winerie was created", created: newVin });
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
            res.status(200).json({ message: "Winerie is edited", edited: editVin });
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
            res.status(200).json({ message: "Winerie is deleted", deleted: deleteVin });
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
