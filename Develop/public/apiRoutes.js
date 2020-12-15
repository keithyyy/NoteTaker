const path = require("path");
const fs = require("fs");

// linking our routes to data source
let db = require("../db/db.json")


module.exports = (app) => {

    writetoDB = (arr) => {
        fs.writeFileSync("Develop/db/db.json", JSON.stringify(arr))
    }

    // API GET requests : when they visit this URL they'll be shown their notes in JSON
    app.get("/api/notes", (req,res) => {
        res.json(db);
    })

    // API POST requests : when they submit, their data it'll be in JSON.
    // Which will be pushed to our db array

    app.post("/api/notes", (req,res) => {
        
        // setting user entry to be note.
        noteEntry = req.body

        // ID of the note is equal to position in db.
        noteEntry.id = db.length;
        // pushing note entry into array
        db.push(noteEntry);

        // write file to json file
        writetoDB(db);
        return res.json(db);

    })

    app.delete("/api/notes/:id", (req,res) => {
        let id = req.params.id;
        for (let i = 0; i < db.length; i++) {
            if (db[i].id == id) {
                db.splice(i, 1);
                writetoDB(db);
                res.json(db)
                break;
            }
        }
    })


}