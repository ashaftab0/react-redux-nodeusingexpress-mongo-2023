const express = require('express');
const connectDB = require('./config/db');
const app = express();

const userRoute = require('./routes/api/users');
const authRoute = require('./routes/api/auth');
const profileRoute = require('./routes/api/profile');
const postsRoute = require('./routes/api/posts');

//Connect Database
connectDB();

// Define Routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);
app.use('/api/posts', postsRoute);

app.get('/', (re, res) => res.send('API Running Woo'));


const PORT = process.env.PORT | 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));