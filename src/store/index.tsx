import { configureStore } from "@reduxjs/toolkit";
import products from "./slice/products";

export const store = configureStore({
	reducer: { products },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
