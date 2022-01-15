<script lang="ts" context="module">
	export const prerender = true;

	export async function load ({fetch}) {
		const res = await fetch("/api");
		const data = await res.json();

		return {
			props: {
				title: data.title,
				content: data.content,
				menus: data.menus,
				jwt: data.jwt
			}
		}
	}
</script>

<script lang="ts">
	import { mainMenu } from '../stores';
	import { browser } from "$app/env";

	export let title: string;
	export let content: string;
	export let menus = [];
	export let jwt: string;

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