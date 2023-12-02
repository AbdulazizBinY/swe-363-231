const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use('/static', express.static(path.join(__dirname, 'public')));

// Serve mainPage.html at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/mainPage.html'));
});

app.use(express.urlencoded({ extended: true }));

const processForm = (req, res, next) => {
    console.log('Processing form data:', req.body);
    next();
};

app.post('/submit-form', processForm, (req, res) => {
    res.send('Form submission processed');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});