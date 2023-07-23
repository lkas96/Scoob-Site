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
app.get("/hello", (req, res) => {
	res.send("Hello World!");
});

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
	const sql = "SELECT * FROM parent WHERE email = ?";

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

// SOME COMMAND TO EDIT COMMENT WHEN CLARIFY WITH JARON
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

/****************************
 * Example post method *
 ****************************/
// Login route
app.post("/login", async (req, res) => {
	const { email, password, userType } = req.body;

	try {
		let tableName;
		switch (userType) {
			case "teacher":
				tableName = "teacher";
				break;
			case "driver":
				tableName = "driver";
				break;
			case "parent":
				tableName = "parent";
				break;
			default:
				// Invalid userType, send error response
				return res.status(400).json({ error: "Invalid userType" });
		}

		// SQL query to check if the user exists in the specified table
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

			// User authenticated, send success response with userType
			res.json({ message: "Login successful", userType });
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

app.put("/temp/*", function (req, res) {
	// Add your code here
	res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/temp", function (req, res) {
	// Add your code here
	res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/temp/*", function (req, res) {
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
