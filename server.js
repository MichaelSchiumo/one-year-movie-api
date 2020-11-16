const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Hello World!' }));

app.use('/api/movies', require('./routes/movies'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
