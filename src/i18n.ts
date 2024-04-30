import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./settings/navigation";


export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as any)) notFound();

	console.log(locales)
	return {
		messages: (await import(`../dictionaries/${locale}.json`)).default
	};
});
