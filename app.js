const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Allset up for the CI/CD done in aws'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
