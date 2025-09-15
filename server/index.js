const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./config');
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Vely Tools Server Running!'));

app.use('/auth', require('./routes/auth'));
app.use('/server', require('./routes/server'));
app.use('/admin', require('./routes/admin'));

app.listen(5000, () => console.log('Server started on port 5000'));