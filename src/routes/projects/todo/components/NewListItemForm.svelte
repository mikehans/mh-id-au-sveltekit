<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	function addTodo(task) {
		dispatch('addTodo', {
			task: task
		});

		const ele =	(document.getElementById('todoItem') as HTMLInputElement);
		ele.value = '';
		ele.focus();
	}
</script>

<form action="">
	<label for="todoItem">New Item</label>
	<input type="text" id="todoItem" name="todoItem" placeholder="Create a new todo here" />
	<button on:click|preventDefault={() => addTodo(document.getElementById('todoItem').value)}>New</button>
</form>
