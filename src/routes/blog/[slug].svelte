<script context="module">
	import { fetchResource } from '$lib/fetchResource';
    import { markdownToHtml } from '$lib/markdownToHtml';

	export async function load({ params, fetch }) {
		const POST_URL = `${import.meta.env.VITE_API_URL}/posts/${params.slug}`;

		const response = await fetchResource(POST_URL, fetch);

		console.log(`response`, response);

        const parsedContent = await markdownToHtml(response.content);

		return {
			props: {
				post: response,
                parsedContent
			}
		};
	}
</script>

<script>
	export let post;
    export let parsedContent;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article>
	<h1>{post.title}</h1>
	Published: {new Date(post.published_at).toLocaleDateString()} by Mike Hansford

    {@html parsedContent}
</article>
