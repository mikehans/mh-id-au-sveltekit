<script lang="ts" context="module">
	export const prerender = true;

	// import { fetchResource } from '$lib/fetchResource';

	// import { markdownToHtml } from '../markdownToHtml';

	const projectsPageUrl = `${import.meta.env.VITE_API_URL}/projects-page`;

	// export async function load({ page, fetch }) {
	// 	const result = await fetchResource(projectsPageUrl);

    //     console.log(`Projects result`, result)

	// 	if (result.ok) {
	// 		const json = await result.json();

	// 		return {
	// 			props: {
	// 				page: result
	// 			}
	// 		};
	// 	}
	// }
</script>

<svelte:head>
	<title>Tech Projects</title>
</svelte:head>

<h1>Projects</h1>

<a href="./projects/todo">Todo project</a>