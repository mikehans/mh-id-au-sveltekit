import { markdownToHtml } from '$lib/markdownToHtml';
import { fetchResource, fetchResourceAuth } from './lib/fetchResource';

type PageDataContent = {
	id: number,
	title: string,
	content: string
}

type PageContentWrapper = {
	id?: number,
	published_at?: string,
	created_at?: string,
	updated_at?: string,
	pageContent?: PageDataContent,
	SEO?: string | null,
	menus?: Array<Menu>,
	jwt?:string
}

type PageData = {
	content: PageContentWrapper
	jwt?: string
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
		const data: any = await fetchResourceAuth(homePageUrl);

		console.log(`index page data`, data);
		// const parsedContent = await markdownToHtml(data.content.pageContent.content);
		// result.content = parsedContent.value;
		result.content = "test content";
		result.title = data.content.pageContent.title;
		result.menus = data.content.menus;
		result.jwt = data.jwt;
		// result.content = "Test Home Page";
		// result.title = "TEST ME";
		// result.menus = [];
		// result.jwt = "ZXCBVNM"
	} catch (err) {
		throw new Error(err);
	}

	return {
		body: {
			content: result.content,
			title: result.title,
			menus: result.menus,
			jwt: result.jwt
		}
	};
}
