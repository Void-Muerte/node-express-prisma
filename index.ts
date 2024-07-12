const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3004;

const app = express();

// middlewares
app.use(express.json());

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));


module.exports = app;