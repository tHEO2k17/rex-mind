import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { authService } from '../services/auth.service';
import { LoginDTO, RegisterDTO, AuthResponse, User } from './types';
import Cookies from 'js-cookie';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null, // Avoid SSR hydration mismatches
  token: null,
  isLoading: false,
  error: null,
};

export const loginThunk = createAsyncThunk<AuthResponse, LoginDTO>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await authService.login(credentials);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Login failed');
    }
  }
);

export const registerThunk = createAsyncThunk<AuthResponse, RegisterDTO>(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const response = await authService.register(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Registration failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove('token');
      Cookies.remove('user');
      authService.logout();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        if (typeof window !== 'undefined') {
          Cookies.set('token', action.payload.token, { expires: 7, secure: true, sameSite: 'strict' });
          Cookies.set('user', JSON.stringify(action.payload.user), { expires: 7, secure: true, sameSite: 'strict' });
        }
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        if (typeof window !== 'undefined') {
          Cookies.set('token', action.payload.token, { expires: 7, secure: true, sameSite: 'strict' });
          Cookies.set('user', JSON.stringify(action.payload.user), { expires: 7, secure: true, sameSite: 'strict' });
        }
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
