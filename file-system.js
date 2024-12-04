// Task: Create and read files using the file system module

const fs = require('fs');

// Create a file named "welcome.txt" with the content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File "welcome.txt" created successfully.');

    // Read data from the created file and log it to the console
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
    });
});
