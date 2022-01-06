import { fetchResource } from "./lib/fetchResource";

export async function get({params}){
    console.log(`params`, params)
		const POST_URL = `${import.meta.env.VITE_API_URL}/posts/${params.slug}`;

    const response = await fetchResource(POST_URL);
    console.log(`slug response`, response)

    return {
      body: {
        ...response
      }
    };
}