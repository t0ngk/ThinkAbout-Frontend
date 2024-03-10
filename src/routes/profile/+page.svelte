<script>
	import Icon from '@iconify/svelte';
	import Button from '$lib/Components/Goback.svelte';
</script>

<div class="absolute">
	<Button />
</div>
<main class="flex min-h-dvh w-full flex-col items-center justify-start gap-4 p-8 font-propmt">
	<h1 class="text-2xl font-semibold">Profile</h1>
	<div class="grid grid-cols-1 justify-items-center gap-4 p-4 text-center">
		<Icon icon="teenyicons:user-circle-solid" width="110" height="110" class="text-primary-500" />
		<div>
			<p class="text-lg font-normal">Khemmathiti Wangsaptawee</p>
			<p class="font-light text-[#A5A5A5]">t0ng.k.dev@gmail.com</p>
		</div>
		<button
			class="block w-full rounded-xl bg-primary-500 py-2 text-white transition active:bg-primary-600 md:w-96 md:hover:bg-primary-600 md:active:bg-primary-700"
			>Edit Profile</button
		>
	</div>
	<div class="w-full flex flex-col md:items-center gap-2">
		<button
			class="flex flex-row items-center gap-2 rounded-lg transition-all w-full md:w-96 px-4 py-2 active:bg-neutral-100 active:text-primary-600 md:hover:bg-neutral-100 md:hover:text-primary-600 md:active:text-primary-700 md:active:bg-neutral-200"
		>
			<Icon icon="ph:question"  class="text-primary-500 text-4xl" />
			<p class="ml-2 text-lg font-normal">Your Questions</p>
		</button>
		<button
			class="flex flex-row items-center gap-2 rounded-lg transition-all w-full md:w-96 px-4 py-2 active:bg-neutral-100 active:text-primary-600 md:hover:bg-neutral-100 md:hover:text-primary-600 md:active:text-primary-700 md:active:bg-neutral-200"
		>
			<Icon icon="basil:diamond-outline"  class="text-primary-500 text-4xl" />
			<p class="ml-2 text-lg font-normal">TinkAbout Premium</p>
		</button>
		<button
			class="flex flex-row items-center gap-2 rounded-lg transition-all w-full md:w-96 px-4 py-2 active:bg-neutral-100 active:text-primary-600 md:hover:bg-neutral-100 md:hover:text-primary-600 md:active:text-primary-700 md:active:bg-neutral-200"
		>
			<Icon icon="solar:user-linear"  class="text-primary-500 text-4xl" />
			<p class="ml-2 text-lg font-normal">Profiles</p>
		</button>
		<button
			class="flex flex-row items-center gap-2 rounded-lg transition-all w-full md:w-96 px-4 py-2 bg-red-500 active:bg-red-600 md:hover:bg-red-600 md:active:bg-red-700"
		>
			<Icon icon="bitcoin-icons:exit-filled"  class="text-white text-4xl" />
			<p class="ml-2 text-lg font-normal text-white">Logout</p>
		</button>
	</div>
</main>
