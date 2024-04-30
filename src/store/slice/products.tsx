import { Product } from "@/components/listProduct/product.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

export const shopSlice = createSlice({
	name: "products",
	initialState: initialState,
	reducers: {
		setProducts: (_, action: PayloadAction<Product[]>) => action.payload,
	},
});

export const { setProducts } = shopSlice.actions;
export default shopSlice.reducer;
