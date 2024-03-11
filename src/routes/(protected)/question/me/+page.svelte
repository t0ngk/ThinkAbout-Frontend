<script>
	import Icon from '@iconify/svelte';
	import Button from '$lib/Components/Goback.svelte';
	import { goto } from '$app/navigation';

	/** @type {import('./$types').PageData} */
	export let data
	const questions = data.questions;
	console.log(questions);
</script>

<div class="absolute">
	<Button />
</div>
<main class="flex min-h-dvh w-full flex-col items-center justify-start gap-4 p-8 md:pt-0 font-propmt">
	<h1 class="text-xl font-semibold">Your Questions</h1>
	<p class="my-4 w-full text-lg font-medium">Questions</p>
	<div class="grid w-full grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
		{#each questions as question}
			<button
				class="flex items-center justify-between rounded-lg bg-neutral-100 p-4 transition active:bg-neutral-200 md:hover:bg-slate-200 md:active:bg-slate-300"
				on:click={() => goto(`/question/${question.id}/result`)}
			>
				<p>{question.question}</p>
				<Icon icon="material-symbols:edit-square-outline" class="text-2xl" />
			</button>
		{/each}
	</div>
</main>
