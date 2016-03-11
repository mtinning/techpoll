const express = require('express');

const dir = process.argv[2];
const port = 8080;
const app = express();

app.use(express.static(dir));
app.listen(port);

console.log('\n Serving directory /' + dir + ' on port ' + port);
