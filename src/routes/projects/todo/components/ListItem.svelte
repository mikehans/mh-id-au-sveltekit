<script lang="ts">
	export let id = '';
	export let task = '';
	export let isCompleted = false;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function completeTodo() {
		// 10Jan22 this event dispatches before isCompleted updates, hence I'm inverting the logic
		dispatch('completeTodo', {
			id: id,
			complete: !isCompleted
		});
	}
</script>

<li>
	<input
		type="checkbox"
		name="{id}_complete"
		id="{id}_complete"
		on:click={completeTodo}
		bind:checked={isCompleted}
	/>
	<label for="{id}_complete" class:is-completed={isCompleted}>
		{task}
	</label>
</li>

<style>
	.is-completed {
		color: grey;
        text-decoration: line-through;
	}

	li {
		list-style: none;
        padding: 1rem;
        border: 1px solid black;
        background-color: darkgrey;
        border-radius: 0.5rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
	}
</style>
