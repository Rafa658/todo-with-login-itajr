const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const UserService = require("../backend/services/UserService")
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')

// app.use(express.static("../../../todo-with-login-itajr"))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 4000
const url = 'mongodb://127.0.0.1:27017/itajr-users'
const JWTSecret = '113b7ab9bca2919fe79a69cccae733f6e17cdc5cafb6f2b6e3c81cd94ff4cc4462ccbd9c01975932e6dd58ab0ef25a82f8ce6aefcd309e580892a1ffdb4d9d44'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

function auth(token) {
    var verified

    jwt.verify(token, JWTSecret, (err, data) => {
        if (err) {
            verified = false
        } else {
            verified = true
        }
    })

    return verified
}

app.post("/auth", (req, res) => {

    var { email, password } = req.body

    if (email != undefined) {
        UserService.Find(email, password)
            .then(list => {
                jwt.sign({ email: list[0].email }, JWTSecret, { expiresIn: 5 }, (err, token) => {
                    if (err) {
                        res.status(400)
                        res.json({ err: "Falha Interna" })
                    } else {
                        res.status(200)
                        // res.send({ token: token })
                        res.json({ token: token })
                    }
                })

            })
            .catch(err => {
                console.log(err)
                res.status(404)
                res.json({ err: "Email e/ou senha inválidos" })
            })
    }
})

app.post('/verify', (req, res) => {
    var { user } = req.body

    var verified = auth(user.token)

    res.json({ verified })
    res.status(200)

})

app.post("/cadastro", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    body = req.body

    var status = await UserService.Create(
        body.email,
        body.password
    )

    if (status) {
        res.status(200)
        res.send("OK")
    } else {
        res.status(400)
        res.send('Erro')
    }
})


app.listen(port, () => {
    console.log(`Iniciado na porta ${port}`)
})