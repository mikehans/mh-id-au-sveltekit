<script lang="ts">
	import List from './components/List.svelte';
	import type { ListItemPartial } from './components/listItem';

	let todos : Array<ListItemPartial> = [{ id: 1, task: 'Initial task' }];

	function addTodo(task) {
		const nextIdx = todos.length + 1;
		todos = [...todos, { id: nextIdx, task, isCompleted: false }];
		(<HTMLInputElement>document.getElementById('todoItem')).value = '';
		document.getElementById('todoItem').focus();
	}

    function handleComplete(event) {
        console.log(`event.detail`, event.detail)
        todos = todos.map(t => {
            if (t.id == event.detail.id) {
                t.isCompleted = event.detail.complete
            }
            return t;
        })
    }
</script>

<section>
	<h1>TODO project</h1>

	<form action="">
		<label for="todoItem">New Item</label>
		<input type="text" id="todoItem" name="todoItem" placeholder="Create a new todo here" />
		<button on:click|preventDefault={() => addTodo(document.getElementById('todoItem').value)}>
			Add
		</button>
	</form>

	<List {todos} on:completeTodo={handleComplete} />
</section>
