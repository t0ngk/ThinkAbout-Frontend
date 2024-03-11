<script>
	import Icon from '@iconify/svelte';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';

	const {
		elements: { trigger, menu },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
		loop: true,
		closeOnItemClick: true,
	});
</script>

<div
	class="mb-4 hidden w-full items-center justify-between border-b border-primary-500 pb-4 text-primary-500 md:flex"
>
	<button class="text-2xl font-semibold">ThinkAbout</button>
	<div class="flex gap-4 text-sm">
		<button class="transition duration-75 hover:text-primary-600 active:text-primary-700"
			>Questions</button
		>
		<button class="transition duration-75 hover:text-primary-600 active:text-primary-700"
			>ThinkAbout Premium</button
		>
	</div>
	<div class="relative">
		<button class="flex items-center gap-2" use:melt={$trigger}>
			<Icon class="text-4xl" icon="healthicons:ui-user-profile" />
			Username
		</button>
		{#if $open}
			<div
				class="absolute right-0 z-40 flex w-44 flex-col gap-2 rounded-md border bg-white p-2 shadow-lg"
				use:melt={$menu}
				transition:fly={{ duration: 150, y: -10 }}
			>
				<button
					class="flex items-center rounded-lg px-4 py-2 text-start transition hover:bg-neutral-100 active:bg-neutral-200"
				>
					<Icon icon="solar:user-linear" class="text-lg" />
					Profile
				</button>
				<button
					class="flex items-center rounded-lg bg-red-500 px-4 py-2 text-start text-white transition active:bg-red-700 hover:bg-red-600"
				>
					<Icon icon="bitcoin-icons:exit-filled" class="text-lg text-white" />
					Log out
				</button>
			</div>
		{/if}
	</div>
</div>
