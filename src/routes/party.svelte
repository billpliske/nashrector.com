<script>
	let soundOn = false;

	const play = () => {
		soundOn = true;
		const audio = document.getElementById('player');
		audio.volume = 0.2;
		audio.play();
	};
</script>

<div class="wrapper">
	<div class="logo-wrapper">
		<h1>Party Info</h1>
		<ul>
			<li><strong>Date:</strong> 1/29/2021</li>
			<li><strong>Time: </strong>5:30 p.m.</li>
			<li><strong>Location: </strong>Nash's Haunted House</li>
		</ul>
		<p>
			Nash requests that everyone is dressed as a different slasher or animatronic. Please reach out
			to him for his expert opinion.
		</p>
	</div>
</div>

<style lang="scss">
	.wrapper {
		align-content: center;
		background-image: url('https://res.cloudinary.com/billpliske/image/upload/v1641673690/grandkids/nash-site/haunted-house.jpg');
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
		text-align: center;
		width: 70%;
		background-color: rgba(0, 0, 0, 0.7);
		padding: 20px;

		h1 {
			color: var(--orange);
			font-size: 40px;
		}

		li {
			list-style-type: none;
			border-top: 1px solid gray;
			padding-top: 10px;
			margin-top: 10px;
		}
		p {
			font-style: italic;
			border-top: 1px solid gray;
			padding: 10px 40px;
			margin-top: 10px;
		}
		strong {
			color: #ffd289;
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
