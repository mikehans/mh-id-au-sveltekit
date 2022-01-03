<script lang="ts">
    export let title: string;
    export let pubDate: string;
    export let url: string;
</script>

<section>
    <h3>{title}</h3>
    <div class="pubDate">
        Published {pubDate}
    </div>
    <div>
        <a href="{url}">Read more</a>
    </div>
</section>


<style>
    section{
        border: 1px solid grey;
        border-radius: 4px;
        max-width: 350px;
        min-width: 250px;
        margin-bottom: 1rem;
        padding: 0.5rem;
    }

    h3 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .pubDate {
        font-size: 0.8rem;
    }
</style>