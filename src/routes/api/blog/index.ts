import { fetchResource, fetchResourceAuth } from "../lib/fetchResource";
// import dotenv from 'dotenv';

// dotenv.config();

export async function get (){
	const BLOG_API_URL = `${process.env.API_URL}/posts`;

    let response;

    try {
		response = await fetchResourceAuth(BLOG_API_URL);
	} catch (err){
		throw new Error(err);
	}

    return {
		body: {
			posts: response
		}
	};
}