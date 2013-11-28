$(function() {

	$('#change_form_validation').change(function () {
	    if ($(this).is(":checked"))
	    {
	      
	    	$('#change_form_validation_state').text('validation ON')
	    	
			// validation_path = 'validation/validatr.min.js';
			// jquery_path = 'validation/jquery-1.10.2.min.js';
			// $('#validation_Scripts_container').html('<script src="'+jquery_path+'" type="text/javascript" charset="utf-8"></script>\n'+
			// 											'<script src="'+validation_path+'" type="text/javascript" charset="utf-8"></script>\n'+
			// 											'<script>$( document ).ready(function(){$("form").validatr()})</script>\n')

	    } else {
	    	// $('#validation_Scripts_container').html(' ');
	    	$('#change_form_validation_state').text('validation OFF');
	    	// $('#validation_Scripts_container').html(' ');

	    	$('#commentForm').attr('novalidate','novalidate');

	    }
	}).change();


});// end document ready


//
// change form validation option
// 








// $( '#change_form_validation' ).change(function () 
// 	{
// 		var selacted_value = $( '#change_form_validation option:selected' ).val();
// 		// alert(selacted_value)
// 		switch (selacted_value)
// 		{
// 		case 'validate':
// 		  add_validation();
// 		  // alert('d')
// 		  break;
// 		case 'no_validation':
// 		  remove_validation();
// 		  break;
// 		}
//   	}).change();








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




$(document).on('change', '.required_feld', function(e)
{

	$(this).change(function () {
	    if ($(this).is(":checked"))
	    {
	       $(event.target).parent().parent().siblings().find('div .set_field_id').attr('required','required');
	    } else {
	       $(event.target).parent().parent().siblings().find('div .set_field_id').removeAttr('required');
	    }
	});


});




// $(document).on('click', '.required_feld', function(e)
// {
// 	 console.log($(event.target).parent().parent().siblings().find('div .set_field_id').attr('required'))
// 	 if($(event.target).parent().parent().siblings().find('div .set_field_id').attr('required') == "required")
// 	 {
// 	 	$(event.target).parent().parent().siblings().find('div .set_field_id').removeAttr('required');
// 	 }
// 	 	$(event.target).parent().parent().siblings().find('div .set_field_id').attr('required','');
// });


