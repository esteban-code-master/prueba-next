"use client";
import { ListProduct } from "@/components/listProduct";
import { Product } from "@/components/listProduct/product.interface";
import { environment } from "@/settings/environment";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
	const [product, setProduct] = useState<Product>();
	const params = useParams();

	useEffect(() => {
		const fetching = async () => {
			const response = await fetch(
				`${environment.api}/products/${params.id}`
			);
			const productApi = await response.json();
			setProduct(productApi);

			console.log(productApi, params.id);
		};

		fetching();
	}, []);

	return <>{product && <ListProduct product={product} />}</>;
};

export default Page;
