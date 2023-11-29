const express = require('express');
const app = express();


var connect = require("connect");

var app = connect.createServer().use(connect.static(__dirname + '/public/mainPage.html'));

app.use(express.urlencoded({ extended: true }));

const processForm = (req, res, next) => { // Until now, no need to store anything.
    console.log('Processing form data:', req.body);
    next();
};

app.post('/submit-form', processForm, (req, res) => { // This the form of the contact in the mainHTML file (main page)
    res.send('Form submission processed');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});