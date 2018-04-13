# store-mysql

## Overview

This is a node app combined with MySQL functionality. It is an Amazon-like storefront which take in orders from customers and deplete stock from the store's inventory.

## User Interaction

1. In their command line, the user is asked two questions via the npm package, Inquirer.

2. Once the user answers the questions the app goes through MySql to find the product the user wants to "purchase" and checks to see if there is enough stock for the user to purchase the desired amount.

   * If there is not enough stock, the app is runs again from the beginning

   * If there is enough stock, the app displays a message to the user and updates the stock_quantity in MySQL