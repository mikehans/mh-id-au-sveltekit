<script context="module">
	const BLOG_API_URL = `${import.meta.env.VITE_API_URL}/posts`;

	export async function load({ fetch }) {
		const response = await fetch('/api/blog');
		const data = await response.json();
		console.log(`data`, data);

		return {
			props: {
				posts: data.posts,
				jwt: data.jwt
			}
		};
	}
</script>

<script>
	import Card from '$lib/Card.svelte';
	import { browser } from '$app/env';

	export let posts;
	export let jwt;
	const jwtKey = `${import.meta.env.VITE_JWT_STORAGE_KEY}`;

	if (browser) {
		sessionStorage.setItem(jwtKey, jwt);
	}
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
