<script>
	import { goto } from '$app/navigation';
	import { PUBLIC_API_URL } from '$env/static/public';
	import Goback from '$lib/Components/Goback.svelte';
	import { addToast } from '$lib/Components/Toast.svelte';

	const buy = async () => {
		const token = localStorage.getItem('token');
		const res = await fetch(`${PUBLIC_API_URL}/package/buy/free`, {
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
		<h1 class="text-3xl font-semibold">Free Plan</h1>
		<a href="/premium" class="border-b-2 text-[#A5A5A5] hover:text-black">
			<p>Change Plan</p>
		</a>
	</div>
	<div
		class="flex w-full flex-col justify-start rounded-2xl bg-primary-400 px-6 py-6 font-normal text-white"
	>
		<h1 class="text-xl">ThinkAbout Free</h1>
		<p class="text-sm">฿00.00 / month</p>
	</div>
	<div class="flex w-full md:justify-end">
		<button
			on:click={buy}
			class="flex w-full rounded-xl bg-primary-500 px-4 py-2 text-white transition active:bg-primary-600 md:w-auto md:hover:bg-primary-600 md:active:bg-primary-700"
			>Next</button
		>
	</div>
</main>
