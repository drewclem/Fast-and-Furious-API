const express = require('express')
const app = express()
const fs = require('fs')

app.get("/", (req, res) => {
  res.send('Welcome to my Fast and Furious API! A work in progress indeed. Visit "/cars" for car data and "/drivers" for character data.')
})

app.get("/cars", (req, res) => {
  let carData = JSON.parse(fs.readFileSync('cars.json', 'utf-8'))

  res.json(carData)
})

app.get('/drivers', (req, res) => {
  let driverData = JSON.parse(fs.readFileSync('drivers.json', 'utf-8'))

  res.json(driverData)
})

app.listen(process.env.PORT, () => {
  console.log("Server running on port 3000");
})