<script>
	import Icon from '@iconify/svelte';

    export let percentage = 0;
</script>



<main class="font flex flex-col items-center justify-center gap-10 p-8">
    <Icon class="text-9xl text-primary-500" icon="mingcute:firework-line"></Icon>
	<div class="text-center space-y-5">
		<h1 class="text-4xl font-bold text-neutral-700 ">Thanks for your answer!</h1>
        <h3 class="font-light gap-20">
            Your are {percentage.toFixed(2)}% answered this answer.
        </h3>
	</div>
</main>
