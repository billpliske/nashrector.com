<script>
	let soundOn = false;

	const play = () => {
		soundOn = true;
		const audio = document.getElementById('player');
		audio.volume = 0.2;
		audio.play();
	};
</script>

<div class="wrapper" on:click={() => play()}>
	{#if !soundOn}
		<div class="logo-wrapper">click anywhere,<br />if you dare.</div>
	{/if}
	{#if soundOn}
		<div class="logo-wrapper">
			<a href="family">
				<img
					src="https://res.cloudinary.com/billpliske/image/upload/v1641665462/grandkids/nash-site/nash-spirit-logo.png"
					alt="bday logo"
				/>
				<h2 id="element">Enter</h2>
			</a>
		</div>
		<!-- <audio
			id="sound"
			autoplay
			mute="false"
			src="https://res.cloudinary.com/billpliske/video/upload/v1641684654/grandkids/nash-site/7.mp3"
		/> -->
	{/if}
</div>

<style lang="scss">
	.wrapper {
		align-content: center;
		background-image: url('https://res.cloudinary.com/billpliske/image/upload/v1641673690/grandkids/nash-site/scary-background.jpg');
		background-position: center top;
		background-size: cover;
		color: white;
		display: grid;
		/* height: 100vh; */
		height: calc(100% - 50px);
		justify-content: center;
		margin-top: 50px;
		text-align: center;
		width: 100%;
	}
	.logo-wrapper {
		margin: 0 auto;
		/* max-width: 300px; */
		text-align: center;
		width: 100%;
		img {
			width: 60%;
			max-width: 500px;
		}
		a:visited,
		a {
			color: white;
			text-decoration: none;
		}
	}

	#element {
		animation: 5s ease 0s normal forwards 1 fadein;
		color: white;
	}

	@keyframes fadein {
		0% {
			opacity: 0;
		}
		66% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
