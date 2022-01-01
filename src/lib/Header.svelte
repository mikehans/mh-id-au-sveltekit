<script lang="ts">
	import { mainMenu } from '../stores';
</script>

<header>
    <nav>
        <ul>
        {#each $mainMenu as item}
           <li><a href={item.slug}>{item.label}</a> </li>
        {/each}
    </ul>
    </nav>
</header>

<style>
    ul{
        padding-left: 0;
    }
    ul > li {
        list-style: none;
        display: inline;
        padding-right: 10px;
    }
</style>