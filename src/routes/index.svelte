<script lang="ts" context="module">
	export const prerender = true;

	export async function load ({fetch}) {
		const res = await fetch("/api");
		const data = await res.json();

		return {
			props: {
				title: data.title,
				content: data.content,
				menus: data.menus
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