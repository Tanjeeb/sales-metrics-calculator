# Sales Metrics Calculator

This application calculates various sales metrics based on product, order, and discount data provided in JSON files. It is built using Express.js and follows the MVC (Model-View-Controller) pattern.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Tanjeeb/sales-metrics-calculator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd sales-metrics-calculator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Ensure you have the following JSON files in the project directory:
   - `products.json`: Contains information about products including SKU and price.
   - `orders.json`: Contains information about orders including order ID, items, and quantities.
   - `discounts.json`: Contains information about discount codes and their values.

## Usage

Start the server:

```bash
npm start
