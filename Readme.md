# 🚀 Campus Notification System API

A production-ready backend built with **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**.

This project provides a scalable notification management system with clean architecture, pagination, filtering, unread notification management, and RESTful APIs.

---

## Features

### User Module

* Create User
* Get All Users
* Get User by ID
* Delete User

###  Notification Module

* Create Notification
* Get All Notifications
* Get Notification by ID
* Pagination
* Mark Notification as Read
* Mark All Notifications as Read
* Delete Notification
* Unread Notification Count
* Get Unread Notifications

### 🏗 Architecture

The project follows a clean layered architecture:

```
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Repositories
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
```

---

# 🛠 Tech Stack

* Node.js
* Express.js
* TypeScript
* PostgreSQL
* Prisma ORM
* Neon Database
* REST API
* Thunder Client / Postman

---

# Project Structure

```
src
│
├── config
│   └── database.ts
│
├── controllers
│   ├── notification.controller.ts
│   └── user.controller.ts
│
├── repositories
│   ├── notification.repository.ts
│   └── user.repository.ts
│
├── routes
│   ├── notification.routes.ts
│   └── user.routes.ts
│
├── services
│   ├── notification.service.ts
│   └── user.service.ts
│
├── app.ts
└── server.ts

prisma
└── schema.prisma
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/PYadav70/RollNo-2301920130122.git
```

Move into the project

```bash
cd REPOSITORY_NAME
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL="YOUR_DATABASE_URL"

PORT=5000

JWT_SECRET=your_secret

REDIS_URL=redis://localhost:6379
```

Generate Prisma Client

```bash
npx prisma generate
```

Run database migrations

```bash
npx prisma migrate dev
```

Start development server

```bash
npm run dev
```

---

#  API Endpoints

## Users

| Method | Endpoint            | Description   |
| ------ | ------------------- | ------------- |
| POST   | `/api/v1/users`     | Create User   |
| GET    | `/api/v1/users`     | Get All Users |
| GET    | `/api/v1/users/:id` | Get User      |
| DELETE | `/api/v1/users/:id` | Delete User   |

---

## Notifications

| Method | Endpoint                                 | Description          |
| ------ | ---------------------------------------- | -------------------- |
| POST   | `/api/v1/notifications`                  | Create Notification  |
| GET    | `/api/v1/notifications`                  | Get Notifications    |
| GET    | `/api/v1/notifications?page=1&limit=10`  | Pagination           |
| GET    | `/api/v1/notifications/:id`              | Get Notification     |
| PATCH  | `/api/v1/notifications/:id/read`         | Mark Read            |
| PATCH  | `/api/v1/notifications/read-all/:userId` | Mark All Read        |
| GET    | `/api/v1/notifications/unread/:userId`   | Unread Notifications |
| GET    | `/api/v1/notifications/count/:userId`    | Unread Count         |
| DELETE | `/api/v1/notifications/:id`              | Delete Notification  |

---

# Database

### User

| Field | Type   |
| ----- | ------ |
| id    | Int    |
| name  | String |
| email | String |

### Notification

| Field    | Type                       |
| -------- | -------------------------- |
| id       | Int                        |
| title    | String                     |
| message  | String                     |
| type     | EVENT / RESULT / PLACEMENT |
| priority | LOW / MEDIUM / HIGH        |
| isRead   | Boolean                    |
| userId   | Int                        |

---

# 🧪 Testing

The APIs can be tested using:

* Thunder Client
* Postman
* Insomnia

---

# Future Improvements

* JWT Authentication
* Role-Based Access Control (RBAC)
* Redis Caching
* Socket.IO Real-Time Notifications
* Background Job Queue
* Email Notifications
* Push Notifications
* API Rate Limiting
* Input Validation (Zod)
* Docker Support
* CI/CD Pipeline
* Unit & Integration Tests
* Swagger/OpenAPI Documentation

---

# Author

**Pappu Kumar Yadav**

* GitHub: https://github.com/PYadav70
* LinkedIn: https://www.linkedin.com/in/pappu-kumar-yadav/

---


