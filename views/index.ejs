const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const today = new Date();
  const month = monthNames[today.getMonth()];
  const day = today.getDate();
  const baseName = `${month}${day}`;
  let imageName = `${baseName}.jpg`;

  const pngPath = path.join(__dirname, '../public/images/daily', `${baseName}.png`);
  if (fs.existsSync(pngPath)) {
    imageName = `${baseName}.png`;
  }

  // ✅ Inject full URL for mobile sharing compatibility
  const imageURL = `/images/daily/${imageName}`;
  const absoluteImageURL = req.protocol + '://' + req.get('host') + imageURL;

  res.render('index', { imageName, imageURL, absoluteImageURL });
});

module.exports = app;
