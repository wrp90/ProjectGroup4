const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let currentRes = [];
let pendingRes = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables.html', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve.html', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/home.html', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/api/currentRes', (req, res) => res.json(currentRes));

app.get('/api/pendingRes', (req, res) => res.json(pendingRes));

app.post('/api/currentRes', (req, res) => {

    const newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
    console.log(newReservation);
  
    currentRes.push(newReservation);
    res.json(newReservation);
  });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));