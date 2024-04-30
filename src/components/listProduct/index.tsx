"use client";
import { environment } from "@/settings/environment";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import "./listProduct.css";
import { Product } from "./product.interface";

interface ListProductProps {
	product: Product;
}

export const ListProduct: FunctionComponent<ListProductProps> = (props) => {
	const { product } = props;

	const handledDelete = async () => {
		const response = await fetch(
			`${environment.api}/products/${product.id}`,
			{
				method: "DELETE",
			}
		);

		console.log("delete", await response.json());
	};

	const t = useTranslations();

	return (
		<div>
			<Link href={`/details/${product.id}`} className="product">
				<div className="product-wrapper-image">
					<Image
						className="product-image"
						src={product.thumbnail}
						width={100}
						height={100}
						alt=""
					/>
				</div>

				<p className="product-title">{product.title}</p>
				<div className="product-price">{product.price}</div>
				<span className="product-color">{product.brand}</span>
				<span className="product-rating">{product.raiting}</span>
			</Link>
			<button onClick={handledDelete}>{t("delete")}</button>
		</div>
	);
};
