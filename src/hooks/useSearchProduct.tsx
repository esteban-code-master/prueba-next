import { environment } from "@/settings/environment";
import { useAppDispatch } from "@/store/hooks";
import { setProducts } from "@/store/slice/products";

export const useSearchProduct = (keyword: string) => {
	const dispatch = useAppDispatch();

	const searchProduct = async () => {
		const response = await fetch(
			`${environment.api}/products/search?q=${keyword}`
		);

		const filterProduct = await response.json();
		dispatch(setProducts(filterProduct.products));
	};

	return searchProduct;
};
