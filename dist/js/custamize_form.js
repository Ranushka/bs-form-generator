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

	$(event.target).parent().siblings().find('.radio_gp').empty();
    var lines = $(this).val().split("\n");
    $.each(lines, function(n, elem) {
             // console.log(n);
    	$(event.target).parent().siblings().find('.radio_gp').append('\n\t\t\t<div class="radio">'+
			'\n\t\t\t\t<label>'+
				'\n\t\t\t\t\t<input type="radio" name="optionsRadios" id="'+n+'" value="'+elem+'">'+
				'\n\t\t\t\t\t<span>'+elem+'</span>'+
			'\n\t\t\t\t</label>'+
		'\n\t\t\t</div>');
	});
	$(event.target).parent().siblings().find('.radio_gp .radio:last-child').after('\n\t\t');
		
});


$(document).on('keydown', '.form_checkbox', function(e)
{
	$(event.target).parent().siblings().find('.checkbox_gp').empty();
    var lines = $(this).val().split("\n");
    $.each(lines, function(n, elem) {
    	$(event.target).parent().siblings().find('.checkbox_gp').append('\n\t\t\t<div class="checkbox">'+
			'\n\t\t\t\t<label>'+
				'\n\t\t\t\t\t<input type="checkbox" name="optionsRadios" id="'+n+'" value="'+elem+'">'+
				'\n\t\t\t\t\t<span>'+elem+'</span>'+
			'\n\t\t\t\t</label>'+
		'\n\t\t\t</div>');
	});
	$(event.target).parent().siblings().find('.checkbox_gp .checkbox:last-child').after('\n\t\t');
});



$(document).on('keydown', '.form_select', function(e)
{
	$(event.target).parent().siblings().find('select').empty();
    var lines = $(this).val().split("\n");
    $.each(lines, function(n, elem) {
             // console.log(n);
    	$(event.target).parent().siblings().find('select').append('\n\t\t\t\t<option>'+elem+'</option>');
	});
	$(event.target).parent().siblings().find('select .option:last-child').after('\n\t\t\t');
});



$(document).on('keydown', '.help_text', function(e)
{
	$(this).parent().siblings().find('div .help-block').remove()
	$(this).parent().siblings().find('div').append('<span class="help-block">'+ $(this).val()+'</span>')
});















});// end document ready




	
// }