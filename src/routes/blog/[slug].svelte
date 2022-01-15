<script context="module">
    import { markdownToHtml } from '$lib/markdownToHtml';

	export async function load({ params, fetch }) {
		const response = await fetch(`/api/blog/${params.slug}`);
		const json = await response.json();

		const parsedContent = await markdownToHtml(json.content);

		return {
			props: {
				post: json,
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
