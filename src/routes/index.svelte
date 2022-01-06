<script lang="ts" context="module">
	export const prerender = true;

	export async function load ({fetch}) {
		const res = await fetch("/api");
		const data = await res.json();
		console.log(`data`, data)

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
	const jwtKey = `${import.meta.env.VITE_JWT_STORAGE_KEY}`;

	if (browser){
		window.sessionStorage.setItem(jwtKey, jwt);
	}

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