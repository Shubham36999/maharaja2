const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const today = new Date();
  const month = monthNames[today.getMonth()];
  const day = today.getDate();
  const baseName = `${month}${day}`;
  let imageName = `${baseName}.jpg`;

  const pngPath = path.join(__dirname, 'public/images/daily', `${baseName}.png`);
  if (fs.existsSync(pngPath)) {
    imageName = `${baseName}.png`;
  }

  res.render('index', { imageName });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
