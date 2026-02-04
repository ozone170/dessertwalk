# Backend Deployment Guide

## 🚀 Cloud Deployment Ready

This backend is now configured for cloud deployment with the following features:

### ✅ Deployment Features
- **Docker Support**: Dockerfile included for containerized deployment
- **Cloud-Ready Port**: Uses `process.env.PORT` for dynamic port assignment
- **CORS Configuration**: Configured for both localhost and Vercel frontend
- **Health Check**: `/health` endpoint for monitoring
- **Environment Variables**: Proper .env configuration

### 📁 Files Added/Modified
- `server.js` - Main server file (replaces app.js)
- `Dockerfile` - Container configuration
- `.dockerignore` - Docker build optimization
- `.env.example` - Environment variables template
- `package.json` - Updated to use server.js

### 🔧 Environment Variables Required

```env
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
PORT=5000
```

### 🐳 Docker Deployment

```bash
# Build the image
docker build -t dessert-walk-backend .

# Run the container
docker run -p 5000:5000 --env-file .env dessert-walk-backend
```

### ☁️ Hugging Face Deployment

1. Push code to GitHub
2. Connect repository to Hugging Face Spaces
3. Set environment variables in Hugging Face dashboard
4. Deploy as Docker container

### 🌐 Vercel Frontend Integration

The CORS is configured to accept requests from:
- `http://localhost:3000` (development)
- `https://dessertwalk.vercel.app` (production)

### 🔍 Health Check

Access `/health` endpoint to verify server status:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### 📋 Deployment Checklist

- ✅ Dockerfile created
- ✅ Package.json updated with correct start script
- ✅ Server configured for dynamic port
- ✅ CORS configured for Vercel
- ✅ Health check endpoint added
- ✅ Environment variables documented
- ✅ Docker ignore file added
- ✅ Old app.js removed

The backend is now ready for cloud deployment! 🎉