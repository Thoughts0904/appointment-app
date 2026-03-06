require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // set in .env
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/appointments', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM appointments ORDER BY date');
  res.json(rows);
});

app.post('/api/appointments', async (req, res) => {
  const { date, subject } = req.body;
  const { rows } = await pool.query(
    'INSERT INTO appointments(date,subject) VALUES($1,$2) RETURNING *',
    [date, subject]
  );
  res.status(201).json(rows[0]);
});

// add PUT/DELETE as needed

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on ${port}`));