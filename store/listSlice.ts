import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IListingData } from '../src/components/ListingPage/types';

interface ListState {
  data: IListingData;
  loading: boolean;
  error: string | null;
}

const initialState: ListState = {
  data: <any>{},
  loading: false,
  error: null,
};

export const fetchListingPageData = createAsyncThunk(
  'list/fetchListingPageData',
  async (page: number) => {
    const response = await fetch(
      `https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=${page}`
    );
    return response.json();
  }
);

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListingPageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListingPageData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchListingPageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default listSlice.reducer;
