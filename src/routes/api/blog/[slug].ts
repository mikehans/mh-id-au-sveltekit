import { fetchResource } from "../lib/fetchResource";

export async function get({params}): Promise<unknown>{
		const POST_URL = `${process.env.API_URL}/posts/${params.slug}`;

    const response: any = await fetchResource(POST_URL);
    // console.log(`get a post response`, response)

    return {
      body: {
        ...response
        
      }
    };
}