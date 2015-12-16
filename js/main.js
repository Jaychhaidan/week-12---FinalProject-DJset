
var track1 = document.getElementById('track1');
var playButtonl = document.getElementById('playpause');
var muteButton = document.getElementById('minus');

//information tags
var duration = document.getElementById('fullduration');
var currentTime = document.getElementById('currentTime');

playButtonl.addEventListener('click',playOrPause,false);
// muteButton.addEventListener('click', muteOrUnmute, false);


function playOrPause () {
	if(!track1.paused && !track1.ended)  {
		track1.pause();
	}
	else{
		track1.play();
	}
}

function muteOrUnmute () {
	if(track1.muted == true) {
		track1.muted = false;
	}
	else{
		track1.muted = true;
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

//beatpad top
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

//beatpad bottom
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

$('.beatpad').on('click', function() {

$(".button1l").addClass("pressed")

});

// function initAudio(element){
// 	var song = element.attr('song');
//     var title = element.text();
//     var cover = element.attr('cover');
//     var artist = element.attr('artist');

// 	//Create a New Audio Object
// 	audio = new Audio('media/' + song);
	
// 	if(!audio.currentTime){
// 		$('#duration').html('0.00');
// 	}

// 	$('#audio-player .title').text(title);
//     $('#audio-player .artist').text(artist);
	
// 	//Insert Cover Image
// 	$('img.cover').attr('src','images/covers/' + cover);
	
// 	$('#playlist li').removeClass('active');
//     element.addClass('active');
// }

// //play buttons (hooked up)
// $('.playpause').click(function(){
// 	console.log('works');
// 	audio.play();
// 	$('#duration').fadeIn(400);
// 	showDuration();
// });

// function showDuration(){
// 	$(audio).bind('timeupdate', function(){
// 		//Get hours and minutes
// 		var s = parseInt(audio.currentTime % 60);
// 		var m = parseInt((audio.currentTime / 60) % 60);
// 		//Add 0 if seconds less than 10
// 		if (s < 10) {
// 			s = '0' + s;
// 		}
// 		$('#duration').html(m + '.' + s);	
// 		var value = 0;
// 		if (audio.currentTime > 0) {
// 			value = Math.floor((100 / audio.duration) * audio.currentTime);
// 		}
// 		$('#progress').css('width',value+'%');
// 	});
// }




