<script>
    import { PUBLIC_API_URL } from '$env/static/public';
	import Button from '$lib/Components/Goback.svelte';
	import Icon from '@iconify/svelte';
	import Input from '$lib/Components/Input.svelte';
	import GenderSelection from '$lib/Components/GenderSelection.svelte';
	import userStore from '$lib/stores/userStore.js';

	let name = $userStore?.name;
	let email = $userStore?.email;
	let gender;
	$: if (gender) {
		gender?.set({
			value: $userStore?.Gender,
			label: $userStore?.Gender,
			disabled: false
		});
	}

	const updateProfile = async () => {
        const token = localStorage.getItem('token');
		const data = {
			name,
			email,
			Gender: $gender?.value
		};
        const res = await fetch(`${PUBLIC_API_URL}/auth/me`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        const resData = await res.json();
        if (res.ok) {
            console.log(resData);
            window.location.reload();
        }
	};
</script>

<Button />
<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 md:pt-0 font-propmt">
	<h1 class="text-2xl font-semibold">Edit Profile</h1>
	<div class="flex w-full justify-center gap-2">
		<Icon icon="teenyicons:user-circle-solid" class="text-9xl text-primary-500" />
	</div>
	<div class="flex w-full flex-col items-center gap-4">
		<p class="mb-4 font-propmt text-lg">Your Information</p>
		<Input class="w-full md:w-96" label="Name" bind:value={name} icon="solar:user-linear" />
		<Input class="w-full md:w-96" label="Email" bind:value={email} icon="clarity:email-line" />
		<GenderSelection bind:selected={gender} class="w-full md:w-96" />
	</div>
	<button
        on:click={updateProfile}
		class="block w-full rounded-xl bg-primary-500 py-2 text-white transition active:bg-primary-600 md:w-96 md:hover:bg-primary-600 md:active:bg-primary-700"
		>Save</button
	>
</main>
