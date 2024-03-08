<script>
	import { twMerge } from 'tailwind-merge';
	import Icon from '@iconify/svelte';

	export let label = '';
	export let value = '';
	export let icon = '';
	export let placeholder = '';
	let className = '';

	/** @type {HTMLInputElement} */
	let inputElement;

	export let type = 'text';

	const INPUT_CLASS =
		'w-full bg-inherit text-neutral-500 caret-primary-500 outline-0 transition selection:bg-primary-500 selection:text-white focus:outline-none focus:ring-0 placeholder:text-neutral-200';

	export { className as class };
</script>

<button
	class={twMerge(
		'group/input cursor-text rounded-xl bg-neutral-100 px-3 py-1 text-start outline outline-transparent transition focus-within:outline-primary-500 relative',
		className
	)}
	on:click={() => inputElement.focus()}
>
	<label
		for=""
		class="m-0 block cursor-text text-sm font-light text-neutral-300 transition group-focus-within/input:text-primary-500 select-none"
		>{label}</label
	>
	{#if type === 'password'}
		<input type="password" bind:value bind:this={inputElement} class={INPUT_CLASS} placeholder={placeholder} />
	{:else}
		<input type="text" bind:value bind:this={inputElement} class={INPUT_CLASS} placeholder={placeholder} />
	{/if}
	{#if icon}
		<div class="absolute text-lg right-3 top-1/2 transform -translate-y-1/2 text-neutral-300 transition group-focus-within/input:text-primary-500">
			<Icon icon={icon} />
		</div>
	{/if}
	
</button>
