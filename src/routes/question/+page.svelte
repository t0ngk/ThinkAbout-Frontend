<script>
	import Icon from '@iconify/svelte';
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import Input from '$lib/Components/Input.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const {
		elements: { trigger, overlay, content, title, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	});

	let choices = [
		{
			id: 1,
			choice: 'Choice 1'
		},
		{
			id: 2,
			choice: 'Choice 2'
		},
		{
			id: 3,
			choice: 'Choice 3'
		},
		{
			id: 4,
			choice: 'Choice 4'
		}
	];

	const flipDurationMs = 300;

	/** @param {CustomEvent<{ items: any[] }>} e */
	function handleDndConsider(e) {
		choices = e.detail.items;
	}

	/** @param {CustomEvent<{ items: any[] }>} e */
	function handleDndFinalize(e) {
		choices = e.detail.items;
	}
</script>

<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 font-propmt">
	<h1 class="text-2xl font-semibold">Create Question</h1>
	<h1 class="w-full">Question</h1>
	<textarea class="w-full rounded-lg bg-neutral-100 p-4 text-neutral-500" cols="30" rows="3"
	></textarea>
	<h1 class="w-full">Choices</h1>
	<div
		class="h-96 w-full space-y-4 overflow-y-auto p-4 rounded-lg transition-all bg-neutral-100"
		use:dndzone={{ items: choices, flipDurationMs , dropTargetClasses: ['bg-neutral-200'] ,dropTargetStyle: {outline: '0px solid transparent' }}}
		on:consider={handleDndConsider}
		on:finalize={handleDndFinalize}
	>
		{#each choices as choice, index (choice.id)}
			<div class="w-full focus:outline-none focus:shadow-lg rounded-lg" animate:flip={{ duration: flipDurationMs }}>
				<p class="text-primary-500">Choice {index + 1}</p>
				<div class="flex w-full items-center rounded-lg bg-primary-200 pe-1">
					<Icon icon="basil:move-solid" class="ml-4 text-2xl text-neutral-500" />
					<input
						type="text"
						class="h-full w-full rounded-lg bg-inherit p-4 text-neutral-500 placeholder:text-neutral-400 focus:outline-none focus:ring-0"
						placeholder="Enter choice here"
						bind:value={choice.choice}
					/>
					<button
						class="flex aspect-square h-10 items-center justify-center rounded-lg transition active:bg-primary-400 md:hover:bg-primary-400 md:active:bg-primary-500"
					>
						<Icon icon="ph:trash-light" class="text-xl" />
					</button>
				</div>
			</div>
		{/each}
	</div>
	<button
		class="flex w-full items-center rounded-lg bg-primary-200 p-4 text-primary-500 transition active:bg-primary-400 active:text-white md:hover:bg-primary-400 md:hover:text-white md:active:bg-primary-500"
		use:melt={$trigger}
	>
		<Icon icon="ph:plus" class="text-2xl" />
		<p class="ml-2 font-normal">Add Choice</p>
	</button>
	<div class="flex w-full justify-end">
		<button
			class="block w-full rounded-xl bg-primary-500 px-4 py-2 text-white transition active:bg-primary-600 md:w-auto md:hover:bg-primary-600 md:active:bg-primary-700"
			>Create</button
		>
	</div>
</main>

<div class="" use:melt={$portalled}>
	{#if $open}
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
			transition:fade={{ duration: 150 }}
		/>
		<div
			class="fixed left-[50%] top-[50%] z-50 flex max-h-[85vh]
              w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col
              gap-3 rounded-xl bg-white p-6 shadow-lg"
			use:melt={$content}
		>
			<h2 use:melt={$title} class="m-0 text-lg font-medium text-black">Create Choice</h2>

			<Input label="Title" class="w-full" value="" />
			<div class="mt-6 flex justify-end gap-4">
				<button
					use:melt={$close}
					class="inline-flex h-8 items-center justify-center rounded-lg
                      bg-neutral-100 px-4 font-medium leading-none text-neutral-500 transition hover:bg-neutral-200 active:bg-neutral-300"
				>
					Cancel
				</button>
				<button
					class="inline-flex h-8 items-center justify-center rounded-lg
                      bg-primary-500 px-4 font-medium leading-none text-white transition hover:bg-primary-600 active:bg-primary-700"
				>
					Add
				</button>
			</div>
		</div>
	{/if}
</div>
