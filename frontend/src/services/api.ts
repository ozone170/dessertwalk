const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://dessertwalk.onrender.com/api';

class ApiService {
  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    };
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Request failed' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  // Auth
  async login(email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return this.handleResponse(response);
  }

  // Categories
  async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      const data = await this.handleResponse(response);
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  async createCategory(data: { name: string; slug: string }) {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return this.handleResponse(response);
  }

  async updateCategory(id: string, data: { name: string; slug: string }) {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return this.handleResponse(response);
  }

  async deleteCategory(id: string) {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });
    return this.handleResponse(response);
  }

  // Items
  async getItems(params?: { category?: string; featured?: boolean }) {
    try {
      const searchParams = new URLSearchParams();
      if (params?.category) searchParams.append('category', params.category);
      if (params?.featured) searchParams.append('featured', 'true');
      
      const response = await fetch(`${API_BASE_URL}/items?${searchParams}`);
      const data = await this.handleResponse(response);
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching items:', error);
      return [];
    }
  }

  async createItem(data: any) {
    const response = await fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return this.handleResponse(response);
  }

  async updateItem(id: string, data: any) {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return this.handleResponse(response);
  }

  async deleteItem(id: string) {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });
    return this.handleResponse(response);
  }

  // Enquiries
  async createEnquiry(data: any) {
    const response = await fetch(`${API_BASE_URL}/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return this.handleResponse(response);
  }

  async getEnquiries() {
    try {
      const response = await fetch(`${API_BASE_URL}/enquiries`, {
        headers: this.getAuthHeaders()
      });
      const data = await this.handleResponse(response);
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      return [];
    }
  }

  async updateEnquiryStatus(id: string, status: string) {
    const response = await fetch(`${API_BASE_URL}/enquiries/${id}/status`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    return this.handleResponse(response);
  }

  async deleteEnquiry(id: string) {
    const response = await fetch(`${API_BASE_URL}/enquiries/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });
    return this.handleResponse(response);
  }
}

export const apiService = new ApiService();