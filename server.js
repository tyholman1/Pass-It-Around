const express = require("express")
const app =express()
const PORT = process.env.PORT || 3000

app.get("/", (request, response) =>{
    response.send("<h1>99 bottle of pills on the wall</h1><br/><a href='/98'>Take one down, pass it around</a>")
})

app.get("/:number_of_bottles", (req, res) =>{
    if(req.params.number_of_bottles > 0){    
        res.send(`${req.params.number_of_bottles} Bottles of pills on the wall <br/><a href='/${req.params.number_of_bottles - 1}'>Take one down, pass it around</a>`)
    }else{
        res.send("<h1>0 bottle of pills on the wall</h1><br/><a href='/'>Take one down, pass it around</a>")
    }
})

app.listen(PORT, ()=>{
    console.log(`Running on port: ${PORT}`)
})