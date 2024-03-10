<script>
	import Choices from '$lib/Components/Choices.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const title = 'Who is the best?';
</script>

<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 font-propmt">
	<p>{title}</p>
	<Choices />
	<div class="flex w-full justify-center gap-2 md:justify-end">
		<button
			class="hidden w-full rounded-lg bg-neutral-100 px-4 py-2 text-neutral-500 transition-all active:bg-neutral-200 md:block md:w-auto md:hover:bg-neutral-200 md:active:bg-neutral-300"
			>Back</button
		>
		<button
			class="w-full rounded-lg bg-primary-500 px-4 py-2 text-white transition-all active:bg-primary-600 md:w-auto md:hover:bg-primary-600 md:active:bg-primary-700"
			>Submit</button
		>
	</div>
</main>
