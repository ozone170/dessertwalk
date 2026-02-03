# Dessert Walk - Deployment Guide

## Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (running locally on port 27017)
- Git

### Quick Start
```bash
# Clone the repository
git clone https://github.com/ozone170/dessertwalk.git
cd dessertwalk

# Install all dependencies
npm run install:all

# Seed the database with mock data
npm run seed

# Start backend (Terminal 1)
npm run dev:backend

# Start frontend (Terminal 2)
npm run dev:frontend
```

### Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Admin Login**: admin@dessertwalk.com / admin123

## Production Deployment

### Environment Variables

**Backend (.env)**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/dessertwalk
JWT_SECRET=your-secure-jwt-secret-here
NODE_ENV=production
```

**Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL=https://your-backend-domain.com/api
```

### Deployment Options

#### Option 1: Traditional VPS/Server
1. Set up MongoDB on your server
2. Deploy backend with PM2 or similar process manager
3. Build and deploy frontend with Nginx
4. Configure reverse proxy for API calls

#### Option 2: Cloud Platforms

**Backend (Railway, Render, Heroku)**
1. Connect your GitHub repository
2. Set environment variables
3. Deploy backend service
4. Run seed script once: `npm run seed`

**Frontend (Vercel, Netlify)**
1. Connect your GitHub repository
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/.next`
4. Configure environment variables

**Database (MongoDB Atlas)**
1. Create MongoDB Atlas cluster
2. Update MONGO_URI in backend environment
3. Whitelist deployment server IPs

### Build Commands

**Backend**
```bash
cd backend
npm install
npm start
```

**Frontend**
```bash
cd frontend
npm install
npm run build
npm start
```

### Health Checks

**Backend Health Check**
```bash
curl http://localhost:5000/api/categories
```

**Frontend Health Check**
```bash
curl http://localhost:3000
```

## Docker Deployment (Optional)

### Backend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend/ .
EXPOSE 5000
CMD ["npm", "start"]
```

### Frontend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/dessertwalk
    depends_on:
      - mongo
  
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:5000/api
  
  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

## Post-Deployment Checklist

- [ ] Backend API responding correctly
- [ ] Frontend loading and displaying data
- [ ] Admin login working
- [ ] Database seeded with initial data
- [ ] All images loading from Unsplash
- [ ] Instagram link working
- [ ] Enquiry form submitting successfully
- [ ] Admin dashboard accessible
- [ ] Mobile responsiveness working

## Monitoring & Maintenance

### Logs
- Backend: Check server logs for API errors
- Frontend: Check browser console for client errors
- Database: Monitor MongoDB connection and queries

### Backups
- Regular MongoDB backups
- Code repository backups
- Environment variables backup

### Updates
- Keep dependencies updated
- Monitor security vulnerabilities
- Regular testing of all features