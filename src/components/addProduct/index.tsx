"use client";

import { useGetProduct } from "@/hooks/useGetProduct";
import { environment } from "@/settings/environment";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Input } from "../input";
import { Product } from "../listProduct/product.interface";
import { Modal } from "../modal";

export const AddProduct = () => {
	const t = useTranslations();

	const getProduct = useGetProduct();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [product, setProduct] = useState<Partial<Product>>({
		title: "",
		description: "",
		price: 0,
		raiting: 0,
		stock: 0,
	});

	const handleProduct = () => {
		setIsOpen(true);
	};

	const onChange = (property: string, e: any) => {
		setProduct({ ...product, [property]: e.target.value });
	};

	const saveProduct = async (e: any) => {
		e.preventDefault();

		const response = await fetch(`${environment.api}/products/add`, {
			method: "POST",
			body: JSON.stringify(product),
		});

		console.log("productos..", await response.json());
		setIsOpen(false);
		setProduct({
			title: "",
			description: "",
			price: 0,
			raiting: 0,
			stock: 0,
		});
		getProduct();
	};
	return (
		<div>
			<button onClick={handleProduct}>{t("add-product")}</button>
			<Modal isOpen={isOpen} closeOpen={() => setIsOpen(false)}>
				<form onSubmit={saveProduct}>
					<Input
						label="titulo"
						type="text"
						value={product.title}
						setValue={(e: any) => {
							onChange("title", e);
						}}
					/>

					<Input
						label="descripción"
						type="text"
						value={product.description}
						setValue={(e: any) => {
							onChange("description", e);
						}}
					/>
					<Input
						label="precio"
						type="number"
						value={product.price}
						setValue={(e: any) => {
							onChange("price", e);
						}}
					/>
					<Input
						label="raiting"
						type="number"
						value={product.raiting}
						setValue={(e: any) => {
							onChange("raiting", e);
						}}
					/>
					<Input
						label="stock"
						type="number"
						value={product.stock}
						setValue={(e: any) => {
							onChange("stock", e);
						}}
					/>
					<button>{t("save")}</button>
				</form>
			</Modal>
		</div>
	);
};
