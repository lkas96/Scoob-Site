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

// Get students with pickupstatus 'Arrived' for a specific class BACKUP
// app.get("/teacher/:class/pickupstatus/arrived", (req, res) => {
// 	const teacherClass = req.params.class;

// 	// SQL query to select students from the 'student' table where pickupstatus is 'Arrived' and class matches the teacher's class
// 	const sql =
// 		"SELECT * FROM student WHERE pickupstatus = 'Arrived' AND class = ?";

// 	db.query(sql, [teacherClass], (err, results) => {
// 		if (err) {
// 			console.error("Error executing query:", err);
// 			return res.status(500).json({ error: "Failed to get student data" });
// 		}

// 		if (results.length === 0) {
// 			// No student data found with 'Arrived' pickupstatus for the given class
// 			return res
// 				.status(404)
// 				.json({ error: "No students with 'Arrived' pickupstatus found" });
// 		}

// 		// Student data found, send the data as the response
// 		res.json(results);
// 	});
// });

// Assuming you have a separate table called 'parentguardians' that contains parent information

// Your existing route to get student data with 'Arrived' pickup status
app.get("/teacher/:class/pickupstatus/arrived", (req, res) => {
	const teacherClass = req.params.class;
  
	// SQL query to select students with parent's first name and last name
	const sql = `
	  SELECT s.*, p.fname AS parentFname, p.lname AS parentLname
	  FROM student AS s
	  INNER JOIN parentguardians AS p ON s.parentid = p.parentid
	  WHERE s.pickupstatus = 'Arrived' AND s.class = ?`;
  
	db.query(sql, [teacherClass], (err, results) => {
	  if (err) {
		console.error("Error executing query:", err);
		return res.status(500).json({ error: "Failed to get student data" });
	  }
  
	  if (results.length === 0) {
		// No student data found with 'Arrived' pickupstatus for the given class
		return res
		  .status(404)
		  .json({ error: "No students with 'Arrived' pickupstatus found" });
	  }
  
	  // Student data found, send the data as the response
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
		let idColumn; // Variable to store the respective user ID column
		let classColumn; // Variable to store the class column for teachers

		switch (userType) {
			case "teacher":
				tableName = "teacher";
				idColumn = "teacherid";
				classColumn = "class";
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
		const sql = `SELECT * FROM ${tableName} WHERE email = ? AND BINARY password = ?`;

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
			const userClass = user[classColumn];
			// const userClass = userType === "teacher" ? user[classColumn] : undefined;

			// Send all user details, including the respective user ID
			res.json({
				message: "Login successful",
				userType,
				fname,
				lname,
				userId,
				userClass,
			});
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
			return res
				.status(500)
				.json({ error: "Failed to update subscription status" });
		}

		if (results.affectedRows === 0) {
			// No student data found for the given studentid
			return res.status(404).json({ error: "Student data not found" });
		}

		// Subscription status updated successfully
		res.json({ message: "Subscription status updated successfully" });
	});
});

// Change pickupstatus to "Arriving" for a student
app.put("/student/:studentid/arriving", (req, res) => {
	const studentId = req.params.studentid;

	// SQL query to update the pickupstatus in the 'student' table
	const sql =
		"UPDATE student SET pickupstatus = 'Arriving' WHERE studentid = ?";

	db.query(sql, [studentId], (err, results) => {
		if (err) {
			console.error("Error executing query:", err);
			return res.status(500).json({ error: "Failed to update pickup status" });
		}

		if (results.affectedRows === 0) {
			// No student data found for the given studentid
			return res.status(404).json({ error: "Student data not found" });
		}

		// Pickup status updated successfully
		res.json({ message: "Pickup status updated successfully" });
	});
});

