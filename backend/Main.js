
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

const db = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'CMT403_diss'
});

app.get("/", (req, res) => {

    const sqlInsert = "INSERT INTO noderegistration (name, username, address, pcode, email, password) VALUES ('user name', 'user1', '12 Apple Street', 'N5 4BY', 'user1@user.com', 'password123');"
   // const sqlInsertTwo = "INSERT INTO noderegistration (name, username, address, pcode, email, password) VALUES ('John Smith', 'jsmith1', '24 Apple Street', 'N5 4BY', 'jsmith@user.com', 'password12');"
    db.query(sqlInsert, (err, result) => {
        res.send("Hello");
    })
});

app.listen(3000, () => {
    console.log("Running on port 3000");
});


/*
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.js'));
});

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);
*/











/*
const mysql = require('mysql');
const express = require('express');
//const cors = require('cors');
const session = require('express-session');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.render('/home', {name: 'Ben' });
})



//app.set('view-engine', 'ejs')
//app.use(express.static(path.join(__dirname, 'build')));
//app.use(cors());

/*app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
}); */
/*app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => console.log('API is running on http://localhost:3000/login'));
*/
//app.listen(3000);