<script lang="ts">
	import {testMe, mainMenu} from '../stores';

	console.log(`mainMenu`, $mainMenu)
</script>

<nav>
	{#each $mainMenu as item}
		<a href={item.slug}>{item.label}</a> &nbsp;&nbsp;
	{/each}
</nav>



<slot />
