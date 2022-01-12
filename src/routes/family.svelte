<script>
	let soundOn = false;

	import { goto } from '$app/navigation';

	function nav(person) {
		soundOn = true;
		const audio = document.getElementById('player');
		audio.volume = 0.2;
		audio.play();
		goto(person);
	}
</script>

<div class="wrapper">
	<div class="nash" on:click={() => nav('nash')} />
	<div class="liv" on:click={() => nav('liv')} />
	<div class="josh" on:click={() => nav('josh')} />
	<div class="cade" on:click={() => nav('cade')} />
	<div class="mavis" on:click={() => nav('mavis')} />
	<div class="carson" on:click={() => nav('carson')} />
	<div class="dad" on:click={() => nav('dad')} />
	<div class="mom" on:click={() => nav('mom')} />
</div>

<style lang="scss">
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		height: calc(100% - 50px);
		margin-top: 50px;

		div {
			background-color: var(--darkOrange);
			background-size: cover;
			background-position: center;
			background-blend-mode: soft-light;
			&:hover {
				background-blend-mode: multiply;
			}
		}
		.nash {
			background-image: url('/nash.jpg');
		}
		.liv {
			background-image: url('/liv.jpg');
		}
		.josh {
			background-image: url('/josh.jpg');
		}
		.cade {
			background-image: url('/cade.jpg');
		}
		.carson {
			background-image: url('/carson.jpg');
		}
		.mavis {
			background-image: url('/mavis.jpg');
		}
		.dad {
			background-image: url('/dad.jpg');
		}
		.mom {
			background-image: url('/mom.jpg');
		}
	}
</style>
