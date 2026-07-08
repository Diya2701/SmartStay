# 🏡 SmartStay

A **full-stack vacation rental web application** inspired by Airbnb that enables users to discover, create, manage, and review property listings through a secure and responsive interface.

**🌐 Live Demo:** 
https://smartstay-9gsz.onrender.com/listings  
**💻 GitHub Repository:** https://github.com/Diya2701/SmartStay

---

## ✨ Features

- 🔐 Secure user authentication and authorization using **Passport.js**
- 🏠 Create, edit, delete, and browse vacation rental listings
- ⭐ Add, edit, and delete reviews with ownership-based permissions
- 📍 Interactive property location maps powered by **Mapbox**
- ☁️ Cloud-based image upload and storage using **Cloudinary**
- ✅ Client-side and server-side form validation
- 💬 Flash messages and centralized error handling
- 📱 Fully responsive user interface
- 🏗️ Built using the **MVC (Model–View–Controller)** architecture

---

## 🚀 Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- MongoDB Atlas
- Mongoose

### Authentication
- Passport.js
- Express Session

### Cloud Services
- Cloudinary
- Mapbox

### Deployment
- Render
- Git
- GitHub

---

## 📂 Project Structure

```
SmartStay/
│── controllers/
│── models/
│── routes/
│── views/
│── public/
│── middleware/
│── utils/
│── init/
│── app.js
│── package.json
```

---

## 🔑 Core Functionalities

### Authentication & Authorization
- User Registration
- User Login & Logout
- Protected Routes
- Ownership-based Authorization
- Session Management

### Listings
- Create Listings
- View Listings
- Edit Listings
- Delete Listings
- Upload Listing Images
- Location Mapping

### Reviews
- Add Reviews
- Edit Reviews
- Delete Reviews
- Rating System

---

## 📊 Project Highlights

- Developed a scalable **Node.js/Express.js** backend following the **MVC architecture**.
- Implemented **14+ RESTful routes** and **6 custom middleware** for modular request handling.
- Designed a **MongoDB** schema with **3 interconnected models** (Users, Listings, Reviews).
- Seeded the application with **30+ sample property listings** for testing.
- Integrated **Cloudinary** for media management and **Mapbox** for interactive maps.
- Implemented secure **Role-Based Access Control (RBAC)** and ownership-based permissions.
- Deployed the application on **Render** with **MongoDB Atlas**.

---

## 🛠️ Installation

### Clone the repository

```bash
git clone https://github.com/Diya2701/SmartStay.git
```

### Navigate to the project

```bash
cd SmartStay
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
ATLASDB_URL=
SECRET=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
MAP_TOKEN=
```

### Start the server

```bash
npm start
```

or

```bash
node app.js
```
---

## 🎯 Future Improvements

- Wishlist/Favorites
- Booking System
- Payment Gateway Integration
- Advanced Search & Filters
- User Profiles
- Email Notifications
- Admin Dashboard

---

## 👩‍💻 Author

**Diya Dewangan**

GitHub: https://github.com/Diya2701

LinkedIn: https://www.linkedin.com/in/diya-dewangan-62b27028a