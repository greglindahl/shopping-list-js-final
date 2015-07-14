$(document).ready(function(){

// use enter to add list items
	$('#add-item').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});	

//add list items
	$('#add').click(function(){
		var txtbox = document.getElementById('add-item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#add-item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li class="items"></li>').appendTo('#list').html('<span class="box">   <span>' + txtval + '<span class="delete">');

		document.getElementById('items').value = '';
		};
	});

//delete list items
	$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

//cross off list items
	$('#list').on('click', 'li', function(){$(this).toggleClass('strike'); $(this).children('.items').toggleClass('checked');});

});