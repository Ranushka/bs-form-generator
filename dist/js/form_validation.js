$(function() {


});// end document ready


validation_path = 'validation/jquery.validate.min.js';
jquery_path = 'validation/jquery.min.js';

function add_validation ()
{
	// add validation min and jqury
	$('#validation_Scripts_container').append('<script src="'+jquery_path+'" type="text/javascript" charset="utf-8"></script>\n'+
												'<script src="'+validation_path+'" type="text/javascript" charset="utf-8"></script>\n')

	$('#validation_Scripts_container').append('<script>$("#commentForm").validate();</script>')
}







function remove_validation ()
{
	// body...
}








