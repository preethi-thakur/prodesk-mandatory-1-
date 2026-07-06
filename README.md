# prodesk-mandatory-1-
Built a full-stack Cupcake Inventory Management System using React, Vite, Tailwind CSS, Node.js, and Express.js. Features include secure CRUD operations, RESTful APIs, search, validation, responsive UI, loading and error states, XSS protection, analytics logging, and a modular architecture for efficient inventory management.
# 🧁 Cupcake Inventory Management System

A full-stack Cupcake Inventory Management System built with React, Vite, Tailwind CSS, Node.js, and Express.js. The application provides a modern dashboard for managing cupcake inventory with secure CRUD operations, responsive design, real-time search, form validation, and a RESTful API.

---

## Features

- Create, Read, Update, and Delete cupcakes
- Real-time search by name and flavor
- Responsive dashboard with Tailwind CSS
- Loading, empty, and error states
- Form validation
- XSS input sanitization
- Analytics event logging
- Standardized REST API responses
- Modular and reusable component architecture
- Responsive design for desktop, tablet, and mobile

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- Express Validator
- Helmet
- CORS
- Morgan
- UUID
- sanitize-html

---

## Project Structure

```text
cupcake-inventory/

├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   ├── data/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── context/
│   │   └── assets/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/cupcake-inventory.git

cd cupcake-inventory
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on

```
http://localhost:3001
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## Environment Variables

### Backend

Create a `.env` file.

```env
PORT=3001
```

### Frontend

Create a `.env` file.

```env
VITE_API_URL=http://localhost:3001/api
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/cupcakes | Get all cupcakes |
| GET | /api/cupcakes/:id | Get cupcake by ID |
| POST | /api/cupcakes | Create cupcake |
| PUT | /api/cupcakes/:id | Update cupcake |
| DELETE | /api/cupcakes/:id | Delete cupcake |

---

## Sample Request

```json
{
  "name": "Chocolate Cupcake",
  "flavor": "Chocolate",
  "quantity": 25,
  "price": 60
}
```

---

## Sample Response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    "id": "123",
    "name": "Chocolate Cupcake",
    "flavor": "Chocolate",
    "quantity": 25,
    "price": 60
  }
}
```

---

## Features Implemented

- CRUD Operations
- RESTful API
- Search & Filtering
- Responsive UI
- Form Validation
- XSS Protection
- Error Handling
- Loading Indicators
- Empty States
- Analytics Logging
- Modular Architecture
- Tailwind CSS Dashboard

---

## Future Improvements

- Authentication & Authorization
- Database Integration (MongoDB/PostgreSQL)
- Pagination
- Sorting & Advanced Filters
- Image Upload
- Export Inventory
- Dashboard Analytics
- Unit & Integration Tests

---

## License

This project is developed for educational and portfolio purposes.
