<script context="module">
	import { fetchResource } from '$lib/fetchResource';
	import { markdownToHtml } from '$lib/markdownToHtml';
	import {browser, dev} from '$app/env';

	export const hydrate = dev;
	// export const router = browser;
	export const prerender = true;

	let loadResult;

	// let pageTitle = 'Not set';
	/** @type {import('@sveltejs/kit').Load} */
	const aboutMeResourceUrl = `${import.meta.env.VITE_API_URL}/about-me`;

	console.log(`aboutMeResourceUrl`, aboutMeResourceUrl);

	export async function load({ fetch, page, session, stuff }) {
		loadResult = await fetchResource(aboutMeResourceUrl, fetch);
		const parsedContent = await markdownToHtml(loadResult.pageContent.content);

		return {
			props: {
				content: parsedContent,
				title: loadResult.pageContent.title,
				menus: loadResult.menus
			}
		};
	}
</script>

<script lang="ts">
	import { mainMenu } from '../stores';

	export let title: string;
	export let content: string;
	export let menus = [];

	let siteTitle = `Mike Hansford | ${title}`;

	const main = menus.filter((m) => m.menuName === 'main');

	if (main.length > 0) {
		mainMenu.set(main[0].menu.items);
	}
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

{@html content}
