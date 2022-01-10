<script lang="ts">
    import { browser } from "$app/env";
    import NewListItemForm from "./components/NewListItemForm.svelte";
    import List from './components/List.svelte';
	import type { ListItemPartial } from './components/listItem';

    const ident = browser? crypto.randomUUID() : 1;
	let todos : Array<ListItemPartial> = [{ id: ident, task: 'Initial task' }];

    function handleComplete(event) {
        todos = todos.map(t => {
            if (t.id == event.detail.id) {
                t.isCompleted = event.detail.complete
            }
            return t;
        })
    }

    function addNewTodo(event){
        const ident = browser? crypto.randomUUID() : todos.length + 1;

        todos = [...todos, {id: ident, task: event.detail.task}]
    }
</script>

<section>
	<h1>TODO project</h1>

    <NewListItemForm on:addTodo={addNewTodo} />

	<List {todos} on:completeTodo={handleComplete} />

    <!-- <div>
        {JSON.stringify(todos)}
    </div> -->
</section>
