const express = require('express')
const app = express()
const fs = require('fs')

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