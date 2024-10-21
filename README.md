<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

  <p align="center">A simple REST API built with <a href="https://nestjs.com" target="_blank">NestJS</a> to manage a bike library, featuring CRUD operations, database integration, and Swagger documentation.</p>

## Description

A simple REST API to manage a bike library, featuring CRUD operations, database integration (SQLite), and Swagger for API documentation.

## Project Setup

### Prerequisites

Ensure the following are installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14.x or later)
- [Nest.js CLI](https://docs.nestjs.com/cli/overview) (`npm i -g @nestjs/cli`)
- [SQLite](https://www.sqlite.org/download.html) (SQLite database will be generated automatically)

### Steps to Set Up

1. **Clone the repository:**

   ```bash
   git clone git@github.com:ManoharKumar07/BikeLibrary-Nestjs.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd BikeLibrary-Nestjs
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Run the application:**

   ```bash
   npm run start
   ```

   The server will start at `http://localhost:3000`.

5. **Access Swagger API Documentation:**

   Open your browser and go to:

   ```
   http://localhost:3000/api
   ```

   Here, you can explore and test all the available API endpoints using Swagger.

## Sample Data for API Testing in Swagger

Here are some sample JSON data to help you test the API via Swagger:

1. **POST /bikes** - Add a new bike:

   ```json
   {
     "make": "Yamaha",
     "model": "R15",
     "year": 2020,
     "type": "Sport"
   }
   ```

2. **PUT /bikes/{id}** - Update an existing bike:

   ```json
   {
     "make": "Royal Enfield",
     "model": "Meteor 350",
     "year": 2022,
     "type": "Cruiser"
   }
   ```

3. **GET /bikes** - Fetch all bikes:

   Send a GET request to:

   ```bash
   http://localhost:3000/bikes
   ```

4. **DELETE /bikes/{id}** - Delete a bike:

   Send a DELETE request to:

   ```bash
   http://localhost:3000/bikes/{id}
   ```

## Running the Application in Different Modes

- **Development mode:**

  ```bash
  npm run start:dev
  ```

- **Production mode:**

  ```bash
  npm run start:prod
  ```

person
destination
bike present in db
weather

// ❯ curl "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m" {"latitude":52.52,"longitude":13.419998,"generationtime_ms":0.029921531677246094,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","elevation":38.0,"current_units":{"time":"iso8601","interval":"seconds","temperature_2m":"°C","wind_speed_10m":"km/h"},"current":{"time":"2024-10-16T12:30","interval":900,"temperature_2m":13.4,"wind_speed_10m":17.1}}%

```
https://www.npmjs.com/package/@spurreiter/geocoder
```
