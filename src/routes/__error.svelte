<svelte:head>
    <title>Page not found</title>
</svelte:head>

<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<h1>Oh the shame!</h1>
<h2>{title}</h2>