<script lang="ts">
	import type { ListItemPartial } from './listItem';
	import ListItem from "./ListItem.svelte";
	export let todos: Array<ListItemPartial> = [];
</script>

<section>
	<ul>
		{#each todos as todo}
			<ListItem {...todo} on:completeTodo />
		{/each}
	</ul>
</section>

<style>
	ul {
		width: 30vw;
		padding-left: 0;
	}
</style>