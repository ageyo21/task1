const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// GET route for form
app.get('/', (req, res) => {
    res.render('form');
});

// POST route for form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`Thanks, We have received your infromation`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
