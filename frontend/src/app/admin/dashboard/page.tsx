'use client';

import { useEffect, useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import AdminHeader from '@/components/AdminHeader';
import AdminNav from '@/components/AdminNav';
import { apiService } from '@/services/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalEnquiries: 0,
    newEnquiries: 0,
    totalItems: 0,
    totalCategories: 0,
    featuredItems: 0
  });
  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [enquiriesData, itemsData, categoriesData] = await Promise.all([
        apiService.getEnquiries(),
        apiService.getItems(),
        apiService.getCategories()
      ]);

      const enquiries = Array.isArray(enquiriesData) ? enquiriesData : [];
      const items = Array.isArray(itemsData) ? itemsData : [];
      const categories = Array.isArray(categoriesData) ? categoriesData : [];

      const newEnquiries = enquiries.filter((enquiry: any) => enquiry.status === 'new').length;
      const featuredItemsCount = items.filter((item: any) => item.isFeatured).length;

      setStats({
        totalEnquiries: enquiries.length,
        newEnquiries,
        totalItems: items.length,
        totalCategories: categories.length,
        featuredItems: featuredItemsCount
      });

      // Get recent enquiries (last 5)
      setRecentEnquiries(enquiries.slice(0, 5));
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-lg">Loading...</div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <AdminHeader title="Admin Dashboard" />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Navigation */}
          <div className="mb-8">
            <AdminNav currentPage="dashboard" />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
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
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Categories</h3>
              <p className="text-3xl font-bold text-green-600">{stats.totalCategories}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Featured Items</h3>
              <p className="text-3xl font-bold text-purple-600">{stats.featuredItems}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="/admin/enquiries"
                  className="bg-pink-100 p-4 rounded-lg text-center hover:bg-pink-200 transition-colors"
                >
                  <h3 className="font-semibold text-pink-700">Manage Enquiries</h3>
                  <p className="text-sm text-pink-600">View and respond to customer enquiries</p>
                </a>
                <a
                  href="/admin/items"
                  className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200 transition-colors"
                >
                  <h3 className="font-semibold text-blue-700">Manage Items</h3>
                  <p className="text-sm text-blue-600">Add, edit, or remove dessert items</p>
                </a>
                <a
                  href="/admin/categories"
                  className="bg-green-100 p-4 rounded-lg text-center hover:bg-green-200 transition-colors"
                >
                  <h3 className="font-semibold text-green-700">Manage Categories</h3>
                  <p className="text-sm text-green-600">Organize item categories</p>
                </a>
              </div>
            </div>

            {/* Recent Enquiries */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Recent Enquiries</h2>
              {recentEnquiries.length === 0 ? (
                <p className="text-gray-500">No enquiries yet.</p>
              ) : (
                <div className="space-y-3">
                  {recentEnquiries.map((enquiry: any) => (
                    <div key={enquiry._id} className="border-l-4 border-pink-500 pl-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{enquiry.name}</p>
                          <p className="text-sm text-gray-600">{enquiry.email}</p>
                          <p className="text-sm text-gray-500 truncate max-w-xs">
                            {enquiry.message}
                          </p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${enquiry.status === 'new' ? 'bg-red-100 text-red-800' :
                            enquiry.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                          }`}>
                          {enquiry.status}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    <a
                      href="/admin/enquiries"
                      className="text-pink-600 hover:text-pink-800 text-sm font-medium"
                    >
                      View all enquiries →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}