<script lang="ts">
	// import Header from '$components/Header.svelte';
	import Header from '$lib/Header.svelte';
	import "../styles.scss";
</script>

<Header />

<div class="container">
	<main>
		<slot />
	</main>
</div>

