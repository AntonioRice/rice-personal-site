const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "dist")));

// The "catchall" handler for any requests that don't match one above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 80;
app.listen(port);

console.log(`Server listening on port ${port}`);
