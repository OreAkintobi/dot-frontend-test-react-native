import { createSlice } from '@reduxjs/toolkit';
import { I_Root_Response } from '@types';

import { getCategories } from './thunk';

const awardsSlice = createSlice({
  name: 'awards',
  initialState: {
    awards: { items: [] } as I_Root_Response,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    // authenticateUser
    builder.addCase(getCategories.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.awards = action.payload;
    });
    builder.addCase(getCategories.rejected, state => {
      state.isLoading = false;
    });
  },
});

export default awardsSlice.reducer;
