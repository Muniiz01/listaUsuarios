import express from 'express'

import cors from 'cors'

import mongoose from 'mongoose'

import Users from './Models/Users.js'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3001)

mongoose.connect("mongodb+srv://munizz:.Cny_MNUn3p!Ltv@munizz.hdcovxa.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log('Servidor conectado com database'))
  .catch((erro) => console.log(erro))

app.get('/usuarios', async function (request, response) {

  const user = await Users.find()

  response.send(user);
});

app.post('/usuarios', async function (request, response) {
  const user = request.body

  const newUser = await Users.create(user)

  return response.json(newUser)
});

