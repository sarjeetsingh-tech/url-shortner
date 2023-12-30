# URL Shortener API

A simple URL shortener API built with Node.js, Express, and MongoDB.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Shorten a URL](#shorten-a-url)
  - [Access a Shortened URL](#access-a-shortened-url)
  - [Get URL Details](#get-url-details)
- [Contributing](#contributing)

## Overview

This API provides URL shortening functionality, allowing users to create short URLs, access the original URLs through the short ones, and retrieve details about the shortened URLs.

## Getting Started

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
Endpoint: POST /shorten
Request Body:
```json
{
  "originalURL": "https://www.example.com"
}
```
Response:
```json
{
  "shortURLKey": "abc123"
}
```

## Access a Shortened URL
Endpoint: GET /:id

Redirects to the original URL associated with the provided short URL key.

## Get URL Details
Endpoint: GET /:id/details
Response:
```json
{
  "originalURL": "https://www.example.com",
  "shortenURL": "abc123",
  "clickCount": 5,
  "creationTime": "2023-01-01T12:34:56.789Z"
}
```

## Contributing
Feel free to contribute to this project! Fork the repository and create a pull request with your improvements.


   
