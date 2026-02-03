const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    };
  }

  // Auth
  async login(email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  }

  // Categories
  async getCategories() {
    const response = await fetch(`${API_BASE_URL}/categories`);
    return response.json();
  }

  async createCategory(data: { name: string; slug: string }) {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async updateCategory(id: string, data: { name: string; slug: string }) {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async deleteCategory(id: string) {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });
    return response.json();
  }

  // Items
  async getItems(params?: { category?: string; featured?: boolean }) {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.append('category', params.category);
    if (params?.featured) searchParams.append('featured', 'true');
    
    const response = await fetch(`${API_BASE_URL}/items?${searchParams}`);
    return response.json();
  }

  async createItem(data: any) {
    const response = await fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async updateItem(id: string, data: any) {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async deleteItem(id: string) {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });
    return response.json();
  }

  // Enquiries
  async createEnquiry(data: any) {
    const response = await fetch(`${API_BASE_URL}/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async getEnquiries() {
    const response = await fetch(`${API_BASE_URL}/enquiries`, {
      headers: this.getAuthHeaders()
    });
    return response.json();
  }

  async updateEnquiryStatus(id: string, status: string) {
    const response = await fetch(`${API_BASE_URL}/enquiries/${id}/status`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    return response.json();
  }

  async deleteEnquiry(id: string) {
    const response = await fetch(`${API_BASE_URL}/enquiries/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });
    return response.json();
  }
}

export const apiService = new ApiService();