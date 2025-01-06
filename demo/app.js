const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8000;

// Enable CORS (optional, if you're making requests from a different domain)
const cors = require('cors');
app.use(cors());

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Set the directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);  // Create a unique filename
  },
});

const upload = multer({ storage: storage });

// Ensure the 'uploads' directory exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// File upload route
app.post('/fileUpload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  // The file path is created by multer and stored in req.file.path
  const filePath = req.file.path;

  // Send the file path in the response
  res.status(200).json({
    message: 'File uploaded successfully!',
    filePath: filePath,  // Return the file path in the response
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
