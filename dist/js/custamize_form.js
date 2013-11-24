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



/*
$(document).on('keyup', '.form_radio', function() {
  // $(this).parent().siblings().find('input').attr('placeholder', $(this).val())
  // var line = Math.floor((eventData.offsetY + scrollPosition) / lineHeight);
  	// console.log($(this).val().split("\n"))
// <label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">Option one</label>
// <label><input type="radio">Option one</label>
  	// $(this).val().split("\n").each($.find('.radio').append('<label><input type="radio">Option one</label>'));
  	
  	// var new_checkbox_n_value = $(this).val().split("\n");
  	// $.each(new_checkbox_n_value,function () {
  	// 	console.log(new_checkbox_n_value)
  	// 	$(this).find('.radio').append('<label><input type="radio">Option one</label>')
  	// })

             console.log($(this).parent().siblings().find('.radio').html());
             // $(this).parent().siblings().find('.radio').empty();

	var lines = $(this).val().split("\n");
    $.each(lines, function(n, elem) {
             // console.log(n);
    	$(event.target).parent().siblings().find('.radio').append('<label><input type="radio">'+elem+'</label>')

	});
});
*/


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




	});// end document ready




	
// }