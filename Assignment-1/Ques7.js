const fs = require('fs');
const util = require('util');

// Promisify the fs.unlink function
const unlinkAsync = util.promisify(fs.unlink);

// Function to delete a file using the promisified fs.unlink
async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`File ${filePath} has been deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting file ${filePath}: ${err.message}`);
  }
}

// Call the deleteFile function with a specific file path
const filePathToDelete = 'del1.txt';
deleteFile(filePathToDelete);
