<script>
    import { twMerge } from 'tailwind-merge';
	import Icon from '@iconify/svelte';
</script>



<main class="font flex min-h-dvh flex-col items-center justify-center gap-10 p-8">
    <Icon class="text-9xl text-primary-500" icon="mingcute:firework-line"></Icon>
	<div class="text-center space-y-5">
		<h1 class="text-4xl font-bold text-neutral-700 ">Thanks for your answer!</h1>
        <h3 class="font-light gap-20">Let's see what orther think</h3>
	</div>

    <div class="text-center">
        <button
        class="block w-full rounded-xl bg-primary-500 py-2 text-white transition active:bg-primary-600 md:w-96 md:hover:bg-primary-600 md:active:bg-primary-700"
        >RESULT</button>
    </div>
</main>
