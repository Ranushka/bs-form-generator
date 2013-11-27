$(function() {



});// end document ready


validation_path = 'validation/validatr.min.js';
jquery_path = 'validation/jquery-1.10.2.min.js';

function add_validation ()
{
	// add validation min and jqury
	$('#validation_Scripts_container').append('<script src="'+jquery_path+'" type="text/javascript" charset="utf-8"></script>\n'+
												'<script src="'+validation_path+'" type="text/javascript" charset="utf-8"></script>\n')

	$('#validation_Scripts_container').append('<script>$( document ).ready(function(){$("form").validatr()})</script>\n')
}





function remove_validation ()
{
	// body...
}



// $(document).on('keydown', '.form_select', function(e)
// {
// 	$(event.target).parent().siblings().find('select').empty();
//     var lines = $(this).val().split("\n");
//     $.each(lines, function(n, elem) {
//              // console.log(n);
//     	$(event.target).parent().siblings().find('select').append('\n\t\t\t\t<option>'+elem+'</option>');
// 	});
// 	$(event.target).parent().siblings().find('select .option:last-child').after('\n\t\t\t');
// });




$(document).on('click', '.required_feld', function(e)
{
	 // $(event.target).parent().parent().siblings().find('div .set_field_id').toggleClass('required');
	 $(event.target).parent().parent().siblings().find('div .set_field_id').attr('required','');
});


