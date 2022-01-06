import { fetchResource } from "../lib/fetchResource";

export async function get({params, url, method, locals, headers}): Promise<unknown>{
		const POST_URL = `${import.meta.env.VITE_API_URL}/posts/${params.slug}`;

    const response = await fetchResource(POST_URL);

    return {
      body: {
        ...response
        
      }
    };
}