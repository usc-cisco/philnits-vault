const fs = require('fs');
const path = require('path');

// Helper function to recursively search for .md files
function getMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getMarkdownFiles(filePath, fileList);
    } else if (filePath.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Removes all of Spaced Repetition's flashcard timers to review all the cards again.
 */
function resetFlashcardTimers() {
  // Move up one directory
  const parentDir = path.resolve(__dirname, '..');

  // Get all .md files recursively
  const markdownFiles = getMarkdownFiles(parentDir);

  markdownFiles.forEach((filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');

    // Use regex to find and remove comments that start with <!--SR:
    const updatedContent = content.replace(/<!--SR:.*?-->/g, '');

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Processed file: ${filePath}`);
  });

  console.log('Flashcard timers reset in all markdown files.');
}

resetFlashcardTimers();
