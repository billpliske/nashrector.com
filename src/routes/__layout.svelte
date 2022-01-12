<script>
	import Title from '$lib/header.svelte';
	import '../styles/global.scss';
	import { onMount } from 'svelte';

	const audioSources = [
		'https://res.cloudinary.com/billpliske/video/upload/v1641684654/grandkids/nash-site/1.mp3',
		'https://res.cloudinary.com/billpliske/video/upload/v1641684654/grandkids/nash-site/2.mp3',
		'https://res.cloudinary.com/billpliske/video/upload/v1641684654/grandkids/nash-site/3.mp3',
		'https://res.cloudinary.com/billpliske/video/upload/v1641684654/grandkids/nash-site/4.mp3',
		'https://res.cloudinary.com/billpliske/video/upload/v1641684654/grandkids/nash-site/5.mp3',
		'https://res.cloudinary.com/billpliske/video/upload/v1641684654/grandkids/nash-site/6.mp3',
		'https://res.cloudinary.com/billpliske/video/upload/v1641684654/grandkids/nash-site/7.mp3'
	];

	onMount(() => {
		document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
		function setDocHeight() {
			document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
		}

		window.addEventListener('resize', function () {
			setDocHeight();
		});
		window.addEventListener('orientationchange', function () {
			setDocHeight();
		});

		setDocHeight();

		const player = document.getElementById('player');
		function playAudio() {
			let audioSource = audioSources[Math.floor(Math.random() * audioSources.length)];
			player.src = audioSource;
		}
		player.addEventListener('ended', (event) => {});
		playAudio();
	});
</script>

<div class="outer-wrapper">
	<header>
		<Title />
	</header>
	<audio id="player" />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	header {
		background-color: #33383d;
		display: grid;
		grid-gap: 20px;
		grid-template-columns: 50px 1fr 50px;
		height: 50px;
		position: fixed;
		top: 0;
		width: 100%;
	}
	.outer-wrapper {
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
		width: 100vw;
	}
	main {
		height: 100%;
		width: 100%;
	}
</style>
