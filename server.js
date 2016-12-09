const path = require('path');
const express = require('express')

// Environment variables with sensible defaults
const port = process.env.PORT || 6969;

const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(port, function() {
  console.log('listening on port', port)
});
