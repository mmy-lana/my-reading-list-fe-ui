# My Reading List

This is a personal website to manage and display the list of manga and manhwa I've been reading. It allows me to log in, perform CRUD operations on the list, and display it publicly for others to view. Only I can log in to manage the list, while other users can view it as a public page.

## Features

- **Login Functionality**: Only I can log in to manage the reading list.
- **CRUD Operations**: Add, edit, delete, and view items in the reading list.
- **Public View**: A public-facing list of my reading progress.
- **Responsive Design**: Works across all devices.

## Tech Stack

### Frontend

- **Framework**: React with TypeScript
- **Styling**: CSS (or any preferred library like Tailwind or styled-components)

### Backend

- **Framework**: Node.js with Express
- **Database**: PostgreSQL (hosted on Supabase or Render)

### Hosting

- **Frontend**: Vercel (free-tier)
- **Backend**: Render (free-tier)
- **Database Hosting**: Supabase (free-tier for PostgreSQL)

### Domain

- Purchased from a budget-friendly provider (e.g., Namecheap or Google Domains).

## Folder Structure

```
my-reading-list/
├── frontend/             # React + TypeScript (Frontend)
│   ├── public/           # Static assets (favicon, index.html)
│   ├── src/              # Main source code
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page-level components
│   │   ├── services/     # API calls (Axios or fetch logic)
│   │   ├── styles/       # CSS/SCSS or styled-components files
│   │   └── App.tsx       # Root component
│   └── package.json      # Frontend dependencies and scripts
├── backend/              # Node.js + Express (Backend)
│   ├── routes/           # API route handlers
│   ├── models/           # Database models or schema
│   ├── controllers/      # Logic for handling requests
│   ├── middlewares/      # Middleware functions (auth, validation, etc.)
│   ├── db.js             # PostgreSQL/Database connection
│   ├── index.js          # Main entry point for backend
│   └── package.json      # Backend dependencies and scripts
├── .gitignore            # Common gitignore file
├── README.md             # Project overview/documentation
└── database/             # Migration and SQL setup scripts
    └── migrations.sql    # SQL for database schema setup
```

## Setup Instructions

### Prerequisites

- **Node.js** (v18.x or later)
- **Git**
- **PostgreSQL** (hosted on Supabase or Render)
- **Vercel Account** (for frontend deployment)
- **Render Account** (for backend deployment)
- **Domain Registration** (e.g., Namecheap, Google Domains)

### Environment Variables

Ensure the following environment variables are set in a `.env` file:

For Backend:

```
DATABASE_URL=your_postgresql_connection_url
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

For Frontend:

```
REACT_APP_API_URL=your_backend_api_url
```

### Local Development

#### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your PostgreSQL connection details:
   ```bash
   DATABASE_URL=your_postgresql_connection_url
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```
4. Run database migrations to set up the schema:
   ```bash
   npm run migrate
   ```
   _(Ensure the `migrations.sql` file contains the schema setup for your reading list.)_
5. Start the backend server:
   ```bash
   npm run dev
   ```
6. Verify the backend is running by visiting `http://localhost:5000/api/health` (or your defined health-check route).

#### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your API URL:
   ```bash
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Verify the frontend is running by visiting `http://localhost:3000`.

### Deployment

#### Frontend Deployment (Vercel)

1. Push your frontend code to GitHub.
2. Link your GitHub repository to **Vercel**.
3. Set the environment variable in Vercel:
   ```
   REACT_APP_API_URL=your_backend_render_url
   ```
4. Deploy the app. Vercel will provide a URL for the live frontend.

#### Backend Deployment (Render)

1. Push your backend code to GitHub.
2. Link your GitHub repository to **Render**.
3. Add environment variables in Render:
   ```
   DATABASE_URL=your_postgresql_connection_url
   JWT_SECRET=your_jwt_secret_key
   ```
4. Deploy the backend. Render will provide a URL for the live API.

#### Database Setup (Supabase or Render PostgreSQL)

1. Create a PostgreSQL instance on **Supabase** or **Render**.
2. Note the connection URL and credentials.
3. Add your database schema by executing `migrations.sql`.
   - For Supabase:
     ```bash
     psql <migrations.sql
     ```
4. Test the connection using a database client like `pgAdmin` or `TablePlus`.

### Verifying the Setup

1. **Frontend-Backend Connection**:
   - Open the frontend and test CRUD operations (add, edit, delete) to ensure the API is responding correctly.
2. **Database Connection**:
   - Check the database for updates (e.g., new entries) using your database client.
3. **Deployment Verification**:
   - Visit the deployed frontend URL and ensure it displays the public list.
   - Log in and test the admin functionality to ensure everything is working end-to-end.

## License

This project is for personal use only and is not intended for commercial purposes.
