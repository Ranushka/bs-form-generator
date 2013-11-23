$(function() {
		$( "#catalog" ).accordion();
		
		$( "#newForm" ).sortable();


		// 
		// to make form elements dragable
		// 
		$( "#formElements .form-group" ).draggable({
			appendTo: "body",
			helper: "clone"
		});





		// 
		// make dropable to create new form with fields
		// 
		$( "#newForm" ).droppable(
		{
			activeClass: "new_Form_home_hilight",
			hoverClass: "ui-state-hover",
			accept: "#formElements .form-group, #help_text .help-block",

			// accept: ":not(#help_text>span)",
			drop: function( event, ui ) 
			{
				// $item = $clone();]
				var new_form_id = get_li_count();


				var collapse_trigure = 'data-toggle="collapse" data-parent="#accordion" href="#collapse'+new_form_id+'" ';
        		var editingConent = '<div id="collapse'+new_form_id+'" class="panel-collapse collapse"> collapse'+new_form_id+' Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus.</div>'


				$( '<li '+collapse_trigure+'></li>' ).append(ui.draggable.clone(),editingConent).appendTo( this );


			},


		});// end fun droppable




			function get_li_count () {
				var n = $( "#newForm li" ).size();
				return n;
			}



		//TO DO---------------------------------------------------
			$("#newForm .form-group>div").droppable(
			{ 
			    accept: '#help_text>span',
			    greedy: true,
			    drop: function(e, ui)
			    { 
			     alert("drop on child");
			    }
	    	});
		//TO DO---------------------------------------------------





		//
		// change form elements sizes
		// 
		$( "#change_form_element_size" ).change(function () 
			{
				var selacted_value = $( "#change_form_element_size option:selected" ).val();

				// to remove existing &input-sm &input-lg class
				$('.form-control').removeClass('input-sm input-lg');

				$('.form-control').addClass(selacted_value);

		  	}).change();



		//
		// generate the html
		// 
		$('#generate_html').click(function () {
			/*
			get html content
			filter html TODO
				//remove unwanted class
				//remove unwanted elements
					disabled attr
			alert the html
			*/

			var generated_html = $('#newForm').html();
			alert(generated_html);
		})











	});// end document ready





		


