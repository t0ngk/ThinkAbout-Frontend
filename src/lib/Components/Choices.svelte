<script>
// @ts-nocheck

	import { createRadioGroup, melt } from '@melt-ui/svelte';

	const {
		elements: { root, item, hiddenInput },
		helpers: { isChecked }
	} = createRadioGroup({
		defaultValue: 'default'
	});

	export let options = '';
	console.log(Boolean(options));
	const optionsArr = ['default', 'comfortable', 'compact'];
</script>

<div
	use:melt={$root}
	class="grid w-full grid-cols-1 gap-x-4 gap-y-2 data-[orientation=horizontal]:grid-cols-2 md:grid-cols-2"
	aria-label="View density"
>
	{#each options ? options : optionsArr as option}
		<button
			use:melt={$item(option)}
			class={`w-full rounded-lg p-4 text-start transition-all
      ${$isChecked(option) ? 'bg-primary-500 text-white' : 'bg-primary-100 active:bg-primary-500 active:text-white md:hover:bg-primary-200 md:active:bg-primary-500 '}`}
		>
			{option}
		</button>
	{/each}
	<input name="line-height" use:melt={$hiddenInput} />
</div>
