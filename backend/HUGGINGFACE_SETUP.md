# Hugging Face Spaces Deployment Guide

## 🚀 MongoDB Atlas Setup

### Step 1: Create MongoDB Atlas Cluster
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a new cluster (free tier is fine)
3. Create a database user with read/write permissions
4. Get your connection string

### Step 2: Whitelist Hugging Face IPs
1. In MongoDB Atlas → Network Access
2. Click "Add IP Address"
3. Add `0.0.0.0/0` (allows all IPs)
4. Save changes

## 🔧 Hugging Face Spaces Configuration

### Step 3: Set Environment Variables
1. Go to your Space: https://huggingface.co/spaces/ozone170/dessert-walk-backend
2. Click "Settings" tab
3. Go to "Variables and secrets"
4. Add these variables:

| Key | Value | Example |
|-----|-------|---------|
| `MONGO_URI` | Your MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster.mongodb.net/dessertwalk` |
| `JWT_SECRET` | A strong random string | `your-super-secret-jwt-key-make-it-long-and-random-123456` |

### Step 4: Restart the Space
After adding environment variables:
1. Click "Restart Space" button in the Space UI
2. OR push an empty commit to trigger rebuild

## 🔍 Troubleshooting

### Check Logs
1. Go to your Space
2. Click "Logs" tab
3. Look for these messages:

**✅ Success:**
```
Server running on port 5000
MongoDB connected successfully
```

**❌ Common Errors:**

| Error | Cause | Solution |
|-------|-------|----------|
| `MONGO_URI undefined` | Environment variable not set | Add MONGO_URI in Space settings |
| `MongoServerSelectionError` | IP not whitelisted | Add 0.0.0.0/0 to MongoDB Atlas |
| `Authentication failed` | Wrong credentials | Check username/password in MONGO_URI |

### Test API Endpoints
Once deployed, test these URLs:

1. **Health Check:**
   ```
   GET https://ozone170-dessert-walk-backend.hf.space/health
   ```

2. **Get Items:**
   ```
   GET https://ozone170-dessert-walk-backend.hf.space/api/items
   ```

3. **Get Categories:**
   ```
   GET https://ozone170-dessert-walk-backend.hf.space/api/categories
   ```

## 📋 Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created with read/write permissions
- [ ] IP address 0.0.0.0/0 whitelisted in Network Access
- [ ] MONGO_URI environment variable set in HF Spaces
- [ ] JWT_SECRET environment variable set in HF Spaces
- [ ] Space restarted after adding environment variables
- [ ] Health check endpoint returns success
- [ ] API endpoints return data

## 🔗 Useful Links

- [MongoDB Atlas](https://cloud.mongodb.com/)
- [Hugging Face Spaces Documentation](https://huggingface.co/docs/hub/spaces)
- [Your Space](https://huggingface.co/spaces/ozone170/dessert-walk-backend)