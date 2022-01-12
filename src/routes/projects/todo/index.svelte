<script lang="ts">
    import NewListItemForm from "./components/NewListItemForm.svelte";
    import List from './components/List.svelte';
	import type { ListItemPartial } from './components/listItem';

	let todos : Array<ListItemPartial> = [];

    function handleComplete(event) {
        todos = todos.map(t => {
            if (t.id == event.detail.id) {
                t.isCompleted = event.detail.complete
            }
            return t;
        })
    }

    function addNewTodo(event){
        const ident = crypto.randomUUID();

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
