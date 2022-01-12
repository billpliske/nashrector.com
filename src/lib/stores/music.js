let soundOn = false;

export const play = () => {
	soundOn = true;
	const audio = document.getElementById('player');
	audio.volume = 0.5;
	audio.play();
};
