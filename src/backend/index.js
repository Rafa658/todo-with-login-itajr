const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Teste")
})



const port = 4000
app.listen(port, () => {
    console.log(`Iniciado na porta ${port}`)
})