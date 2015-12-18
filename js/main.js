
//load track left
var track1 = document.getElementById('track1');
var playButtonl = document.getElementById('playpausel');
var muteButtonl = document.getElementById('mutel');
var cover1 = document.getElementById('cover1');

// playButtonl.addEventListener('click',playOrPausel,false);
// muteButton.addEventListener('click', muteOrUnmute, false);


function playOrPausel () {
	if(!track1.paused && !track1.ended)  {
		track1.pause(); 
	}
	else{
		track1.play();
		cover1.style.visibility = 'visible'; 
	}
}

function muteOrUnmutel () {
	if(track1.muted == true) {
		track1.muted = false;
	}
	else{
		track1.muted = true;
	}
}

//load track right
var track2 = document.getElementById('track2');
var playButtonr = document.getElementById('playpauser');
var muteButtonr = document.getElementById('muter');

//information tags
var duration = document.getElementById('fullduration');
var currentTime = document.getElementById('currentTime');

playButtonr.addEventListener('click',playOrPauser,false);
// muteButton.addEventListener('click', muteOrUnmute, false);


function playOrPauser () {
	if(!track2.paused && !track2.ended)  {
		track2.pause();
	}
	else{
		track2.play();
		cover2.style.visibility = 'visible'; 
	}
}

function muteOrUnmuter () {
	if(track2.muted == true) {
		track2.muted = false;
	}
	else{
		track2.muted = true;
	}
}

//leftbpm
$(function() {
	$('img.switch').draggable({ axis: 'y', containment: "parent"});
});

//rightbpm
$(function() {
	$('img.switch').draggable({ axis: 'y', containment: "parent"});

});

//beatpad left
var button_1 = document.getElementById('button_1l');

$('.button1l').on('click',function(e){
	button_1.load();
	button_1.play();
});

var button_2 = document.getElementById('button_2l');

$('.button2l').on('click',function(e){
	button_2.load();
	button_2.play();
});

var button_3 = document.getElementById('button_3l');

$('.button3l').on('click',function(e){
	button_3.load();
	button_3.play();
});

var button_4 = document.getElementById('button_4l');

$('.button4l').on('click',function(e){
	button_4.load();
	button_4.play();
});

//beatpad right
var button_5 = document.getElementById('button_1r');

$('.button1r').on('click',function(e){
	button_5.load();
	button_5.play();
});

var button_6 = document.getElementById('button_2r');

$('.button2r').on('click',function(e){
	button_6.load();
	button_6.play();
});

var button_7 = document.getElementById('button_3r');

$('.button3r').on('click',function(e){
	button_7.load();
	button_7.play();
});

var button_8 = document.getElementById('button_4r');

$('.button4r').on('click',function(e){
	button_8.load();
	button_8.play();
});

// $('.beatpad').on('click', function() {

// $(".button1l").addClass("pressed")

// });