// Change pickupstatus to "Arrived" for a student
app.put("/student/:studentid/arrived", (req, res) => {
	const studentId = req.params.studentid;

	// SQL query to update the pickupstatus in the 'student' table
	const sql = "UPDATE student SET pickupstatus = 'Arrived' WHERE studentid = ?";

	db.query(sql, [studentId], (err, results) => {
		if (err) {
			console.error("Error executing query:", err);
			return res.status(500).json({ error: "Failed to update pickup status" });
		}

		if (results.affectedRows === 0) {
			// No student data found for the given studentid
			return res.status(404).json({ error: "Student data not found" });
		}

		// Pickup status updated successfully
		res.json({ message: "Pickup status updated successfully" });
	});
});


// Change pickupstatus to "PickedUp" for a student
app.put("/student/:studentid/pickedup", (req, res) => {
	const studentid = req.params.studentid;

	// SQL query to update the pickupstatus in the 'student' table
	const sql = "UPDATE student SET pickupstatus = 'PickedUp' WHERE studentid = ?";

	db.query(sql, [studentid], (err, results) => {
		if (err) {
			console.error("Error executing query:", err);
			return res.status(500).json({ error: "Failed to update pickup status" });
		}

		if (results.affectedRows === 0) {
			// No student data found for the given studentid
			return res.status(404).json({ error: "Student data not found" });
		}

		// Pickup status updated successfully
		res.json({ message: "Pickup status updated successfully" });
	});
});

  
  

// Change pickupstatus to "Picked Up" for a student barcode
app.put("/student/:studentid/pickedup", (req, res) => {
	const studentId = req.params.studentid;

	// SQL query to update the pickupstatus in the 'student' table
	const sql =
		"UPDATE student SET pickupstatus = 'Picked Up' WHERE studentid = ?";

	db.query(sql, [studentId], (err, results) => {
		if (err) {
			console.error("Error executing query:", err);
			return res.status(500).json({ error: "Failed to update pickup status" });
		}

		if (results.affectedRows === 0) {
			// No student data found for the given studentid
			return res.status(404).json({ error: "Student data not found" });
		}

		// Pickup status updated successfully
		res.json({ message: "Pickup status updated successfully" });
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

// Change mode to Bus
app.put("/student/:studentid/self", function (req, res) {
	// Add your code here
	const studentId = req.params.studentid;

	try {
		// SQL query to fetch all user details from the specified table
		const sql = `UPDATE student SET pickupmode = true WHERE studentid = ?`;

		db.query(sql, [studentId], (err, results) => {
			if (err) {
				console.error("Error executing query:", err);
				return res.status(500).json({ error: "Failed to perform query" });
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

// // Change pickup mode
// app.put("/student/:studentid/pickupmode", function (req, res) {
// 	// Add your code here
// 	const studentId = req.params.studentid;
// 	const { pickupmode } = req.body;

// 	try {
// 		// SQL query to fetch all user details from the specified table
// 		const sql = `UPDATE student SET pickupmode = ? WHERE studentid = ?`;

// 		db.query(sql, [pickupmode, studentId], (err, results) => {
// 			if (err) {
// 				console.error("Error executing query:", err);
// 				return res.status(500).json({ error: "Failed to perform query" });
// 			}

// 			if (results.length === 0) {
// 				// No matching user found, send error response
// 				return res.status(401).json({ error: "None updated" });
// 			}
// 			// Send all user details, including the respective user ID
// 			res.json({ message: "Update successful" });
// 		});
// 	} catch (err) {
// 		// Handle any database query errors
// 		console.error("Error executing query:", err);
// 		res.status(500).json({ error: "Failed to update data" });
// 	}
// });

// Change mode to Self
app.put("/student/:studentid/bus", function (req, res) {
	// Add your code here
	const studentId = req.params.studentid;

	try {
		// SQL query to fetch all user details from the specified table
		const sql = `UPDATE student SET pickupmode = false WHERE studentid = ?`;

		db.query(sql, [studentId], (err, results) => {
			if (err) {
				console.error("Error executing query:", err);
				return res.status(500).json({ error: "Failed to perform query" });
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
