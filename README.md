# DineDiscover - Restaurant Finder Application

DineDiscover is a React-based web application that helps users find the best restaurants in their city or state. The application includes dynamic city and state pages, pagination, and a contact page.

## Features

- **Home Page**: Includes a hero section with a search bar to find restaurants by city or state.
- **Search Functionality**: Users can search for restaurants based on city or state, with suggestions and error handling for incorrect inputs.
- **Dynamic Routing**: The application uses React Router to handle dynamic routes for different city and state combinations.
- **Pagination**: Display a list of restaurants with pagination support to navigate through multiple pages.
- **Contact Page**: A contact form for users to get in touch with the DineDiscover team.
- **Helmet Integration**: Manage the document head to set titles and meta descriptions for better SEO.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Namra0816/restaurantFinder.git
   ```
2. Navigate to the project directory:
   ```sh
   cd restaurantFinder
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure

```plaintext
restaurantFinder/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── restaurantData/
│   │   │   └── restaurantData.json
│   │   └── logo.png
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.js
│   │   ├── pagination/
│   │   │   ├── pagination.css
│   │   │   └── pagination.js
│   │   ├── searchBar/
│   │   │   ├── searchBar.css
│   │   │   └── searchBar.js
│   ├── pages/
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   ├── ContactForm/
│   │   │   │   ├── ContactForm.css
│   │   │   │   └── ContactForm.js
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.css
│   │   │   │   └── Hero.js
│   │   └── restaurantList/
│   │       ├── restaurantList.css
│   │       └── restaurantList.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│
└── package.json
```

## Usage

- **Home Page**: Enter a city or state in the search bar to find restaurants in that location.
- **Restaurant List**: Browse the list of restaurants and use pagination to navigate through pages.
- **Contact Page**: Fill out the contact form to send a message to the DineDiscover team.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
