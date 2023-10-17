const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3007;
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: '192.168.1.101',
  user: 'Icon',
  password: '1234',
  port: 3306,
  database: 'athena'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);3
  } else {
    console.log('Connected to database');
  }
});


// Define the API endpoint to fetch data from the 'manager_data' table
app.get('/api/displaytable', (req, res) => {
  // SQL query to select all rows from the 'manager_data' table
  const query = 'SELECT name, part_no, opn_no, machine FROM manager_data';

  // Execute the query
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data from database:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      // Return the result as a JSON response
      res.json(results);
    }
  });
});

// Define the API endpoint to insert data into the 'lower_table' table
app.post('/api/lower_table', (req, res) => {
  const data = req.body;

  // Insert the data into the 'lower_table' table
  const query = 'INSERT INTO lower_table SET ?';

  // Execute the query
  connection.query(query, data, (error, results) => {
    if (error) {
      console.error('Error saving data to database:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json({ message: 'Data saved successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
