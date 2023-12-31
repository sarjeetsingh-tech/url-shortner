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
    "_id": "658ff7d33082a7c5ddc45fed",
    "originalURL": "https://github.com/example",
    "shortURLKey": "tjj4kfN0Cs",
    "createdAt": "2023-12-30T10:58:27.331Z",
    "clickCount": 7,
    "__v": 0,
    "clickTimestamps": [
        "2023-12-30T11:08:50.295Z",
        "2023-12-30T11:08:53.882Z",
        "2023-12-30T11:08:55.368Z",
        "2023-12-30T11:08:58.867Z",
        "2023-12-30T11:09:00.877Z"
    ]
}
```

## Contributing
Feel free to contribute to this project! Fork the repository and create a pull request with your improvements.


   
