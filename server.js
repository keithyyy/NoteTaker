//  Dependencies

const express = require('express');
const path = require('path');
const { urlencoded } = require('body-parser');

// Setting up express

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"))
})

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
})



app.listen(PORT, () =>  console.log(`App listening on PORT ${PORT}`));
