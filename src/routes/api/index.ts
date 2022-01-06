import { markdownToHtml } from '$lib/markdownToHtml';
import { fetchResource } from "./lib/fetchResource";

export async function get(): any {
	const result = {
		menus: [],
		content: '',
		title: ''
	}

	const homePageUrl = `${import.meta.env.VITE_API_URL}/home-page`;

	try {
		const data = await fetchResource(homePageUrl);

		console.log(`index page data`, data)
		const parsedContent = await markdownToHtml(data.pageContent.content);
		result.content = parsedContent.value;
		result.title = data.pageContent.title;
		result.menus = data.menus;
	} catch (err){
		throw new Error(err);
	}

	return {
		body: {
			content: result.content,
			title: result.title,
			menus: result.menus
		}
	};
}
