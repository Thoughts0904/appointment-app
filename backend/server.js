const express = require('express');
const {Pool} = require('pg');
const cors = require('cors'); // 1. Import it at the top

const app = express();

app.use (cors()); // 2. Activate it right here!
app.use(express.json());

// ... then your routes follow below ...

app.get('/api/appointments', async (req, res) => {
  // your database logic
});