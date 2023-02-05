import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllStatus",
  async (thunkAPI) => {
    const result = await fetch("https://fakestoreapi.com/products");

    console.log(result);
    return await result.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    selectedProduct: [],
    searchQuery: "",
    loading: true,
  },

  reducers: {
    clickedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    searchLetter: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.loading = false;
    });
  },
});

export const { clickedProduct, searchLetter } = productSlice.actions;

export default productSlice.reducer;
