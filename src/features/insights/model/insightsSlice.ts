import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { insightsService } from '../services/insights.service';
import { InsightsState } from './types';

const initialState: InsightsState = {
  data: null,
  isLoading: false,
  error: null,
};

export const fetchInsightsData = createAsyncThunk(
  'insights/fetchData',
  async (_, thunkAPI) => {
    try {
      const data = await insightsService.getInsightsData();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch insights data');
    }
  }
);

const insightsSlice = createSlice({
  name: 'insights',
  initialState,
  reducers: {
    seedInsightsData: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInsightsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchInsightsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchInsightsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { seedInsightsData } = insightsSlice.actions;
export { insightsSlice };
export default insightsSlice.reducer;
