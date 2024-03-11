<script>
	import Icon from '@iconify/svelte';
	import userStore from '$lib/stores/userStore.js';
	import { goto } from '$app/navigation';
	/** @type {import('./$types').PageData} */
	export let data;
	const questions = data.questions;
	console.log(questions);
</script>

<main class="flex min-h-dvh flex-col items-center justify-start p-8 md:pt-0 font-propmt">
	<div class="mb-4 flex w-full items-center justify-between text-2xl text-primary-500 md:hidden">
		<p class="text-3xl font-semibold">Welcome back, {$userStore?.name || 'Unknow'}</p>
		<button on:click={() => goto('/profile')}>
			<Icon class="text-7xl" icon="healthicons:ui-user-profile" />
		</button>
	</div>
	<h1 class="my-4 hidden w-full text-start text-4xl font-bold text-primary-500 md:block">
		Welcome back, {$userStore?.name || 'Unknow'}
	</h1>
	<div class="w-full space-y-2">
		<div class="flex w-full items-center justify-between">
			<p class="text-start text-xl">Questions</p>
			<button
			on:click={() => goto('/question/')}
				class="hidden w-full rounded-xl bg-primary-500 px-4 py-2 text-white transition active:bg-primary-600 md:block md:w-auto md:hover:bg-primary-600 md:active:bg-primary-700"
				>Create</button
			>
		</div>
		<div class="grid w-full grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
			{#each questions as question}
				<button
					class="w-full truncate rounded-lg bg-neutral-100 p-4 text-start shadow transition active:bg-neutral-100 md:hover:bg-neutral-100 md:active:bg-neutral-200"
					on:click={() => goto(`/question/${question.id}`)}
				>
					{question.question}
				</button>
			{/each}
		</div>
	</div>
</main>

<button
	class="fixed bottom-4 right-4 aspect-square rounded-full bg-primary-500 p-4 text-white shadow-lg active:bg-primary-600 md:hidden md:hover:bg-primary-600 md:active:bg-primary-700"
	on:click={() => goto('/question/')}
>
	<Icon icon="akar-icons:plus" class="text-2xl" />
</button>
