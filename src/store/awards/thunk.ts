import { api } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { I_Root_Response } from '@types';

export const getCategories = createAsyncThunk<I_Root_Response>(
  'awards/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getBallotData();

      return response;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error);
    }
  },
);
