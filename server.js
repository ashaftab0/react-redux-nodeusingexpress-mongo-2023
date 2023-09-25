const express = require('express');
const app = express();


app.get('/', (re, res) => res.send('API Running Woo'));


const PORT = process.env.PORT | 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));