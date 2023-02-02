import { createSlice } from "@reduxjs/toolkit";

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
    loading: true,
  },

  reducers: {
    // addProduct:()=>{
    // }
  },
  extraReducers: () => {},
});

// export const {addProduct} = productSlice.actions;

export default productSlice.reducer;
