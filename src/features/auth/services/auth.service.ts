import { apiClient } from '@/shared/api/axios';
import { LoginDTO, RegisterDTO, AuthResponse, User } from '../model/types';

class AuthService {
  async login(data: LoginDTO): Promise<AuthResponse> {
    const response = await apiClient.get<User[]>(`/users?email=${data.email}&password=${data.password}`);
    const users = response.data;

    if (users.length > 0) {
      const user = users[0];
      return {
        user,
        token: `mock_token_${user.id}_${Date.now()}`
      };
    }
    throw new Error('Invalid email or password');
  }

  async register(data: RegisterDTO): Promise<AuthResponse> {
    const existing = await apiClient.get<User[]>(`/users?email=${data.email}`);
    if (existing.data.length > 0) {
      throw new Error('An account with this email already exists');
    }

    const response = await apiClient.post<User>('/users', data);
    const user = response.data;

    return {
      user,
      token: `mock_token_${user.id}_${Date.now()}`
    };
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
}

export const authService = new AuthService();
