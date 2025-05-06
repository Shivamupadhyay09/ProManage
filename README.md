# 📌 ProManage

**ProManage** is a full-stack Project Management Web App built using the **MERN Stack** (MongoDB, Express, React, Node). It helps teams manage projects, assign tasks, and track progress efficiently.

---

## 🚀 Features

- User Authentication (JWT)
- Project & Task Management
- Task Status: To Do, In Progress, Done
- Team Collaboration
- Dashboard Overview

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB, JWT, Mongoose

---

## 📁 Folder Structure

```
ProManage/
├── client/   # React Frontend
├── server/   # Express Backend
```

---


### . Install Dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### . Create `.env` in `/server`

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
```

### . Run App

```bash
# Backend
cd server && npm start

# Frontend
cd client && npm start
```

Or use concurrently:

```bash
npm install
npm run dev
```
