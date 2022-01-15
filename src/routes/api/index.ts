import { markdownToHtml } from '$lib/markdownToHtml';
import { fetchResource } from './lib/fetchResource';

type PageDataContent = {
	id: number,
	title: string,
	content: string
}

type PageData = {
	id?: number,
	published_at?: string,
	created_at?: string,
	updated_at?: string,
	pageContent?: PageDataContent,
	SEO?: string | null,
	menus?: Array<Menu>
}

export async function get(): any {
	const result = {
		menus: [],
		content: '',
		title: '',
		jwt: ''
	};

	const homePageUrl = `${process.env.API_URL}/home-page`;

	try {
		const data: PageData = await fetchResource(homePageUrl);

		console.log(`index page data`, data);
		const parsedContent = await markdownToHtml(data.pageContent.content);
		result.content = parsedContent.value;
		result.title = data.pageContent.title;
		result.menus = data.menus;
	} catch (err) {
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
