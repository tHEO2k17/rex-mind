import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { communityService } from '../services/community.service';
import { CommunityState } from './types';

const initialState: CommunityState = {
  data: null,
  isLoading: false,
  error: null,
};

export const fetchCommunityData = createAsyncThunk(
  'community/fetchData',
  async (_, thunkAPI) => {
    try {
      return await communityService.getCommunity();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch community data');
    }
  }
);

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    seedCommunityData: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommunityData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCommunityData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCommunityData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { seedCommunityData } = communitySlice.actions;
export { communitySlice };
export default communitySlice.reducer;
