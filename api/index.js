const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const app = express();

// Serve static files from /public
app.use(express.static(path.join(__dirname, '../public')));

// Set EJS as templating engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Main route
app.get('*', (req, res) => {
  const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const today = new Date();
  const month = monthNames[today.getMonth()];
  const day = today.getDate();
  const baseName = `${month}${day}`;
  let imageName = `${baseName}.jpg`;

  // Prefer PNG if it exists
  const pngPath = path.join(__dirname, '../public/images/daily', `${baseName}.png`);
  if (fs.existsSync(pngPath)) {
    imageName = `${baseName}.png`;
  }

  // ✅ Construct absolute URL for image (needed for share on Android/Browser)
  const imageURL = `/images/daily/${imageName}`;
  const absoluteImageURL = `${req.protocol}://${req.get('host')}${imageURL}`;

  // Pass variables to EJS
  res.render('index', { imageName, imageURL, absoluteImageURL });
});

module.exports = app;
