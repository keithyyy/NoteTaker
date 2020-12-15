const path = require('path');

// routing

module.exports = (app) => {
    // html GET requests for when user visits a specific page.

    
    // for when they get to actual note taking page
    app.get("/notes", (req,res) => {
        res.sendFile(path.join(__dirname, "notes.html"))
    })
    
    // our default if no match found (the home page)
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "index.html"));
    })
}

