import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { settingsService } from '../services/settings.service';
import { SettingsState, SettingsData } from './types';

const initialState: SettingsState = {
  data: null,
  isLoading: false,
  error: null,
};

export const fetchSettings = createAsyncThunk(
  'settings/fetch',
  async (_, thunkAPI) => {
    try {
      return await settingsService.getSettings();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch settings');
    }
  }
);

export const updateSettings = createAsyncThunk(
  'settings/update',
  async (newData: Partial<SettingsData>, thunkAPI) => {
    try {
      return await settingsService.updateSettings(newData);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to update settings');
    }
  }
);

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchSettings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateSettings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSettings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateSettings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default settingsSlice.reducer;
