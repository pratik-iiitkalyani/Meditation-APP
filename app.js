const app = () => {
	const song = document.querySelector('.song')
	const play = document.querySelector('.play')
	const outline = document.querySelector('.moving-outline circle')
	const video = document.querySelector('vid-container video')

	// select all the song
	const sound = document.querySelectorAll('.sound-picker button')

	// time display
	const timeDisplay = document.querySelector('.time-display')

	// get the length of outline
	const outlineLength = outline.getTotalLength();
	
	// duration
	let fakeDuration = 600;
	outline.style.strokeDasharray = outlineLength;
	outline.style.strokeDashoffset = outlineLength;

	//play sound
	play.addEventListener('click', ()=>{
		// playing(song);
		song.play()
	}) 

	// function to stop and play the sound
	// const playing = song =>{
	// 	if(song.paused){
	// 		song.play();
	// 		video.play();
	// 		play.src = './svg/pause.svg';
	// 	}else{
	// 		song.pause();
	// 		video.pause();
	// 		play.src = './svg/play.svg';
	// 	}
	// }
}

app();