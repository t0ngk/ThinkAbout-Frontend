<script>
	import { Doughnut } from 'svelte-chartjs';
	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
  export let labels = [];
  export let data = [];

	let chartData = {
		labels: labels,
		datasets: [
			{
				data: data,
				backgroundColor: [
					'#b21e4b',
					'#d42a5b',
					'#e63f66',
					'#f27a93',
					'#f7aab9',
					'#fbd0d9',
					'#fde6e9'
				],
				hoverBackgroundColor: ['#951c45', '#b21e4b', '#d42a5b', '#e63f66', '#f27a93', '#f7aab9']
			}
		]
	};

	let options = {
		responsive: false
	};
</script>

{#if data.length === 0}
<div class="w-full">
	<p>No data to display</p>
</div>
{:else}
	<Doughnut data={chartData} {options} />
{/if}
