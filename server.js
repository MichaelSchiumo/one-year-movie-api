const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

//middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Hello World!' }));

app.use('/api/movies', require('./routes/movies'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
