import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dashboardService } from '../services/dashboard.service';
import { DashboardState } from './types';

const initialState: DashboardState = {
  talents: [],
  insights: [],
  isLoading: false,
  error: null,
};

export const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchData',
  async (_, thunkAPI) => {
    try {
      const [talents, insights] = await Promise.all([
        dashboardService.getTalents(),
        dashboardService.getInsights(),
      ]);

      return { talents, insights };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch dashboard data');
    }
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    seedDashboardData: (state, action) => {
      // Safely ignore if data already exists to prevent overwrite conflicts
      if (state.talents.length === 0 && state.insights.length === 0) {
        state.talents = action.payload.talents;
        state.insights = action.payload.insights;
        state.isLoading = false;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.talents = action.payload.talents;
        state.insights = action.payload.insights;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { seedDashboardData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
