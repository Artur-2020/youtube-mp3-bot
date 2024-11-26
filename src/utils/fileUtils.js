const fs = require('fs');
const path = require('path');

// Ensure valid file name
const cleanFileName = (name) => {
    return name.replace(/[\/\\?%*:|"<>]/g, '').substring(0, 50); // Limit file name length
};

// Create download directory if not exists
const createDownloadDir = (dir) => {
    const dirPath = path.resolve(dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

module.exports = { cleanFileName, createDownloadDir };
