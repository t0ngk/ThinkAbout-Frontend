<script>
	import { goto } from '$app/navigation';
    import Icon from '@iconify/svelte';
</script>


<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 font-propmt">
    <div class="pt-10">
        <div class="flex flex-col justify-center gap-y-2 items-center">
            <Icon icon="basil:diamond-outline"  class="text-primary-500 text-9xl" />
            <h1 class="text-3xl font-semibold ">Premium Plan</h1>
        </div>
    </div>
    <div class="rounded-2xl bg-primary-400 px-6 py-8 w-full md:w-1/4 text-white font-normal transition">
        <h1 class="text-xl">ThinkAbout Free</h1>
        <p class="text-sm">Free</p>
    </div>
    <div class="rounded-2xl flex flex-col justify-start bg-primary-700 px-6 py-6 w-full md:w-1/4 text-white font-normal">
        <h1 class="text-xl">ThinkAbout Premium</h1>
        <p class="text-sm">฿99.00 / month</p>
        <div class="my-4 space-y-3">
            <div class="flex flex-row">
                <Icon icon="icon-park-solid:correct" width="24" height="24"  style="color: white" />
                <p class="ml-2">Unlimited access to all features</p>
            </div>
            <div class="flex flex-row">
                <Icon icon="icon-park-solid:correct" width="24" height="24"  style="color: white" />
                <p class="ml-2">Unlimited access to all features</p>
            </div>
            <div class="flex flex-row">
                <Icon icon="icon-park-solid:correct" width="24" height="24"  style="color: white" />
                <p class="ml-2">Unlimited access to all features</p>
            </div>
        </div>
        <button on:click={() => {
            goto("/premium/plan")
        }} class="block w-full md:w-[50%] rounded-3xl self-center bg-white py-3 text-black font-semibold  transition active:bg-primary-400 md:hover:bg-primary-400 md:active:bg-primary-500">Get Started</button>
    </div>
</main>