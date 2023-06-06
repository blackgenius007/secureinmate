import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import inmateService from './inmateService';

const initialState = {
  inmates: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Register inmate
export const registerInmate = createAsyncThunk(
  'inmates/register',
  async ({ inmateData, inmateId }, thunkAPI) => {
    try {
      return await inmateService.register(inmateData, inmateId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Retrieve all inmates
export const retrieveAllInmates = createAsyncThunk(
  'inmates/retrieveAll',
  async (_, thunkAPI) => {
    try {
      return await inmateService.retrieveInmates();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const inmateSlice = createSlice({
  name: 'inmates',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerInmate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerInmate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Assuming the response contains the registered inmate data
        state.inmates.push(action.payload);
      })
      .addCase(registerInmate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(retrieveAllInmates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(retrieveAllInmates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.inmates = action.payload;
      })
      .addCase(retrieveAllInmates.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = inmateSlice.actions;
export default inmateSlice.reducer;
