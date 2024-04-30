"use client";
import { useCategoriesProduct } from "@/hooks/useCategoryProduct";
import { useFilterByCategory } from "@/hooks/useFilterByCategory";
import { useSearchProduct } from "@/hooks/useSearchProduct";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const FilterProduct = () => {
	const t = useTranslations();
	const [keyword, setKeyword] = useState<string>("");
	const categories = useCategoriesProduct();
	const searchProduct = useSearchProduct(keyword);
	const filterByCategory = useFilterByCategory();

	return (
		<div>
			<input
				type="search"
				value={keyword}
				onChange={(e) => {
					setKeyword(e.target.value);
				}}
			/>

			<button onClick={searchProduct}>{t("search")}</button>

			<select onChange={filterByCategory}>
				<option value="">{t("all-category")}</option>
				{categories &&
					categories.map((category, index) => (
						<option key={index}>{category}</option>
					))}
			</select>
		</div>
	);
};
