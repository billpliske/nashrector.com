<script>
	import MdHome from 'svelte-icons/md/MdHome.svelte';
	import MdCake from 'svelte-icons/md/MdCake.svelte';
</script>

<div class="homeicon">
	<a href="/">
		<MdHome />
	</a>
</div>
<div class="title">Nash Spirit</div>
<div class="partyicon">
	<a href="party">
		<MdCake />
	</a>
</div>

<style lang="scss">
	.homeicon {
		height: 30px;
		justify-self: center;
		position: relative;
		top: 10px;
		width: 30px;
		a {
			color: var(--orange);
		}
	}
	.title {
		align-self: center;
		color: white;
		font-size: 22px;
		font-weight: 800;
		justify-self: center;
		text-transform: uppercase;
	}
	.partyicon {
		height: 30px;
		justify-self: center;
		position: relative;
		top: 10px;
		width: 30px;
		a {
			color: var(--orange);
		}
	}
</style>
