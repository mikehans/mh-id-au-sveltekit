<script context="module">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const loadResult = await fetch('/api/about-me');
		const json = await loadResult.json();

		return {
			props: {
				content: json.content,
				title: json.title,
				menus: json.menus
			}
		};
	}
</script>

<script lang="ts">
	import { mainMenu } from '../stores';

	export let title: string;
	export let content: string;
	export let menus = [];
	// export const prerender = true;


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
