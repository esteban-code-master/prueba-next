import { environment } from "@/settings/environment";
import { useAppDispatch } from "@/store/hooks";
import { setProducts } from "@/store/slice/products";
import React from "react";

export const useFilterByCategory = () => {
	const dispatch = useAppDispatch();

	const getAllProduct = async () => {
		const response = await fetch(`${environment.api}/products`);
		const { products } = await response.json();

		return products;
	};

	const getProductByCategory = async (category: string) => {
		const response = await fetch(
			`${environment.api}/products/category/${category}`
		);

		const { products } = await response.json();

		return products;
	};

	const filterByCategory = async (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		if (e.target.value !== "") {
			const products = await getProductByCategory(e.target.value);
			dispatch(setProducts(products));

			return;
		}

		const products = await getAllProduct();
		dispatch(setProducts(products));
	};

	return filterByCategory;
};
