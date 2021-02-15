<script lang="ts">
	let count: number = 0;

	const increment = () => {
		count += 1;
	};
</script>

<button class="py-4 px-8 text-red-500 bg-red-500 bg-opacity-10 rounded-full border-2 border-transparent outline-none w-48 focus:border-opacity-100"
	on:click={increment}
	>
	Clicks: {count}
</button>

<style>
	button {
		font-variant-numeric: tabular-nums;
	}

	button:focus {
		@apply border-opacity-100;
	}

	button:active {
		@apply bg-red-500 bg-opacity-20;
	}
</style>