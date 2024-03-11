<script>
	import Icon from '@iconify/svelte';
	import Button from '$lib/Components/Goback.svelte';

	const questions = [
		{
			question: 'มึงว่ากุสวยไหม',
		},
		{
			question: 'แม่สวยไหม',
		},
	];
</script>

<div class="absolute">
	<Button />
</div>
<main class="flex min-h-dvh w-full flex-col items-center justify-start gap-4 p-8 font-propmt">
	<h1 class="text-xl font-semibold">Your Questions</h1>
	<p class="my-4 w-full text-lg font-medium">Questions</p>
	<div class="grid w-full grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
		{#each questions as question}			
			<button
				class="flex items-center justify-between rounded-lg bg-neutral-100 p-4 transition active:bg-neutral-200 md:hover:bg-slate-200 md:active:bg-slate-300"
			>
				<p>{question.question}</p>
				<Icon icon="material-symbols:edit-square-outline" class="text-2xl" />
			</button>
		{/each}
		<button
			class="flex w-full items-center rounded-lg bg-primary-200 p-4 text-primary-500 transition active:bg-primary-400 active:text-white md:hover:bg-primary-400 md:hover:text-white md:active:bg-primary-500"
		>
			<Icon icon="ph:plus" class="text-2xl" />
			<p class="ml-2 font-normal">Add Choice</p>
		</button>
	</div>
</main>
