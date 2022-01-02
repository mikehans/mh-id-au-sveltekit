<script lang="ts">
	// import Header from '$components/Header.svelte';
	import Header from '$lib/Header.svelte';
</script>

<Header />

<div class="container">
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	:global {
		body {
			margin: 0;
			box-sizing: content-box;
			background-color: rgb(243, 243, 237);
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		}

		h1, h2, h3, h4, h5, h6, .site-title {
			font-family: 'Raleway', sans-serif;
			font-weight: 200;
		}
		h1, site-title {
			font-size: 2rem;
		}

		h2 {
			font-size: 1.8rem;
		}

		h3 {
			font-size: 1.5rem;
		}

		h4{
			font-size: 1.25rem;
		}

		h5{
			font-size: 1rem;
		}

		h6{
			font-size: 1rem;
		}
		.container {
			max-width: 80vw;
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media (max-width: 768px) {
		:global(.container) {
			max-width: 90vw;
		}
	}

	@media (max-width: 400px) {
		:global(.container) {
			max-width: 100vw;
		}
	}
</style>
