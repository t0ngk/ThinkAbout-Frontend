<script>
	import { goto } from '$app/navigation';
	import userStore from '$lib/stores/userStore';
	import Icon from '@iconify/svelte';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';

	const {
		elements: { trigger, menu },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
		loop: true,
		closeOnItemClick: true,
	});

	const logout = async () => {
		localStorage.removeItem('token');
		goto('/login');
	}
</script>

<div
	class="mb-4 hidden w-full items-center justify-between border-b border-primary-500 pb-4 pt-8 px-8 text-primary-500 md:flex"
>
	<button class="text-2xl font-semibold" on:click={() => goto('/')}>ThinkAbout</button>
	<div class="flex gap-4 text-sm">
		<button class="transition duration-75 hover:text-primary-600 active:text-primary-700"
		on:click={() => goto('/')}
			>Questions</button
		>
		<button class="transition duration-75 hover:text-primary-600 active:text-primary-700"
		on:click={() => goto('/premium')}
			>ThinkAbout Premium</button
		>
	</div>
	<div class="relative">
		<button class="flex items-center gap-2" use:melt={$trigger}>
			<Icon class="text-4xl" icon="healthicons:ui-user-profile" />
			{$userStore?.name || 'Unknow'}
		</button>
		{#if $open}
			<div
				class="absolute right-0 z-40 flex w-44 flex-col gap-2 rounded-md border bg-white p-2 shadow-lg"
				use:melt={$menu}
				transition:fly={{ duration: 150, y: -10 }}
			>
				<button
					class="flex items-center rounded-lg px-4 py-2 gap-2 text-start transition hover:bg-neutral-100 active:bg-neutral-200"
					on:click={() => goto('/profile/edit')}
				>
					<Icon icon="solar:user-linear" class="text-lg" />
					Edit Profile
				</button>
				<button
					class="flex items-center rounded-lg px-4 py-2 gap-2 text-start transition hover:bg-neutral-100 active:bg-neutral-200"
					on:click={() => goto('/question/me')}
				>
					<Icon icon="ph:question" class="text-lg" />
					My Questions
				</button>
				<button
					class="flex items-center rounded-lg bg-red-500 px-4 py-2 gap-2 text-start text-white transition active:bg-red-700 hover:bg-red-600"
					on:click={logout}
				>
					<Icon icon="bitcoin-icons:exit-filled" class="text-lg text-white" />
					Log out
				</button>
			</div>
		{/if}
	</div>
</div>
