const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


router.get("/notes",(req,res)=>{
    const notes = JSON.parse(fs.readFileSync("db/db.json"))
            res.json(notes)
});

router.post("/notes",(req,res)=>{
    const addedNotes = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
     }

    const newNotes = JSON.parse(fs.readFileSync("db/db.json"))          
     newNotes.push(addedNotes)
     fs.writeFileSync("db/db.json", JSON.stringify(newNotes))
     res.json(newNotes)
  })

module.exports = router;



