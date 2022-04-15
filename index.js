const express = require("express");

const app = express()


app.get("/test", (req, res)=> {
    res.status(200).send("Test server is up")
})

app.listen(3000, ()=> {
    console.log("Server is Running...")
})

module.exports = app