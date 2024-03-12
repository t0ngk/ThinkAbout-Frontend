<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import Choices from '$lib/Components/Choices.svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import Goback from '$lib/Components/Goback.svelte';
	import { addToast } from '$lib/Components/Toast.svelte';

	let choices = ['Creadit/Debit Card', 'Paypal', 'True Wallet', 'Prompt Pay'];
	const buy = async () => {
		const token = localStorage.getItem('token');
		const res = await fetch(`${PUBLIC_API_URL}/package/buy/premium`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		});
		const data = await res.json();
		if (res.ok) {
			console.log(data);
			window.location.href = '/';
		} else {
			console.log(data);
			addToast({
				data: {
					message: data.message,
					type: 'error'
				}
			});
		}
	};
</script>

<Goback />
<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 md:pt-0 font-propmt">
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
			on:click={buy}
			class="flex w-full rounded-xl bg-primary-500 px-4 py-2 text-white transition active:bg-primary-600 md:w-auto md:hover:bg-primary-600 md:active:bg-primary-700"
			>Next</button
		>
	</div>
</main>
