const Book = require("../models/booking.model");
const express = require("express");
const router = express.Router();

const formData = require("express-form-data");
router.use(formData.parse());

router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "There was an error in" + error.message });
    }
});

router.get("/search/:bookid", async (req, res) => {

    try {
        const bok = await Book.find( {
            $or: [
                { "name": { "$regex": req.params.bookid, "$options": "i" } },
                { "booking": { "$regex": req.params.bookid, "$options": "i" } }
            ]
        } )

        // res.json( bok );
        res.status(200).json(bok);

    } catch ( err ) {
        res.status(500).json({ message: "There was an error in" + error.message });
    }

    // try {
    //     const bok = await Book.findById(req.params.bookid);
    //     res.status(200).json(bok);
    // } catch (error) {
    //     res.status(500).json({ message: "There was an error in" + error.message });
    // }
});

router.post("/admin", async (req, res) => {
    console.log("request body: ", req.body);
    try {
        let newBook = new Book(req.body);
        await newBook.save();
        res
            .status(201)
            .json({ message: "Der er oprettet en ny booking", created: newBook });
    } catch (err) {
        console.log("ERROR ", err);
        res.status(400).json({ ERROR: "There was an error" });
    }
});

router.put("/:bookid", async (req, res) => {
    if (JSON.stringify(req.body) === "{}") {
        return res.status(410).json({ message: "No data to edit" });
    }

    try {
        let editBook = await Book.findByIdAndUpdate(req.params.bookid, req.body, {
            new: true,
        });
        if (editBook) {
            res.status(200).json({ message: "Booking is edited", edited: editBook });
        } else {
            res.status(410).json({ message: "Nothing was edited", edited: editBook });
        }
    } catch (err) {
        console.log("ERROR", err);
        res.status(500).json({ message: "There was an error" });
    }
});

router.delete("/admin/:bookid", async (req, res) => {
    try {
        let deleteBook = await Book.findByIdAndDelete(req.params.bookid);
        if (deleteBook) {
            res.status(200).json({ message: "Booking is deleted", deleted: deleteBook });
        } else {
            res
                .status(410)
                .json({ message: "Nothing got deleted", deleted: deleteBook });
        }
    } catch (err) {
        console.log("ERROR", err);
        res.status(500).json({ message: "There was an error" });
    }
});

module.exports = router;
