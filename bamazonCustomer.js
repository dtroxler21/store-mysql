// Requiring npm packages and storing them as variables
var mysql = require("mysql");
var inquirer = require("inquirer");

// Creating a connection to MySQL
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Username
  user: "root",

  // Password and database name
  password: "goyanks1",
  database: "bamazon"
});

// Connecting to MySQL and running the runStore function
connection.connect(function (err) {
  if (err) throw err;
  runStore();
});

// Function for app
function runStore() {
  // Query variable to be used to grab data from MySQL
  var query = "SELECT item_id, product_name, price FROM products";
  connection.query(query, function (err, res) {
    // Displaying relevant information for all of the products in MySQL
    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Price: $" + res[i].price);
    };
  });
  // Running a prompt to ask the user questions about what they would like to buy
  inquirer
    .prompt([{
      name: "ID",
      type: "input",
      message: "What is the ID of the product you would like to purchase?",
    }, {
      name: "quantity",
      type: "input",
      message: "How many units of the product would you like buy?",
    }])
    .then(function (answer) {
      // Storing answers as variavbles
      var quantity = parseInt(answer.quantity);
      var ID = answer.ID;

      // Query for updating information in MySQL
      var query = "SELECT * FROM products WHERE item_id = ?";
      connection.query(query, ID, function (err, res) {
        if (err) throw err;
        // Storing the information from the result as variables
        var product = res[0].product_name;
        var productQuantity = parseInt(res[0].stock_quantity);
        // Variables for new stock quantity and price for the user's purchase
        var newQuantity = productQuantity - quantity;
        var totalPrice = quantity * parseInt(res[0].price);

        // If...else to check to see if there is enough stock for the user to purchase their desired amount
        if (newQuantity < 0) {
          console.log("Insufficient quantity!")
          // Ending the connection and running the app from the beginning
          runStore();
        } else {
          // Updating the quantity of the desired product
          var quantityQuery = "UPDATE products SET ? WHERE ?";
          connection.query(quantityQuery, 
          [{
            stock_quantity: newQuantity
          }, 
          {
            item_id: ID
          }], 
          function (err, res) {
            if (err) throw err;
            console.log("You have purchased " + quantity + " units of " + product + "(s) for a total of $" + totalPrice)
            connection.end();
          })
        }
      })
    });
};