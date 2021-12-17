<script context="module">
	import { fetchResource } from '../fetchResource';
	import { markdownToHtml } from '../markdownToHtml';

	let loading = false;
	let todos = '';

	let loadResult;

	// let pageTitle = 'Not set';
	/** @type {import('@sveltejs/kit').Load} */
	const aboutMeResourceUrl = `${import.meta.env.VITE_API_URL}/about-me`;

	console.log(`aboutMeResourceUrl`, aboutMeResourceUrl);

	export async function load({fetch, page, session, stuff}){
		loadResult = await fetchResource(aboutMeResourceUrl, fetch);
		const parsedContent = await markdownToHtml(loadResult.pageContent.content);

		return {
			props: {
				content: parsedContent,
				title: loadResult.pageContent.title,
				menus: loadResult.menus
			}
		}
	}

</script>

<script>
	import { mainMenu } from '../stores';

	export let title;
	export let content;
	export let menus = [];

	let siteTitle = `Mike Hansford | ${title}`;

	const main = menus.filter(m => m.menuName === 'main');

	mainMenu.set(main[0].menu.items);
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

{@html content}
