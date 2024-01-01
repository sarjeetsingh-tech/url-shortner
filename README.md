# URL Shortener Project

This repository contains a simple URL shortener project implemented using Node.js, Express, and MongoDB. The application allows users to shorten long URLs, manage them, and view basic statistics. Users can sign up, log in, and interact with the URL shortening functionality.


## Overview
![image](https://github.com/sarjeetsingh-tech/url-shortner/assets/104495979/a769b71a-8853-4bcb-b6de-0b30049cf5e3)

![image](https://github.com/sarjeetsingh-tech/url-shortner/assets/104495979/ba5fed73-eac7-4de0-aa03-a63411b51263)

![image](https://github.com/sarjeetsingh-tech/url-shortner/assets/104495979/1042d9ba-c3f6-4ef0-86b6-5d0e65b718c8)

![image](https://github.com/sarjeetsingh-tech/url-shortner/assets/104495979/49d72c0b-fe8f-4602-bb3e-6127b101777f)


## Project Structure

### `index.js`

The main entry point for the application, responsible for setting up the Express server, establishing MongoDB connections, and defining the routes.

### `views/`

This directory contains EJS templates used to render HTML pages for a seamless user experience.

### `routes/`

- **`url.js`:**
  Handles URL-related routes, such as shortening, accessing, and displaying details.

- **`staticRouter.js`:**
  Manages static routes for user-specific pages.

- **`login.js`:**
  Manages user login functionality.

- **`signup.js`:**
  Manages user signup functionality.

### `models/`

- **`url.js`:**
  Defines the MongoDB schema for storing shortened URLs.

- **`user.js`:**
  Defines the MongoDB schema for user information.

### `controllers/`

- **`index.js`:**
  Contains functions for URL-related operations like shortening, accessing, and displaying details.

- **`login.js`:**
  Manages user login functionality.

- **`signup.js`:**
  Manages user signup functionality.

### `authmiddleware/`

- **`auth.js`:**
  Middleware for checking user authentication.

### `authMap/`

- **`auth.js`:**
  Manages a simple in-memory map for user sessions.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure MongoDB is running)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-url-shortener.git
   ```
2. Navigate to the project directory
   ```bash
   cd your-url-shortener
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the server: 
   ```bash
   node index.js
   ```
## Usage

### Shorten a URL
1. Open your browser and go to http://localhost:3000/signup to create a new account.
2. After signup, log in at http://localhost:3000/login.
3. Once logged in, you'll be redirected to http://localhost:3000/url where you can shorten URLs and view your existing ones.
4. Shorten a URL by entering it in the input field and clicking "Submit."
5. View your list of shortened URLs along with click statistics.

### Additional Notes
-The project uses EJS templates for rendering HTML pages.
-URL validation is done using the validator library.
-User sessions are managed using cookies and a simple in-memory map.

## Contributing
Feel free to contribute to this project! Fork the repository and create a pull request with your improvements.


   
