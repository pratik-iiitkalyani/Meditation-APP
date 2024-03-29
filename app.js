const app = () => {
	const song = document.querySelector('.song')
	const play = document.querySelector('.play')
	const outline = document.querySelector('.moving-outline circle')
	const video = document.querySelector('.vid-container video')

	// select all the song
	const sound = document.querySelectorAll('.sound-picker button')

	// time display
	const timeDisplay = document.querySelector('.time-display')
	// time select
	const timeSelect = document.querySelectorAll('.time-select button')
	// get the length of outline
	const outlineLength = outline.getTotalLength();
	
	// duration
	let fakeDuration = 600;
	outline.style.strokeDasharray = outlineLength;
	outline.style.strokeDashoffset = outlineLength;


	// select diffirent sound
	sound.forEach(sound=>{
		sound.addEventListener('click', function(){
			song.src = this.getAttribute('data-sounds')
			video.src = this.getAttribute('data-video')
			playing(song)
		})
	})
	//play sound
	play.addEventListener('click', ()=>{
		playing(song);
	}) 

	// select sound
	timeSelect.forEach(option=>{
		option.addEventListener('click', function(){
			fakeDuration = this.getAttribute('data-time');
			timeDisplay.textContent = `${Math.floor(fakeDuration / 60)} : ${Math.floor(fakeDuration % 60)}`
		})
	})

	// function to stop and play the sound
	const playing = song =>{
		if(song.paused){
			song.play();
			video.play();
			play.src = './svg/pause.svg';
		}else{
			song.pause();
			video.pause();
			play.src = './svg/play.svg';
		}
	}

	// animate the circle
	song.ontimeupdate = () =>{
		let currentTime = song.currentTime;
		let elapsed = fakeDuration-currentTime;
		let second = Math.floor(elapsed%60);
		let minute = Math.floor(elapsed / 60);

		// animate the circle
		let progress = outlineLength-(currentTime/fakeDuration)*outlineLength;
		outline.style.strokeDashoffset = progress;

		// animate the text
		timeDisplay.textContent = `${minute}:${second}`;

		if(currentTime >= fakeDuration){
			song.pause();
			song.currentTime = 0;
			play.src = './svg/play.svg'
			video.pause();
		}

	}
}

app();