import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { talentsService } from '../services/talents.service';
import { TalentsState } from './types';

const initialState: TalentsState = {
  talents: [],
  isLoading: false,
  error: null,
};

export const fetchTalents = createAsyncThunk(
  'talents/fetchData',
  async (_, thunkAPI) => {
    try {
      const data = await talentsService.getDetailedTalents();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch talents data');
    }
  }
);

const talentsSlice = createSlice({
  name: 'talents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTalents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTalents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.talents = action.payload;
      })
      .addCase(fetchTalents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default talentsSlice.reducer;
