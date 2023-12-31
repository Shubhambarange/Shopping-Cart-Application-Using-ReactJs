# Shopping-Cart-Application-Using-ReactJs

Shopping Cart Application
**Introduction**

This is a shopping cart application built using React, Redux, and Tailwind CSS. The application fetches product data from an API and allows users to add and remove products from their shopping cart.
Features

- Fetch and display products from API
- Add and remove products from the shopping cart
- Display the total number of items in the cart
- Display the total amount of items in the cart
Installation

To install and run this project, you would need to follow these steps:

1. Clone the repository
  git clone https://github.com/yourusername/shopping-cart.git

2. Navigate into the project directory
   cd shopping-cart

3. Install the dependencies
    npm install
   
4. Start the application
   npm start
Code Structure

The project is structured as follows:

- public/index.html: The main HTML file
- src/index.js: The main JavaScript file where React components are rendered
- src/App.jsx: The main App component where routing is defined
- src/pages/Home.jsx: The Home page component where products are fetched and displayed
- src/pages/Cart.jsx: The Cart page component where cart items are displayed
- src/components/Product.jsx: The Product component for displaying individual products
- src/components/CartItem.jsx: The CartItem component for displaying individual cart items
- src/redux/Store.js: The Redux store
- src/redux/Slices/cartSlice.js: The Redux slice for cart operations
- src/data.js: The file containing product data
Dependencies

The main dependencies of this project are:

- react: ^18.2.0
- react-dom: ^18.2.0
- react-redux: ^8.1.3
- react-router-dom: ^6.9.0
- @reduxjs/toolkit: ^1.9.7
- tailwindcss: ^3.2.7
  
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT


