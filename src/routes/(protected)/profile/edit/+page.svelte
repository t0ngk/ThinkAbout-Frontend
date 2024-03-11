<script>
	import Button from '$lib/Components/Goback.svelte';
    import Icon from "@iconify/svelte";
    import Input from '$lib/Components/Input.svelte';
    import DobPicker from '$lib/Components/DobPicker.svelte';
	import GenderSelection from '$lib/Components/GenderSelection.svelte';
</script>

<Button/>
<main class="flex min-h-dvh flex-col items-center justify-start gap-4 px-8 font-propmt">
	<h1 class="text-2xl font-semibold ">Edit Profile</h1>
	<div class="flex w-full justify-center gap-2">
		<Icon icon="teenyicons:user-circle-solid" class="text-primary-500 text-9xl" />
	</div>
    <div class="w-full flex flex-col items-center gap-4">
        <p class="font-propmt text-lg mb-4">Your Information</p>
        <Input class="w-full md:w-96" label="Name" icon="solar:user-linear" />
        <Input class="w-full md:w-96" label="Email" icon="clarity:email-line"/>
        <GenderSelection class="w-full md:w-96" />
		<DobPicker class="w-full md:w-96" />
    </div>
    <button
    class="block w-full rounded-xl bg-primary-500 py-2 text-white transition active:bg-primary-600 md:w-96 md:hover:bg-primary-600 md:active:bg-primary-700"
    >Save</button
>
</main>
