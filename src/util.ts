const fs = require("fs");
const path = require("path");

// Define source and target directories
const sourceDir = "./"; // Change this to your source directory
const targetDir = "./zMETA"; // Change this to your target directory

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

// Function to move files that start with a number
function moveFilesStartingWithNumber() {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error("Error reading source directory:", err);
      return;
    }

    files.forEach((file: string) => {
      // Check if the file starts with a number
      if (file.startsWith("META")) {
        const oldPath = path.join(sourceDir, file);
        const newPath = path.join(targetDir, file);

        // Move the file
        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error(`Error moving file ${file}:`, err);
          } else {
            console.log(`Moved file: ${file}`);
          }
        });
      }
    });
  });
}

// Run the function
moveFilesStartingWithNumber();
