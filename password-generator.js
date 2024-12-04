// Task: Generate a random password using "generate-password"

const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12, // Length of the password
        numbers: true, // Include numbers
        symbols: true, // Include symbols
        uppercase: true, // Include uppercase letters
        lowercase: true, // Include lowercase letters
    });

    console.log('Generated Password:', password);
}

// Generate and log a random password
generateRandomPassword();
