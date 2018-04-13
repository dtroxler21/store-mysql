DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10, 2) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunglasses", "Accessories", 15.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "Sporting goods", 20.00, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hat", "Accessories", 25.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad", "Electronics", 500.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat litter", "Pet supplies", 17.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Water Bottles (24 pack)", "Food and Drink", 1.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Men's Shorts", "Clothing", 30.00, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Backstreet Boys' Greatest Hits CD", "Music", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("UNC T-shirt", "Clothing", 19.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coca-Cola (2 Liter)", "Food and Drink", 1.99, 60);

SELECT * FROM products;