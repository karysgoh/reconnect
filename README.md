# Reconnect

An one-stop application that supports ex-offenders by connecting them to job opportunities from inclusive employers and a course finder to help them upskill.

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: React (Vite)
- **Database ORM**: Prisma (PostgreSQL)

## Project Structure

```
reconnect/
├── backend/               # Express API server
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   ├── src/
│   │   ├── index.js       # Server entry point
│   │   └── routes/        # API route handlers
│   │       ├── jobs.js
│   │       ├── courses.js
│   │       └── users.js
│   ├── .env.example
│   └── package.json
└── frontend/              # React application
    ├── src/
    │   ├── components/    # Shared components (Navbar)
    │   ├── pages/         # Page components (Home, Jobs, Courses)
    │   ├── services/      # API service layer
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL

### Backend Setup

```bash
cd backend
npm install

# Copy and fill in your environment variables
cp .env.example .env

# Generate Prisma client and run migrations
npm run prisma:generate
npm run prisma:migrate

# Start the development server
npm run dev
```

The API will be available at `http://localhost:5000`.

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000` and will proxy API requests to the backend.

## API Endpoints

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | /api/health      | Health check         |
| GET    | /api/jobs        | List all jobs        |
| GET    | /api/jobs/:id    | Get a job            |
| POST   | /api/jobs        | Create a job         |
| GET    | /api/courses     | List all courses     |
| GET    | /api/courses/:id | Get a course         |
| POST   | /api/courses     | Create a course      |
| GET    | /api/users       | List all users       |
| GET    | /api/users/:id   | Get a user           |
| POST   | /api/users       | Register a user      |
