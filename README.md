## Description

**Book A Table** is an application for restaurant table reservations that allows users to easily book tables online. Administrators can manage reservations and monitor table availability in real-time.

## Features

- View available tables in the restaurant.
- Reserve tables for a specific date and time.
- Reservation management for administrators.
- Notifications for reservation confirmations and cancellations.

## Installation

### Requirements

Before installation, make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Yarn](https://yarnpkg.com/) (for package management)

### Installation Steps

1. Clone the project repository:

   ```bash
   git clone (https://github.com/AndriiIladii/book-a-table.git)
   ```

2. Navigate to the project folder:

   ```bash
   cd book-a-table
   ```

3. Navigate to the client folder and install dependencies:

   ```bash
    cd client
    yarn
   ```

4. Start client side:

   ```bash
    yarn dev
   ```

5. Navigate to the server folder and install its dependencies:

   ```bash
    cd server
    yarn

   ```

6. Start the server:

   ```bash
    yarn dev
   ```

### Running the Application

The client will run on http://localhost:3000, and the server will run separately.

## Aviable scripts

- yarn dev — Runs the app in development mode.
- yarn dev (in the server folder) — Runs the server in development mode.

## Technologies

- React — A library for building user interfaces.
- Redux — A predictable state container for JavaScript apps.
- Node.js — A JavaScript runtime for server-side code.
- Express — A web framework for Node.js.
- Webpack — A module bundler for modern JavaScript applications.
