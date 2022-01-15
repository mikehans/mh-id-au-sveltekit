import { markdownToHtml } from '$lib/markdownToHtml';
import { fetchResource, fetchResourceAuth } from "../lib/fetchResource";

export async function get(): Promise<unknown> {
	const result = {
		menus: [],
		content: '',
		title: '',
		jwt: ''
	}

	const aboutMeUrl = `${process.env.API_URL}/about-me`;

	try {
		const data = await fetchResourceAuth(aboutMeUrl);
		console.log(`data`, data)
		const parsedContent = await markdownToHtml(data.pageContent.content);
		result.content = parsedContent.value;
		result.title = data.pageContent.title;
		result.menus = data.menus;
		result.jwt = data.jwt;
	} catch (err){
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
