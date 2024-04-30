"use client";

import { useInitialProduct } from "@/hooks/useInitialProduct";
import { FC } from "react";
import { AddProduct } from "../addProduct";
import { FilterProduct } from "../filterProduct";
import { ListProduct } from "../listProduct";
import { Product } from "../listProduct/product.interface";

interface ControllerProductProps {
	products: Product[];
}

export const ControllerProduct: FC<ControllerProductProps> = ({ products }) => {
	const productStorage = useInitialProduct(products);

	return (
		<div>
			<AddProduct />
			<FilterProduct />

			<div className="grid">
				{productStorage?.map((product: Product, index: number) => (
					<ListProduct key={index} product={product} />
				))}
			</div>
		</div>
	);
};
