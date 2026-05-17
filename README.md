# EShop React Frontend

A modern React-based E-Commerce frontend application with authentication, protected routes, role-based dashboard access, and REST API integration.

---

## Features

- JWT Authentication
- Google OAuth Login
- Protected Routes
- Role-Based Authorization
- Admin Dashboard
- User Management
- Category Management
- Dynamic API Integration
- Loading & Error Handling Pages
- Reusable Components
- Responsive UI

---

## Tech Stack

- React.js
- React Router DOM
- Axios
- JavaScript
- CSS
- JWT Authentication

---

## Project Structure

```bash
src
├── api
├── Components
│   ├── Dashboard
│   └── Loading
├── Pages
│   ├── Auth
│   ├── Dashboard
│   └── Website
├── styles
└── App.js
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd eshop-react
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

Application runs on:

```bash
http://localhost:3000
```

---

## API Configuration

```js
export const baseURL = "http://localhost:8000/api";
```

Make sure the backend server is running before starting the frontend application.

---

## Authentication & Authorization

The application includes:

- JWT Authentication
- Google OAuth Login
- Protected Routes
- Role-Based Access Control

Available Roles:

- Admin
- Writer
- Manager

---

## Future Improvements

- Redux Toolkit Integration
- Product Search & Filtering
- Pagination
- Dark Mode
- TypeScript Migration
- Unit Testing



