import { environment } from "@/settings/environment";
import { useAppDispatch } from "@/store/hooks";
import { setProducts } from "@/store/slice/products";

export const useGetProduct = () => {
	const dispatch = useAppDispatch();

	const getProduct = async () => {
		const response = await fetch(`${environment.api}/products`);
		const { products } = await response.json();

		dispatch(setProducts(products));
	};

	return getProduct;
};
