import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { challengesService } from '../services/challenges.service';
import { ChallengesState } from './types';

const initialState: ChallengesState = {
  data: null,
  isLoading: false,
  error: null,
};

export const fetchChallengesData = createAsyncThunk(
  'challenges/fetchData',
  async (_, thunkAPI) => {
    try {
      return await challengesService.getChallenges();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch challenges data');
    }
  }
);

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {
    seedChallengesData: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChallengesData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchChallengesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchChallengesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { seedChallengesData } = challengesSlice.actions;
export { challengesSlice };
export default challengesSlice.reducer;
