const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is up!");
});