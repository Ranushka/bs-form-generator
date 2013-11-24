$(function() {
		



$(document).on('keyup', '.form_label', function() {
  $(this).parent().siblings().find('label.control-label').html($(this).val())
});


$(document).on('keyup', '.form_placeholder', function() {
  $(this).parent().siblings().find('input').attr('placeholder', $(this).val())
});


$(document).on('keyup', '.form_feld_name', function() {
  $(this).parent().siblings().find('input').attr('name', $(this).val())
});


$(document).on('keyup', '.form_feld_id', function() {
  $(this).parent().siblings().find('label.control-label').attr('for', $(this).val())
  $(this).parent().siblings().find('input').attr('id', $(this).val())
});




$(document).on('keydown', '.form_radio', function(e)
{

	// console.log(e.keyCode);
	// if(e.keyCode == 13)
	// {
		$(event.target).parent().siblings().find('.radio_gp').empty();
        var lines = $(this).val().split("\n");
	    $.each(lines, function(n, elem) {
	             // console.log(n);
	    	$(event.target).parent().siblings().find('.radio_gp').append('<div class="radio">'+
				'<label>'+
					'<input type="radio" name="optionsRadios" id="'+n+'" value="'+elem+'">'+
					'<span>'+elem+'</span>'+
				'</label>'+
			'</div>');
		}); 
    // }		
});


$(document).on('keydown', '.form_checkbox', function(e)
{
	$(event.target).parent().siblings().find('.checkbox_gp').empty();
    var lines = $(this).val().split("\n");
    $.each(lines, function(n, elem) {
    	$(event.target).parent().siblings().find('.checkbox_gp').append('<div class="checkbox">'+
			'<label>'+
				'<input type="checkbox" name="optionsRadios" id="'+n+'" value="'+elem+'">'+
				'<span>'+elem+'</span>'+
			'</label>'+
		'</div>');
	});	
});



$(document).on('keydown', '.form_select', function(e)
{
	$(event.target).parent().siblings().find('select').empty();
    var lines = $(this).val().split("\n");
    $.each(lines, function(n, elem) {
             // console.log(n);
    	$(event.target).parent().siblings().find('select').append('<option>'+elem+'</option>');
	});
});















});// end document ready




	
// }