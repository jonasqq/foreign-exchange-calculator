/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('dist'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
