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
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
        <div
            class="w-full rounded-2xl bg-primary-400 px-6 py-8 font-normal text-white transition"
        >
            <h1 class="text-xl">ThinkAbout Free</h1>
            <p class="text-sm">Free</p>
        </div>
        <div
            class="flex w-full flex-col justify-start rounded-2xl bg-primary-700 px-6 py-6 font-normal text-white"
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
                class="block w-full self-center rounded-3xl bg-white py-3 font-semibold text-black transition active:bg-primary-400 md:w-[50%] md:hover:bg-primary-400 md:active:bg-primary-500"
                >Get Started</button
            >
        </div>
    </div>
</main>
