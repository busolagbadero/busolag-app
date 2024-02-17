// app.js
const express = require('express');
const app = express();
const path = require('path');

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the about page
app.get('/about', (req, res) => {
  res.send("BusolaG is just that girl! She brings you the trendiest and most fashionable clothing and accessories. Get ready to slay!");
});

// Jest testing endpoint
app.get('/test', (req, res) => {
  res.send("Running Jest tests...");
  // Add Jest testing logic here
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // Exporting app for testing
