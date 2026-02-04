# 🍰 Dessert Walk - Full Stack Web Application

A modern, responsive dessert shop website built with Next.js and Node.js, featuring a complete admin panel for content management.

![Dessert Walk](https://img.shields.io/badge/Status-Complete-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

## 🌟 Features

### 🎨 Modern Design
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Gradient backgrounds, smooth animations, and hover effects
- **Brand Colors**: Amber/Orange gradient theme throughout
- **Interactive Elements**: Clickable items, modals, and smooth transitions

### 🏪 Public Website
- **Home Page**: Hero section, featured items, categories, testimonials
- **Menu Page**: Complete item catalog with search and filtering
- **About Page**: Company story, mission, team, and values
- **Enquiry Page**: Contact form with item selection and validation
- **Item Details**: Modal popups with detailed product information

### 🔐 Admin Panel
- **Dashboard**: Statistics overview and quick actions
- **Items Management**: Full CRUD operations with image support
- **Categories Management**: Organize menu categories
- **Enquiries Management**: View and manage customer enquiries
- **Authentication**: JWT-based secure admin access

### 📱 Technical Features
- **Full Stack**: Next.js frontend + Node.js/Express backend
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens with bcrypt password hashing
- **API**: RESTful API with proper error handling
- **TypeScript**: Type-safe development
- **Responsive**: Works perfectly on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (running locally)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/dessert-walk.git
cd dessert-walk
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

4. **Set up environment variables**
```bash
# Backend .env file is already configured for local development
# MongoDB: mongodb://localhost:27017/dessertwalk
# JWT Secret: Secure random string
```

5. **Seed the database**
```bash
cd backend
npm run seed
```

6. **Start the applications**

**Backend (Terminal 1):**
```bash
cd backend
npm run dev
# Runs on http://localhost:5000
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm run dev
# Runs on http://localhost:3000
```

## 🎯 Usage

### Public Website
- Visit `http://localhost:3000`
- Browse the menu, view item details
- Submit enquiries through the contact form
- Explore categories and featured items

### Admin Access
1. Go to `http://localhost:3000/login`
2. **Demo Credentials:**
   - Email: `admin@dessertwalk.com`
   - Password: `admin123`
3. Access admin dashboard at `http://localhost:3000/admin/dashboard`

## 📊 Project Structure

```
dessert-walk/
├── frontend/                 # Next.js React application
│   ├── src/
│   │   ├── app/             # App router pages
│   │   ├── components/      # Reusable components
│   │   └── services/        # API services
│   ├── public/              # Static assets
│   └── package.json
├── backend/                 # Node.js Express API
│   ├── controllers/         # Request handlers
│   ├── routes/             # API routes
│   ├── models/             # MongoDB models
│   ├── middleware/         # Custom middleware
│   ├── seed.js             # Database seeding
│   └── package.json
└── README.md
```

## 🛠 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Create admin account

### Items
- `GET /api/items` - Get all items
- `GET /api/items?featured=true` - Get featured items
- `GET /api/items?category=id` - Get items by category
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
- `PUT /api/enquiries/:id/status` - Update status (admin)
- `DELETE /api/enquiries/:id` - Delete enquiry (admin)

## 🎨 Design System

### Colors
- **Primary**: Amber (#F59E0B) to Orange (#EA580C) gradients
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Pink for special elements
- **Success**: Green for positive actions
- **Error**: Red for warnings and errors

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable fonts with proper hierarchy
- **Buttons**: Bold text with gradient backgrounds

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Adapted layouts for medium screens
- **Desktop**: Full-featured experience for large screens
- **Touch Friendly**: Large tap targets and smooth interactions

## 🔒 Security Features

- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcrypt for secure password storage
- **CORS Protection**: Configured for secure API access
- **Input Validation**: Server-side validation for all inputs
- **Protected Routes**: Admin-only access to sensitive areas

## 📦 Sample Data

The application comes with pre-populated sample data:

### Categories (4)
- **Cakes**: Birthday cakes, celebration cakes
- **Desserts**: Brownies, mousses, cheesecakes
- **Pastries**: Croissants, éclairs, macarons
- **Shakes**: Milkshakes and specialty drinks

### Items (16)
- Complete menu with prices ($3.99 - $28.99)
- High-quality Unsplash images
- Detailed descriptions
- Featured item selections

## 🚀 Deployment

### 🐳 Docker Deployment (Backend)
The backend is Docker-ready for cloud deployment:

```bash
cd backend
docker build -t dessert-walk-backend .
docker run -p 5000:5000 --env-file .env dessert-walk-backend
```

### ☁️ Cloud Deployment Options

**Backend (Hugging Face Spaces)**
- Dockerfile included for containerized deployment
- Environment variables: `MONGO_URI`, `JWT_SECRET`, `PORT`
- Health check endpoint: `/health`
- CORS configured for Vercel frontend

**Frontend (Vercel)**
- Optimized for Vercel deployment
- Environment variables for API endpoints
- Static generation for optimal performance

### 🔧 Environment Variables

**Backend (.env)**
```env
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
PORT=5000
```

**Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL=your-backend-api-url
```

### 📋 Deployment Checklist
- ✅ Docker configuration ready
- ✅ Cloud-ready port configuration
- ✅ CORS configured for production
- ✅ Environment variables documented
- ✅ Health check endpoint available
- ✅ Production build tested

### Local Development
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
- Database: MongoDB local instance

### Production Ready
- Environment variables configured
- Build scripts available
- Optimized for deployment platforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash**: High-quality dessert images
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js**: React framework for production
- **MongoDB**: NoSQL database
- **Express.js**: Web framework for Node.js

## 📞 Support

For support, email support@dessertwalk.com or create an issue in this repository.

---

**Made with ❤️ for dessert lovers everywhere!**