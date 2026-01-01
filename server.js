const express = require("express");
const app = express();
const colors = require("colors")

const PORT = 8000;

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello from the server budddy"
    }
    )
})
app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`.bgGreen.white)
})