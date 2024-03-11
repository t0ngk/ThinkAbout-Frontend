<script>
// @ts-nocheck

	import Icon from '@iconify/svelte';
	import Choices from '$lib/Components/Choices.svelte';

	let choices = ['Creadit/Debit Card', 'Paypal', 'True Wallet', 'Prompt Pay'];
</script>

<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 font-propmt">
	<div class="flex w-full flex-row items-center justify-between md:w-1/2">
		<h1 class="text-3xl font-semibold">Premium Plan</h1>
		<a href="/premium" class="border-b-2 text-[#A5A5A5] hover:text-black">
			<p>Change Plan</p>
		</a>
	</div>
	<div
		class="flex w-full flex-col justify-start rounded-2xl bg-primary-700 px-6 py-6 font-normal text-white md:w-1/4"
	>
		<h1 class="text-xl">ThinkAbout Premium</h1>
		<p class="text-sm">฿99.00 / month</p>
		<div class="my-4 space-y-3">
			<div class="flex flex-row">
				<Icon icon="icon-park-solid:correct" width="24" height="24" style="color: white" />
				<p class="ml-2">Unlimited access to all features</p>
			</div>
			<div class="flex flex-row">
				<Icon icon="icon-park-solid:correct" width="24" height="24" style="color: white" />
				<p class="ml-2">Unlimited access to all features</p>
			</div>
			<div class="flex flex-row">
				<Icon icon="icon-park-solid:correct" width="24" height="24" style="color: white" />
				<p class="ml-2">Unlimited access to all features</p>
			</div>
		</div>
	</div>
	<div class="w-full rounded-2xl px-6 py-8 font-normal text-black transition md:w-1/2">
		<Choices options={choices} />
	</div>
	<button
		class="block w-[60%] self-center rounded-3xl bg-primary-400 py-3 font-semibold text-white transition active:bg-primary-500 md:w-[10%] md:hover:bg-primary-500 md:active:bg-primary-600"
		>Next</button
	>
</main>
