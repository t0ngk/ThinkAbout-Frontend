<script>
	import Button from '$lib/Components/Goback.svelte';
    import Icon from "@iconify/svelte";
    import Input from '$lib/Components/Input.svelte';
    import DobPicker from '$lib/Components/DobPicker.svelte';
	import GenderSelection from '$lib/Components/GenderSelection.svelte';
</script>

<div class="absolute">
	<Button/>
</div>
<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 font-propmt">
	<h1 class="text-2xl font-semibold ">Edit Profile</h1>
	<div class="flex w-full justify-center gap-2">
		<Icon icon="teenyicons:user-circle-solid" width="110" height="110"  class="text-primary-500" />
	</div>
    <div class="self-start md:self-center my-4 w-full md:w-1/2">
        <p class="font-propmt text-lg mb-4">Your Information</p>
        <Input class="w-full mb-4" label="Name" icon="solar:user-linear" />
        <Input class="w-full mb-4" label="Email" icon="clarity:email-line"/>
        <Input class="w-full mb-4" label="Phone" icon="mdi:phone" />
        <GenderSelection class="w-full mb-4" />
		<DobPicker class="w-full mb-4" />
    </div>
    <button class="rounded-3xl bg-gradient-to-l from-primary-600 to-primary-300 px-4 py-4 text-white transition-all active:bg-primary-700 md:w-[20%] w-1/2 md:hover:bg-primary-700 md:active:bg-primary-800">Save</button>
</main>
