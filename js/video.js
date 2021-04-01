var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var slider = document.getElementById("slider");
	var volume = document.getElementById("volume");
	volume.innerHTML = slider.value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - video.playbackRate*0.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + video.playbackRate*0.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.duration);
	video.curentTime = video.curentTime + 15;
	if (video.currentTime < video.duration) {
		console.log("New location " + video.currentTime);
	}
	else {
		video.currentTime = 0
		console.log("Going back to beginning");
		console.log("New location " + video.currentTime);
		video.play();
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (video.muted) {
		console.log("Video is muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		console.log("Video is unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	var slider = document.getElementById("slider");
	var volume = document.getElementById("volume");
	volume.innerHTML = slider.value;
	
	slider.oninput = function() {
  	volume.innerHTML = this.value + "%";
	}
	video.volume = volume.innerHTML/100;
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});