<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
    import NavBar from '$lib/Components/NavBar.svelte';
</script>

<div class="pt-8 px-8">
    <NavBar />
</div>
<slot />

