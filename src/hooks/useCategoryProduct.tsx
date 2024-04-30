import { environment } from "@/settings/environment";
import { useEffect, useState } from "react";

export const useCategoriesProduct = (): string[] => {
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		const fetching = async () => {
			const responseCategory = await fetch(
				`${environment.api}/products/categories`
			);
			const categoryApi = await responseCategory.json();

			setCategories(categoryApi);
		};
		fetching();
	}, []);

	return categories;
};
