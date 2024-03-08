<script>
	import { createSelect, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	let className = '';
	export { className as class };

	const genders = ['Male', 'Female', 'LGBTQ+', 'Prefer not to say'];

	const {
		elements: { trigger, menu, option, label },
		states: { selectedLabel, open },
		helpers: { isSelected }
	} = createSelect({
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			sameWidth: true
		}
	});
</script>

<div class={twMerge('flex flex-col gap-1', className)}>
	<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
	<button
		class="group/input relative' cursor-text rounded-xl bg-neutral-100 px-3 py-1 text-start text-neutral-500 outline outline-transparent transition focus-within:outline-primary-500"
		use:melt={$trigger}
		aria-label="Food"
	>
		<label
			class="m-0 block cursor-text select-none text-sm font-light text-neutral-300 transition group-focus-within/input:text-primary-500"
			use:melt={$label}>Favorite Flavor</label
		>
		{$selectedLabel || 'Select Gender'}
	</button>
	{#if $open}
		<div
			class=" z-10 flex max-h-[300px] flex-col
    space-y-2 overflow-y-auto rounded-lg border bg-neutral-100
    p-1 shadow-lg focus:!ring-0"
			use:melt={$menu}
			transition:fade={{ duration: 150 }}
		>
			{#each genders as gender}
				<div
					class={`rounded-lg p-2 md:p-1 text-neutral-500 transition hover:text-white active:bg-primary-600 md:hover:bg-primary-600 md:active:bg-primary-700 ${$isSelected(gender) ? 'bg-primary-500 text-white' : ''}`}
					use:melt={$option({ value: gender, label: gender })}
				>
					{gender}
				</div>
			{/each}
		</div>
	{/if}
</div>
