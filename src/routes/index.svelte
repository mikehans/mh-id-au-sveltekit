<script lang="ts" context="module">
	export async function load ({fetch}) {
		const res = await fetch("/api");
		const data = await res.json();
		console.log(`home page data`, data)

		return {
			props: {
				// title: data.title,
				// content: data.content,
				// menus: data.menus,
				// jwt: data.jwt,
				data
			}
		}
	}
</script>

<script lang="ts">
	import { mainMenu } from '../stores';
	import { browser } from "$app/env";

	let title: string;
	let content: string;
	let menus = [];
	let jwt: string;
	export let data;
	console.log(`data`, data)
	export const prerender = true;

	let siteTitle = `Mike Hansford | ${title}`;

	const main = menus.filter(m => m.menuName === 'main');

	if (main.length > 0){
		mainMenu.set(main[0].menu.items);
	}

	if(browser){
		sessionStorage.setItem(`${import.meta.env.VITE_JWT_STORAGE_KEY}`, jwt);
	}
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

{@html content}