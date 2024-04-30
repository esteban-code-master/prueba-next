"use client";
import { usePathname, useRouter } from "@/settings/navigation";
import "./header.css";

export const Header = () => {
	const router = useRouter();
	const pathname = usePathname();

	const changesLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const locale = event.target.value;

		router.replace(pathname, { locale });
	};

	return (
		<div className="header">
			<select onChange={changesLanguage}>
				<option value="es">Español</option>
				<option value="en">Ingles</option>
			</select>
		</div>
	);
};
