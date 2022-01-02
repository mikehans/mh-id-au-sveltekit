<script lang="ts">
	import { mainMenu } from '../stores';
	import { page } from '$app/stores';
</script>

<header>
	<nav class="container">
		<a class="site-title" href="/" alt="Go to home page">Site Title</a>
		<ul>
			{#each $mainMenu as item}
				<li class:active = {$page.url.pathname === item.slug}><a href={item.slug}>{item.label}</a></li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		background-color: #2e3141;
		color: white;
		height: 4rem;
	}
	nav{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	.site-title{
		font-size: 2rem;
		text-decoration: none;
	}

	.site-title:visited {
		color: inherit;
	}
	ul {
		padding-left: 0;
	}
	li {
		list-style: none;
		display: inline;
		padding-right: 10px; 
		font-family: 'Raleway', sans-serif;
	}

    li > a {
        text-decoration: none;  
		color: white;
    }

    li > a:hover {
		border-bottom: 2px double white;
    }

    li > a:visited {
        text-decoration: none;
    }

    .active {
        text-decoration: underline;
    }
</style>
