<script>
	import { goto } from '$app/navigation';
	import DobPicker from '$lib/Components/DobPicker.svelte';
	import GenderSelection from '$lib/Components/GenderSelection.svelte';
	import Input from '$lib/Components/Input.svelte';
	import { addToast } from '$lib/Components/Toast.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let name = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let gender = '';
	let dob = '';

	$: console.log({
		name,
		email,
		password,
		confirmPassword,
		gender,
		dob
	});

	const register = async () => {
		const response = await fetch('http://localhost:3000/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				password,
				confirmPassword,
				gender,
				dateOfBirth: dob
			})
		});
		const data = await response.json();
		if (response.ok) {
			localStorage.setItem('token', data.token);
			goto('/');
		} else {
			addToast({
				data: {
					message: data.message,
					type: 'error'
				}
			});
		}
	};
</script>

<main class="flex min-h-dvh flex-col items-center justify-center gap-10 p-8 font-propmt">
	<div class="text-center">
		<h3 class="font-light">Welcome to</h3>
		<h1 class="text-4xl font-bold text-primary-500">ThinkAbout</h1>
	</div>
	<div class="flex w-full flex-col items-center space-y-5">
		<Input class="block w-full md:w-96" label="Name" bind:value={name} icon="solar:user-linear" />
		<Input
			class="block w-full md:w-96"
			label="Email"
			bind:value={email}
			icon="clarity:email-line"
		/>
		<Input
			class="block w-full md:w-96"
			label="Password"
			icon="f7:lock"
			bind:value={password}
			type="password"
		/>
		<Input
			class="block w-full md:w-96"
			label="Confirm Password"
			icon="f7:lock"
			bind:value={confirmPassword}
			type="password"
		/>
		<GenderSelection
			class="w-full md:w-96"
			onChange={(value) => {
				gender = value;
			}}
		/>
		<DobPicker
			onChange={(value) => {
				dob = value;
			}}
			class="w-full md:w-96"
		/>
	</div>
	<div class="w-full space-y-2 md:w-auto">
		<button
		on:click={register}
			class="block w-full rounded-xl bg-primary-500 py-2 text-white transition active:bg-primary-600 md:w-96 md:hover:bg-primary-600 md:active:bg-primary-700"
			>Sign up</button
		>
		<div class="text-center text-sm">
			<p class="text-neutral-300">
				Already have an account? <span
					><button
						class="text-primary-500 transition active:text-primary-600 md:hover:text-primary-600 md:active:text-primary-700"
						on:click={() => {
							goto('/login');
						}}>Login</button
					></span
				>
			</p>
		</div>
	</div>
</main>
