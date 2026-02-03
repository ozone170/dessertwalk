# Dessert Walk - Full Stack Application

A modern dessert shop website built with Next.js frontend and Node.js backend, featuring admin panel for content management.

## Project Structure

```
dessert-walk/
├── frontend/          # Next.js React application
├── backend/           # Node.js Express API
└── README.md
```

## Features

### Frontend (Next.js/React)
- **Public Pages**: Home, Items, About, Enquiry
- **Admin Panel**: Dashboard, Items Management, Categories Management, Enquiries Management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Image Optimization**: Lazy loading with Unsplash images

### Backend (Node.js/Express)
- **RESTful API**: Complete CRUD operations
- **Authentication**: JWT-based admin authentication
- **Mock Data**: Pre-populated with dessert items and categories
- **Database**: MongoDB with Mongoose ODM

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally on port 27017)

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
# Backend setup
cd dessert-walk/backend
npm install

# Frontend setup
cd ../frontend
npm install
```

### 2. Environment Configuration

**Backend (.env)**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/dessertwalk
JWT_SECRET=bd0146dfff4ec227f3960d8628ad2d1446010c362e4538db3309e47c1c075f7c
```

### 3. Database Setup & Seed Data

1. Start MongoDB locally
2. Seed the database with mock data and create admin user:

```bash
cd backend
npm run seed
```

This will create:
- Admin user: `admin@dessertwalk.com` / `admin123`
- 4 categories: Cakes, Desserts, Pastries, Shakes
- 16 sample items with Unsplash images

### 4. Start the Applications

**Backend (Terminal 1)**
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

**Frontend (Terminal 2)**
```bash
cd frontend
npm run dev
# App runs on http://localhost:3000
```

## Usage

### Public Website
- Visit `http://localhost:3000`
- Browse items, categories, and submit enquiries
- View featured items on the homepage
- Filter items by category on the items page

### Admin Panel
1. Go to `http://localhost:3000/login`
2. Login with: `admin@dessertwalk.com` / `admin123`
3. Access admin dashboard at `http://localhost:3000/admin/dashboard`

## Instagram Integration

The footer includes a link to the official Dessert Walk Instagram account:
- **Instagram**: [@dessert_walk](https://www.instagram.com/dessert_walk?igsh=NHRtazRkenR5cXNk)

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Create admin (use once)

### Items
- `GET /api/items` - Get all items
- `GET /api/items?featured=true` - Get featured items
- `GET /api/items?category=categoryId` - Get items by category
- `POST /api/items` - Create item (admin)
- `PUT /api/items/:id` - Update item (admin)
- `DELETE /api/items/:id` - Delete item (admin)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (admin)
- `PUT /api/categories/:id` - Update category (admin)
- `DELETE /api/categories/:id` - Delete category (admin)

### Enquiries
- `POST /api/enquiries` - Submit enquiry (public)
- `GET /api/enquiries` - Get all enquiries (admin)
- `PUT /api/enquiries/:id/status` - Update enquiry status (admin)
- `DELETE /api/enquiries/:id` - Delete enquiry (admin)

## Mock Data

The application comes with pre-populated mock data:

### Categories
- **Cakes**: Chocolate Fudge, Red Velvet, Vanilla Birthday, Strawberry Shortcake
- **Desserts**: Chocolate Brownie, Tiramisu, Cheesecake, Chocolate Mousse
- **Pastries**: Croissant, Danish Pastry, Éclair, Macarons
- **Shakes**: Chocolate, Strawberry, Vanilla, Oreo

### Images
All item images are sourced from Unsplash with proper optimization and lazy loading.

## Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React Hooks

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + bcryptjs
- **Environment**: dotenv

## Development Notes

- The frontend uses client-side rendering for dynamic content
- Admin routes are protected with JWT authentication
- Images are served from Unsplash CDN for fast loading
- The application uses a monorepo structure for easy development
- Mock data is automatically seeded on first run

## Current Status

✅ **Backend**: Running on http://localhost:5000
✅ **Frontend**: Running on http://localhost:3000
✅ **Database**: Seeded with mock data
✅ **Admin User**: Created (admin@dessertwalk.com / admin123)