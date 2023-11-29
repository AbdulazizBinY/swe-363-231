const express = require('express');
const app = express();


const path = require('path')
app.use('/static', express.static(path.join(__dirname, '/public/mainPage.html'))) // Open the main page.


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