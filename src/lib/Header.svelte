<script lang="ts">
	import { mainMenu } from '../stores';
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			{#each $mainMenu as item}
				<li class:active = {$page.url.pathname === item.slug}><a href={item.slug}>{item.label}</a></li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	ul {
		padding-left: 0;
	}
	li {
		list-style: none;
		display: inline;
		padding-right: 10px; 
	}

    li > a {
        text-decoration: none;  
    }

    li > a:hover {
        background-color: bisque;
    }

    li > a:visited {
        text-decoration: none;
    }

    .active {
        text-decoration: underline;
    }
</style>
