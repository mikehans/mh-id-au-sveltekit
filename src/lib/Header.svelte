<script lang="ts">
	import { mainMenu } from '../stores';

	console.log(`mainMenu`, $mainMenu);
</script>

<header>
    <nav>
        {#each $mainMenu as item}
            <a href={item.slug}>{item.label}</a> &nbsp;&nbsp;
        {/each}
    </nav>
</header>
