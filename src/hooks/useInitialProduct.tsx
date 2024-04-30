import { Product } from "@/components/listProduct/product.interface";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setProducts } from "@/store/slice/products";
import { useEffect } from "react";

export const useInitialProduct = (products: Product[]) => {
	const productStorage = useAppSelector((state) => state.products);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setProducts(products));
	}, []);

	return productStorage;
};
