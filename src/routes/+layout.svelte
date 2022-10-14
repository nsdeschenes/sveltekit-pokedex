<script>
	import Link from '../components/Link.svelte';
	import '../app.css';
</script>

<div class="container mx-auto">
	<div class="flex flex-col items-center">
		<nav class="flex flex-row gap-8">
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
		</nav>
		<slot />
	</div>
</div>
