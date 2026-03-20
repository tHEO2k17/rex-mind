import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { identityService } from '../services/identity.service';
import { IdentityState, IdentityData } from './types';

const initialState: IdentityState = {
  data: null,
  isLoading: false,
  error: null,
};

export const fetchIdentityData = createAsyncThunk(
  'identity/fetchData',
  async (_, thunkAPI) => {
    try {
      return await identityService.getIdentity();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch identity data');
    }
  }
);

export const updateIdentity = createAsyncThunk(
  'identity/update',
  async (newData: Partial<IdentityData>, thunkAPI) => {
    try {
      return await identityService.updateIdentity(newData);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to update identity data');
    }
  }
);

const identitySlice = createSlice({
  name: 'identity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdentityData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIdentityData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchIdentityData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateIdentity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateIdentity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateIdentity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default identitySlice.reducer;
