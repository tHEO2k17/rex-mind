import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mentorService } from '../services/mentor.service';
import { MentorState, Message } from './types';

const initialState: MentorState = {
  data: null,
  isLoading: false,
  error: null,
};

export const fetchMentorData = createAsyncThunk(
  'mentor/fetchData',
  async (_, thunkAPI) => {
    try {
      return await mentorService.getMentor();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch mentor data');
    }
  }
);

export const sendMessage = createAsyncThunk(
  'mentor/sendMessage',
  async (content: string, thunkAPI) => {
    try {
      // Optimistically add the user message would be better in a reducer, 
      // but for simplicity we'll handle it in the thunk's lifecycle
      const response = await mentorService.sendMessage(content);
      return { userMessage: content, assistantMessage: response };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to send message');
    }
  }
);

const mentorSlice = createSlice({
  name: 'mentor',
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      if (state.data) {
        const newMessage: Message = {
          id: Date.now(),
          role: 'user',
          content: action.payload,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        state.data.messages.push(newMessage);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentorData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMentorData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMentorData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        if (state.data) {
          const assistantMessage: Message = {
            id: Date.now() + 1,
            role: 'assistant',
            content: action.payload.assistantMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          state.data.messages.push(assistantMessage);
        }
      });
  },
});

export const { addUserMessage } = mentorSlice.actions;

export default mentorSlice.reducer;
