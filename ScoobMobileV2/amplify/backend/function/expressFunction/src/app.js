/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
	http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

/*****************
 * Connect to DB *
 *****************/
const db = mysql.createPool({
	connectionLimit: 10,
	host: "scoob-database.c8k5fhmymkis.ap-southeast-1.rds.amazonaws.com",
	user: "admin",
	password: "admin123",
	database: "scoob",
});

db.getConnection((err, connection) => {
	if (err) {
		console.log("Database connection error", err);
		return;
	}
	console.log("Connected to the database");
	connection.release();
});

/**********************
 * Example get method *
 **********************/
// app.get("/hello", (req, res) => {
// 	res.send("Hello World!");
// });

app.get("/temp", function (req, res) {
	// Add your code here
	res.json({ success: "get call succeed!", url: req.url });
});

app.get("/temp/*", function (req, res) {
	// Add your code here
	res.json({ success: "get call succeed!", url: req.url });
});

// Route to get data for a specific parent using the email parameter
app.get("/parent/:email", (req, res) => {
	const email = req.params.email;

	// SQL query to select all columns from the 'parent' table where the email matches
	const sql = "SELECT * FROM parentguardians WHERE email = ?";

	db.query(sql, [email], (err, results) => {
		if (err) {
			console.error("Error executing query:", err);
			return res.status(500).json({ error: "Failed to get parent data" });
		}

		if (results.length === 0) {
			// No parent data found for the given email
			return res.status(404).json({ error: "Parent data not found" });
		}

		// Parent data found, send the data as the response
		res.json(results[0]);
	});
});

// GET ALL CHILDREN USING PARENTID
app.get("/student/:parentid", (req, res) => {
	const parentid = req.params.parentid;

	// SQL query to select all columns from the 'parent' table where the email matches
	const sql = "SELECT * FROM student where parentid = ?";

	db.query(sql, [parentid], (err, results) => {
		if (err) {
			console.error("Error executing query:", err);
			return res.status(500).json({ error: "Failed to get parent data" });
		}

		if (results.length === 0) {
			// No parent data found for the given email
			return res.status(404).json({ error: "Parent data not found" });
		}

		// Parent data found, send the data as the response
		res.json(results);
	});
});

// GET CHILD USING STUDENTID
app.get("/student/:studentid", (req, res) => {
	const studentid = req.params.studentid;
  
	// SQL query to select all columns from the 'student' table where the studentid matches
	const sql = "SELECT * FROM student WHERE studentid = ?";
  
	db.query(sql, [studentid], (err, results) => {
	  if (err) {
		console.error("Error executing query:", err);
		return res.status(500).json({ error: "Failed to get student data" });
	  }
  
	  if (results.length === 0) {
		// No student data found for the given studentid
		return res.status(404).json({ error: "Student data not found" });
	  }
  
	  // Student data found, send the data as the response
	  res.json(results[0]); // Assuming studentid is unique, so we get the first result
	});
  });



/****************************
 * Example post method *
 ****************************/

// Login route
app.post("/login", async (req, res) => {
	const { email, password, userType } = req.body;

	try {
		let tableName;
		let idColumn; // Variable to store the respective user ID column

		switch (userType) {
			case "teacher":
				tableName = "teacher";
				idColumn = "teacherid";
				break;
			case "driver":
				tableName = "driver";
				idColumn = "driverid";
				break;
			case "parent":
				tableName = "parentguardians";
				idColumn = "parentid";
				break;
			default:
				// Invalid userType, send error response
				return res.status(400).json({ error: "Invalid userType" });
		}

		console.log("userType:", userType);
		console.log("idColumn:", idColumn);

		// SQL query to fetch all user details from the specified table
		const sql = `SELECT * FROM ${tableName} WHERE email = ? AND password = ?`;

		db.query(sql, [email, password], (err, results) => {
			if (err) {
				console.error("Error executing query:", err);
				return res.status(500).json({ error: "Failed to perform login" });
			}

			if (results.length === 0) {
				// No matching user found, send error response
				return res.status(401).json({ error: "Incorrect credentials" });
			}

			// User authenticated, send success response with all user details
			const user = results[0];
			const { fname, lname } = user;

			// Extract the respective user ID based on the user type
			const userId = user[idColumn];

			// Send all user details, including the respective user ID
			res.json({ message: "Login successful", userType, fname, lname, userId });
		});
	} catch (err) {
		// Handle any database query errors
		console.error("Error executing query:", err);
		res.status(500).json({ error: "Failed to perform login" });
	}
});

app.post("/temp", function (req, res) {
	// Add your code here
	res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/temp/*", function (req, res) {
	// Add your code here
	res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/temp", function (req, res) {
	// Add your code here
	res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

// UPDATE SUBSCRIPTION STATUS FOR A STUDENT
app.put("/student/:studentid", (req, res) => {
	const studentid = req.params.studentid;
	const { subscription } = req.body;
  
	// SQL query to update the subscription status in the 'student' table
	const sql = "UPDATE student SET subscription = ? WHERE studentid = ?";
  
	db.query(sql, [subscription, studentid], (err, results) => {
	  if (err) {
		console.error("Error executing query:", err);
		return res.status(500).json({ error: "Failed to update subscription status" });
	  }
  
	  if (results.affectedRows === 0) {
		// No student data found for the given studentid
		return res.status(404).json({ error: "Student data not found" });
	  }
  
	  // Subscription status updated successfully
	  res.json({ message: "Subscription status updated successfully" });
	});
  });
  

// SUBSCRIBE
app.put("/student/:studentid/notSubscribed", function (req, res) {
	// Add your code here
	const studentId = req.params.studentid;

	try {
		// SQL query to fetch all user details from the specified table
		const sql = `UPDATE student SET subscription = 'Yes' WHERE studentid = ?`;

		db.query(sql, [studentId], (err, results) => {
			if (err) {
				console.error("Error executing query:", err);
				return res.status(500).json({ error: "Failed to perform login" });
			}

			if (results.length === 0) {
				// No matching user found, send error response
				return res.status(401).json({ error: "None updated" });
			}
			// Send all user details, including the respective user ID
			res.json({ message: "Update successful" });
		});
	} catch (err) {
		// Handle any database query errors
		console.error("Error executing query:", err);
		res.status(500).json({ error: "Failed to update data" });
	}
});

// UNSUBSCRIBE
app.put("/student/:studentid/subscribed", function (req, res) {
	// Add your code here
	const studentId = req.params.studentid;

	try {
		// SQL query to fetch all user details from the specified table
		const sql = `UPDATE student SET subscription = 'No' WHERE studentid = ?`;

		db.query(sql, [studentId], (err, results) => {
			if (err) {
				console.error("Error executing query:", err);
				return res.status(500).json({ error: "Failed to perform login" });
			}

			if (results.length === 0) {
				// No matching user found, send error response
				return res.status(401).json({ error: "None updated" });
			}
			// Send all user details, including the respective user ID
			res.json({ message: "Update successful" });
		});
	} catch (err) {
		// Handle any database query errors
		console.error("Error executing query:", err);
		res.status(500).json({ error: "Failed to update data" });
	}
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/temp", function (req, res) {
	// Add your code here
	res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
	console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
