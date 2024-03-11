<script>
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
</script>

<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 font-propmt">
	<div class="pt-10">
		<div class="flex flex-col items-center justify-center gap-y-2">
			<Icon icon="basil:diamond-outline" class="text-9xl text-primary-500" />
			<h1 class="text-3xl font-semibold">Premium Plan</h1>
		</div>
	</div>
	<div class="grid w-full grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
		<div class="w-full flex flex-col justify-between rounded-2xl bg-primary-400 p-6 font-normal text-white transition">
			<div>
				<h1 class="text-xl">ThinkAbout Free</h1>
				<p class="text-sm">Free</p>
			</div>
			<button
				on:click={() => {
					goto('/premium/free');
				}}
				class="block w-full self-center rounded-3xl bg-white py-3 text-black transition active:bg-neutral-100 md:hover:bg-neutral-100 md:active:bg-neutral-200"
				>Use Free Plan</button
			>
		</div>
		<div
			class="flex w-full flex-col justify-start rounded-2xl bg-primary-700 p-6 font-normal text-white"
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
			<button
				on:click={() => {
					goto('/premium/plan');
				}}
				class="block w-full self-center rounded-3xl bg-white py-3 text-black transition active:bg-neutral-100 md:hover:bg-neutral-100 md:active:bg-neutral-200"
				>Get Started</button
			>
		</div>
	</div>
</main>
