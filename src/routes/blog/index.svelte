<script context="module">
    import { fetchResource } from '$lib/fetchResource';

    const BLOG_API_URL = `${import.meta.env.VITE_API_URL}/posts`;

    export async function load({fetch}){
        const response = await fetchResource(BLOG_API_URL, fetch);

        console.log(`response`, response);

        return {
            props: {
                posts: response
            }
        }

    }
</script>

<script>
    export let posts;
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<h1>Technical Blog</h1>

I blog mostly about JavaScript, dotNET and Microsoft 365.

<ul>
    {#each posts as post}
        <li>
            <a href={`/blog/${post.id}`}>{post.title}</a>
        </li>
    {/each}
</ul>