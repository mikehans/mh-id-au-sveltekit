<script context="module">
	import { fetchResource } from '$lib/fetchResource';

	const BLOG_API_URL = `${import.meta.env.VITE_API_URL}/posts`;

	export async function load({ fetch }) {
		const response = await fetchResource(BLOG_API_URL, fetch);

		console.log(`response`, response);

		return {
			props: {
				posts: response
			}
		};
	}
</script>

<script>
	import Card from '$lib/Card.svelte';

	export let posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<article>
	<h1>Technical Blog</h1>

	I blog mostly about JavaScript, dotNET and Microsoft 365.

	<ul>
		{#each posts as post}
			<li>
				<Card
					title={post.title}
					pubDate={new Date(post.published_at).toLocaleDateString()}
					url={`/blog/${post.id}`}
				/>
			</li>
		{/each}
	</ul>
</article>

<style>
    ul {
        padding-left: 0;
        display: flex;
        flex-direction: row; 
        flex-wrap: wrap;
    }
    li {
        list-style: none;
        padding-right: 0.5rem;
    }
</style>
