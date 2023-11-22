const express = require('express');
const res = require('express/lib/response');

const app = express();

// Calculator functions
const calculate = (n1, n2, operation) => {
    switch (operation) {
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1*n2;            
        case 'divide':
            return n1/n2;
        default:
            return 'Invalid Operation'
    }
}

app.get('/add', (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = calculate(n1, n2, 'add');
    res.json({ statuscode: 200, data: result });
});

app.get('/subtract', (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = calculate(n1, n2, 'subtract');
    res.json({ statuscode: 200, data: result });
});

app.get('/multiply', (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = calculate(n1, n2, 'multiply');
    res.json({ statuscode: 200, data: result });
});

app.get('/divide', (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = calculate(n1, n2, 'divide');
    res.json({ statuscode: 200, data: result });
});

const port = 3040;
app.listen(port, () => {
    console.log('hello i m listening to port' + port);
});
