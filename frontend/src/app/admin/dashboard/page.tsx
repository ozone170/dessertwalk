'use client';

import { useEffect, useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { apiService } from '@/services/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalEnquiries: 0,
    newEnquiries: 0,
    totalItems: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [enquiries, items] = await Promise.all([
          apiService.getEnquiries(),
          apiService.getItems()
        ]);
        
        const newEnquiries = enquiries.filter((enquiry: any) => enquiry.status === 'new').length;
        
        setStats({
          totalEnquiries: enquiries.length,
          newEnquiries,
          totalItems: items.length
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    window.location.href = '/login';
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Navigation */}
          <div className="mb-8">
            <nav className="flex space-x-4">
              <a href="/admin/dashboard" className="bg-pink-600 text-white px-4 py-2 rounded">
                Dashboard
              </a>
              <a href="/admin/enquiries" className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Enquiries
              </a>
              <a href="/admin/items" className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Items
              </a>
              <a href="/admin/categories" className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Categories
              </a>
            </nav>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Total Enquiries</h3>
              <p className="text-3xl font-bold text-pink-600">{stats.totalEnquiries}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">New Enquiries</h3>
              <p className="text-3xl font-bold text-orange-600">{stats.newEnquiries}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Total Items</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.totalItems}</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="/admin/enquiries"
                className="bg-pink-100 p-4 rounded-lg text-center hover:bg-pink-200 transition-colors"
              >
                <h3 className="font-semibold text-pink-700">View Enquiries</h3>
                <p className="text-sm text-pink-600">Manage customer enquiries</p>
              </a>
              <a
                href="/admin/items"
                className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200 transition-colors"
              >
                <h3 className="font-semibold text-blue-700">Manage Items</h3>
                <p className="text-sm text-blue-600">Add, edit, or remove items</p>
              </a>
              <a
                href="/admin/categories"
                className="bg-green-100 p-4 rounded-lg text-center hover:bg-green-200 transition-colors"
              >
                <h3 className="font-semibold text-green-700">Manage Categories</h3>
                <p className="text-sm text-green-600">Organize item categories</p>
              </a>
              <a
                href="/"
                className="bg-gray-100 p-4 rounded-lg text-center hover:bg-gray-200 transition-colors"
              >
                <h3 className="font-semibold text-gray-700">View Website</h3>
                <p className="text-sm text-gray-600">See the public website</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}