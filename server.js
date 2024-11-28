const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Serve static files (HTML, CSS, JS, Images) from the "fullstack cw1" folder
app.use(express.static(path.join(__dirname)));

// Fallback route for 404 errors (optional)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html')); // Ensure this points to your main HTML file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
