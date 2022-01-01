<script lang="ts" context="module">
	export const prerender = true;
	import { fetchResource } from '$lib/fetchResource';
	import { markdownToHtml } from '$lib/markdownToHtml';
	
	let loadResult: PageData;

	const homePageUrl = `${import.meta.env.VITE_API_URL}/home-page`;

	export async function load({fetch}){
		loadResult = await fetchResource(homePageUrl, fetch);
		// console.log(`loadResult`, loadResult);

		const parsedContent = await markdownToHtml(loadResult.pageContent.content);
		// console.log(`parsedContent`, parsedContent);

		return {
			props: {
				menus: loadResult.menus,
				content: parsedContent.value,
				title: loadResult.pageContent.title
			}
		}
	}
</script>

<script lang="ts">
	import { mainMenu } from '../stores';

	export let title: string;
	export let content: string;
	export let menus = [];

	let siteTitle = `Mike Hansford | ${title}`;

	const main = menus.filter(m => m.menuName === 'main');

	if (main.length > 0){
		mainMenu.set(main[0].menu.items);
	}
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

{@html content}