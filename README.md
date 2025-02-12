
# Car Listing Application

A React-based car listing application with search, filtering, and sorting functionalities.

## Features
- View and search cars
- Filter and sort listings
- Pagination support
- Car details page
- Unit tests with Jest
- Dockerized setup


## Running Tests

To run unit tests using Jest:
```sh
npm test
```

## Docker Setup

1. Build the Docker image:
   ```sh
   docker build -t car-listing-app .
   ```

2. Run the container:
   ```sh
   docker run -p 3000:3000 car-listing-app
   ```

## Deployment

- The app can be deployed on platforms like Vercel, Netlify, or Docker-based hosting.

## Design Choices & Challenges

- **Component-based Architecture**: Modular structure for better maintainability.
- **State Management**: Used React's `useState` and `useEffect` for handling data.
- **Challenges**: Implementing search, filtering, and pagination efficiently.

