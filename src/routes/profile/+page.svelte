<script>
    import Icon from "@iconify/svelte";
    import Button from '$lib/Components/Goback.svelte';
</script>

<div class="absolute">
	<Button/>
</div>
<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 font-propmt">
	<h1 class="text-2xl font-semibold">Profile</h1>
    <div class="text-center p-4 grid grid-cols-1 gap-4 justify-items-center">
        <Icon icon="teenyicons:user-circle-solid" width="110" height="110"  class="text-primary-500" />
        <div>
            <p class="text-lg font-normal">Khemmathiti Wangsaptawee</p>
            <p class="font-light text-[#A5A5A5]">t0ng.k.dev@gmail.com</p>
        </div>
        <button class="w-full rounded-3xl bg-gradient-to-l from-primary-600 to-primary-300 px-4 py-4 text-white transition-all active:bg-primary-700 md:w-auto md:hover:bg-primary-700 md:active:bg-primary-800">Edit Profile</button>
    </div>
    <div class="self-start md:self-center">
        <button class="flex flex-row items-center gap-2 my-3 transition-all active:text-primary-600 md:w-auto md:hover:text-primary-600 md:active:text-primary-700">
            <Icon icon="ph:question" width="35" height="35" class="text-primary-500" />
            <p class="text-lg font-normal ml-2">Your Questions</p>
        </button>
        <button class="flex flex-row items-center gap-2 my-3 transition-all active:text-primary-600 md:w-auto md:hover:text-primary-600 md:active:text-primary-700">
            <Icon icon="lets-icons:dimond-alt-light" width="35" height="35" class="text-primary-500" />
            <p class="text-lg font-normal ml-2">TinkAbout Premium</p>
        </button>
        <button class="flex flex-row items-center gap-2 my-3 transition-all active:text-primary-600 md:w-auto md:hover:text-primary-600 md:active:text-primary-700">
            <Icon icon="iconamoon:profile" width="35" height="35"  class="text-primary-500" />
            <p class="text-lg font-normal ml-2">Profiles</p>
        </button>
        <button class="flex flex-row items-center gap-2 my-3 transition-all active:text-primary-600 md:w-auto md:hover:text-primary-600 md:active:text-primary-700">
            <Icon icon="ri:logout-box-r-line" width="35" height="35"  class="text-primary-500"/>
            <p class="text-lg font-normal ml-2">Logout</p>
        </button>
    </div>
</main>