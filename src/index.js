const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

let hello=`
    <marquee style="color: red;font-size: large;" behavior="" direction="">HELLO USER</marquee>
`
app.get('/hello', (req, res) => {
    res.send(hello);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});