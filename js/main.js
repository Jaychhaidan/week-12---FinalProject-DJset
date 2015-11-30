
//left TABLE
$(function() {
	$('.tableone').draggable();
});

//right TABLE
$(function() {
	$('.tabletwo').draggable();
});
//crossfader
$(function() {
	$('.crossfader').draggable({ axis: 'y'});

});

//leftbpm
$(function() {
	$('.switch').draggable({ axis: 'y', containment: "parent"});
});
//rightbpm
$(function() {
	$('.switch').draggable({ axis: 'y', containment: "parent"});

});