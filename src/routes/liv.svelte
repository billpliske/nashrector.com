<script>
	import FaArrowAltCircleLeft from 'svelte-icons/fa/FaArrowAltCircleLeft.svelte';
</script>

<div class="wrapper">
	<a href="family"><FaArrowAltCircleLeft /></a>
</div>

<style lang="scss">
	.wrapper {
		margin-top: 50px;
		height: calc(100% - 50px);
		display: grid;
		justify-content: center;
		align-content: center;
		background-image: url('https://res.cloudinary.com/billpliske/image/upload/v1641779122/grandkids/nash-site/liv-scary.jpg');
		background-size: cover;
		background-position: center top;
		a {
			position: absolute;
			bottom: 10px;
			width: 70px;
			height: 70px;
			color: white;
			opacity: 0.4;
			left: 0;
			right: 0;
			margin: 0 auto;
		}
	}
</style>
