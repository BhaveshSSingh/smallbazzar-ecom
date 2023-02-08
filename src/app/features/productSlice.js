import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllStatus",
  async (thunkAPI) => {
    const result = await fetch("https://fakestoreapi.com/products");
    return await result.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    filteredProducts: [],
    selectedProduct: [],
    searchQuery: "",
    category: "",
    price: 1000,
    stars: 5,
    loading: true,
  },

  reducers: {
    clickedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    searchLetter: (state, action) => {
      state.searchQuery = action.payload;
    },
    clickedCategory: (state, action) => {
      state.category = action.payload;
    },
    priceRange: (state, action) => {
      state.price = action.payload;
    },
    starRange: (state, action) => {
      state.stars = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.filteredProducts = action.payload;
      state.loading = false;
    });
  },
});

export const {
  clickedProduct,
  clickedCategory,
  searchLetter,
  priceRange,
  starRange,
} = productSlice.actions;

export default productSlice.reducer;
