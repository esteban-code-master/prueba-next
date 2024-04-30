import { ControllerProduct } from "@/components/controllerProduct";
import { environment } from "@/settings/environment";

export const getData = async () => {
	const response = await fetch(`${environment.api}/products`);
	const data = await response.json();

	return data;
};

export default async function Home() {
	const data = await getData();

	return <main>{<ControllerProduct products={data.products} />}</main>;
}
