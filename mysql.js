const mysql = require("mysql");

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "userdb",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

// Retrieve user information
connection.query("SELECT * FROM users", (err, results) => {
  if (err) {
    console.error("Error retrieving data: " + err.stack);
    return;
  }

  // Process the results
  console.log("User information:");
  results.forEach((user) => {
    console.log(
      `ID: ${user.id}, Username: ${user.username}, Email: ${user.email}`,
    );
  });

  // Close the connection
  connection.end((err) => {
    if (err) {
      console.error("Error closing MySQL connection: " + err.stack);
      return;
    }
    console.log("MySQL connection closed.");
  });
});
