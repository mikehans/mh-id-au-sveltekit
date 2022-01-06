import { fetchResource } from "../lib/fetchResource";

export async function get (){
	const BLOG_API_URL = `${import.meta.env.VITE_API_URL}/posts`;

    let response;

    try {
		response = await fetchResource(BLOG_API_URL);
		console.log(`endpoint get response`, response)
	} catch (err){
		throw new Error(err);
	}

    return {
		body: {
				posts: response.json,
				jwt: response.jwt
		}
	};
}