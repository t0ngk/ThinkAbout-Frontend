<script lang="ts">
	import { createSelect, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	let className = '';
	export { className as class };

  
	export let options:string[] = [];

  export let value:String | undefined = '';

  $: value = $selected?.value

	const {
		elements: { trigger, menu, option },
		states: { selectedLabel, open, selected },
		helpers: { isSelected }
  } = createSelect<String>({
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true
		},
    defaultSelected: { value: options[0], label: options[0] }
	});
</script>

<div class={twMerge('relative flex flex-col gap-1 transition-all', className)}>
	<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
	<button
		class={`relative' cursor-pointer rounded-xl bg-neutral-200 px-2 py-1 text-start text-neutral-500 outline transition-all ${$open ? 'outline-primary-500' : 'outline-transparent'}`}
		use:melt={$trigger}
		aria-label="Year"
	>
		{$selectedLabel || 'Year'}
	</button>
	{#if $open}
		<div
			class=" z-10 flex max-h-[300px] flex-col
    space-y-2 overflow-y-auto rounded-lg border bg-neutral-100
    p-1 shadow-lg focus:!ring-0"
			use:melt={$menu}
			transition:fade={{ duration: 150 }}
		>
			{#each options as value}
				<div
					class={`cursor-pointer rounded-lg p-2 text-neutral-500 transition hover:text-white active:bg-primary-600 md:p-1 md:hover:bg-primary-600 md:active:bg-primary-700 ${$isSelected(value) ? 'bg-primary-500 text-white' : ''}`}
					use:melt={$option({ value: value, label: value })}
				>
					{value}
				</div>
			{/each}
		</div>
	{/if}
</div>
