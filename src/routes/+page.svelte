<script>
	import Icon from '@iconify/svelte';
	import NavBar from '$lib/Components/NavBar.svelte';

	let questions = [
		{
			title: 'Is dog cute?'
		},
		{
			title: 'Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'
		}
	];

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<main class="flex min-h-dvh flex-col items-center justify-start p-8 font-propmt">
	<NavBar />
	<div class="w-full space-y-2">
		<p class="text-start text-xl">Questions</p>
		<div class="grid w-full grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
			{#each questions as question}
				<button class="w-full truncate rounded-lg bg-neutral-100 p-4 text-start shadow">
					{question.title}
				</button>
			{/each}
		</div>
	</div>
</main>

<button
	class="fixed bottom-4 right-4 aspect-square rounded-full bg-primary-500 p-4 text-white shadow-lg active:bg-primary-600 md:hidden md:hover:bg-primary-600 md:active:bg-primary-700"
>
	<Icon icon="akar-icons:plus" class="text-2xl" />
</button>
