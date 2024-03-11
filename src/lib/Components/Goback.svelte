<script>
	import Icon from '@iconify/svelte';
</script>

<button
	on:click={() => window.history.back()}
	class="absolute left-4 top-4 rounded-full p-4 transition active:bg-neutral-100 active:text-primary-700 md:hidden"
>
	<Icon icon="ion:chevron-back-outline" class="text-2xl" />
</button>
