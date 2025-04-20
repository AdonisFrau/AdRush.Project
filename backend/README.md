# AdRush Backend Documentation

## Overview
The AdRush backend is built using Node.js and Express. It serves as the server-side application that handles API requests, manages data, and communicates with the frontend.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd AdRush/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the backend server, run:
```
npm start
```
The server will be running on `http://localhost:3000` by default.

### API Endpoints
The backend exposes various API endpoints. Refer to the routes defined in `src/routes/index.js` for detailed information on available endpoints and their usage.

### Directory Structure
- `src/app.js`: Entry point of the application.
- `src/controllers`: Contains controller functions for handling requests.
- `src/models`: Defines data models and schemas.
- `src/routes`: Sets up API routes.
- `src/utils`: Utility functions for the application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.