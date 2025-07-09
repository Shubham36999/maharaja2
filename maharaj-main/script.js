window.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const monthNames = [
    "jan", "feb", "mar", "apr", "may", "jun",
    "jul", "aug", "sep", "oct", "nov", "dec"
  ];

  const month = monthNames[today.getMonth()];
  const day = today.getDate();
  const imageName = `${month}${day}.jpg`;

  const folders = ["images/daily/", "images/", "assets/img/", "img/", "./"];
  const imgElement = document.getElementById("daily-image");

  // Try loading image from available folders
  let imageLoaded = false;

  const tryNextFolder = (index) => {
    if (index >= folders.length) return; // No folder found

    const testPath = folders[index] + imageName;
    const testImg = new Image();

    testImg.onload = () => {
      imgElement.src = testPath;
      imageLoaded = true;
    };

    testImg.onerror = () => {
      tryNextFolder(index + 1);
    };

    testImg.src = testPath;
  };

  tryNextFolder(0); // Start checking from first folder
});

// Optional: Auto-refresh at exactly 11:59 PM
const now = new Date();
const millisTillMidnight = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  23, 59, 0, 0
) - now;

if (millisTillMidnight > 0) {
  setTimeout(() => location.reload(), millisTillMidnight + 1000);
}
