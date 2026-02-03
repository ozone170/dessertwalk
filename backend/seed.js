const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const Admin = require('./models/Admin');
const Category = require('./models/Category');
const Item = require('./models/Item');

// Mock dessert images from various sources
const mockImages = [
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop'
];

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Admin.deleteMany({});
    await Category.deleteMany({});
    await Item.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash('admin123', salt);
    
    const admin = new Admin({
      email: 'admin@dessertwalk.com',
      passwordHash
    });
    await admin.save();
    console.log('Admin user created: admin@dessertwalk.com / admin123');

    // Create categories
    const categories = [
      { name: 'Cakes', slug: 'cakes' },
      { name: 'Desserts', slug: 'desserts' },
      { name: 'Pastries', slug: 'pastries' },
      { name: 'Shakes', slug: 'shakes' }
    ];

    const createdCategories = await Category.insertMany(categories);
    console.log('Categories created');

    // Create items
    const items = [
      // Cakes
      {
        name: 'Chocolate Fudge Cake',
        description: 'Rich and moist chocolate cake with creamy fudge frosting',
        categoryId: createdCategories[0]._id,
        imageUrl: mockImages[0],
        isFeatured: true
      },
      {
        name: 'Red Velvet Cake',
        description: 'Classic red velvet cake with cream cheese frosting',
        categoryId: createdCategories[0]._id,
        imageUrl: mockImages[1],
        isFeatured: true
      },
      {
        name: 'Vanilla Birthday Cake',
        description: 'Light and fluffy vanilla cake perfect for celebrations',
        categoryId: createdCategories[0]._id,
        imageUrl: mockImages[2],
        isFeatured: false
      },
      {
        name: 'Strawberry Shortcake',
        description: 'Fresh strawberries with whipped cream on vanilla sponge',
        categoryId: createdCategories[0]._id,
        imageUrl: mockImages[3],
        isFeatured: true
      },

      // Desserts
      {
        name: 'Chocolate Brownie',
        description: 'Fudgy chocolate brownies with walnuts',
        categoryId: createdCategories[1]._id,
        imageUrl: mockImages[4],
        isFeatured: true
      },
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee and mascarpone',
        categoryId: createdCategories[1]._id,
        imageUrl: mockImages[5],
        isFeatured: false
      },
      {
        name: 'Cheesecake',
        description: 'Creamy New York style cheesecake with berry topping',
        categoryId: createdCategories[1]._id,
        imageUrl: mockImages[6],
        isFeatured: true
      },
      {
        name: 'Chocolate Mousse',
        description: 'Light and airy chocolate mousse with whipped cream',
        categoryId: createdCategories[1]._id,
        imageUrl: mockImages[7],
        isFeatured: false
      },

      // Pastries
      {
        name: 'Croissant',
        description: 'Buttery, flaky French croissants baked fresh daily',
        categoryId: createdCategories[2]._id,
        imageUrl: mockImages[8],
        isFeatured: false
      },
      {
        name: 'Danish Pastry',
        description: 'Sweet Danish pastries with fruit and cream filling',
        categoryId: createdCategories[2]._id,
        imageUrl: mockImages[9],
        isFeatured: true
      },
      {
        name: 'Éclair',
        description: 'Choux pastry filled with cream and topped with chocolate',
        categoryId: createdCategories[2]._id,
        imageUrl: mockImages[10],
        isFeatured: false
      },
      {
        name: 'Macarons',
        description: 'Delicate French macarons in assorted flavors',
        categoryId: createdCategories[2]._id,
        imageUrl: mockImages[11],
        isFeatured: true
      },

      // Shakes
      {
        name: 'Chocolate Milkshake',
        description: 'Thick and creamy chocolate milkshake with whipped cream',
        categoryId: createdCategories[3]._id,
        imageUrl: mockImages[12],
        isFeatured: false
      },
      {
        name: 'Strawberry Shake',
        description: 'Fresh strawberry milkshake with real fruit',
        categoryId: createdCategories[3]._id,
        imageUrl: mockImages[13],
        isFeatured: true
      },
      {
        name: 'Vanilla Shake',
        description: 'Classic vanilla milkshake made with premium ice cream',
        categoryId: createdCategories[3]._id,
        imageUrl: mockImages[14],
        isFeatured: false
      },
      {
        name: 'Oreo Shake',
        description: 'Cookies and cream shake with crushed Oreos',
        categoryId: createdCategories[3]._id,
        imageUrl: mockImages[15],
        isFeatured: true
      }
    ];

    await Item.insertMany(items);
    console.log('Items created');

    console.log('Seed data created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();