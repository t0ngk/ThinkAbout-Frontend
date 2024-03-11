<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import Choices from '$lib/Components/Choices.svelte';

	let choices = ['Creadit/Debit Card', 'Paypal', 'True Wallet', 'Prompt Pay'];
</script>

<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 font-propmt">
	<div class="flex w-full flex-row items-center justify-between">
		<h1 class="text-3xl font-semibold">Premium Plan</h1>
		<a href="/premium" class="border-b-2 text-[#A5A5A5] hover:text-black">
			<p>Change Plan</p>
		</a>
	</div>
	<div
		class="flex w-full flex-col justify-start rounded-2xl bg-primary-700 px-6 py-6 font-normal text-white"
	>
		<h1 class="text-xl">ThinkAbout Premium</h1>
		<p class="text-sm">฿99.00 / month</p>
		<div class="w-full">
			<div class="flex">
				<Icon icon="icon-park-solid:correct" width="24" height="24" style="color: white" />
				<p class="ml-2">Unlimited access to all features</p>
			</div>
			<div class="flex">
				<Icon icon="icon-park-solid:correct" width="24" height="24" style="color: white" />
				<p class="ml-2">Unlimited access to all features</p>
			</div>
			<div class="flex">
				<Icon icon="icon-park-solid:correct" width="24" height="24" style="color: white" />
				<p class="ml-2">Unlimited access to all features</p>
			</div>
		</div>
	</div>
	<div class="w-full rounded-2xl font-normal text-black transition">
		<Choices options={choices} />
	</div>
	<div class="flex w-full md:justify-end">
		<button
			class="flex w-full rounded-xl bg-primary-500 py-2 px-4 text-white transition active:bg-primary-600 md:w-auto md:hover:bg-primary-600 md:active:bg-primary-700"
			>Next</button
		>
	</div>
</main>
