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

				var editing_conent_options = get_editing_conent_options(ui.draggable.closest('article').attr( "data-inputtype" ));

				$(ui.draggable.closest('article').attr(
					{
						'data-toggle'	: 'collapse',
						'data-parent'	: '#accordion',
						'href'			: '#collapse'+new_form_id
					} )
				)

				var collapse_trigure = 'data-toggle="collapse" data-parent="#accordion" href="#collapse'+new_form_id+'" ';
        		var editingConent = '<div id="collapse'+new_form_id+'" class="panel-collapse collapse editing_panal"> '+editing_conent_options+' </div>'

				$( '<li></li>' ).append(ui.draggable.clone(),editingConent).appendTo( this );


			},



		});// end fun droppable




			function get_li_count ()
			{
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
		// to know the content type
		// for create editing options
		// 
		function get_editing_conent_options (content_type)
		{
			var type_is,editing_conent_options;

			switch (content_type)
			{
			case 'text':
			  type_is = content_type;
			  editing_conent_options = set_text_type_editing_conent_options();
			  break;
			case 'password':
			  type_is = content_type;
			  editing_conent_options = set_password_type_editing_conent_options();
			  break;
			case 'textarea':
			  type_is = content_type;
			  editing_conent_options = set_textarea_type_editing_conent_options();
			  break;
			case 'radio':
			  type_is = content_type;
			  editing_conent_options = set_radio_type_editing_conent_options();
			  break;
			case 'checkbox':
			  type_is = content_type;
			  editing_conent_options = set_checkbox_type_editing_conent_options();
			  break;
			case 'select':
			  type_is = content_type;
			  editing_conent_options = set_select_type_editing_conent_options();
			  break;
			case 'select_multiple':
			  type_is = content_type;
			  editing_conent_options = set_select_multiple_type_editing_conent_options();
			  break;
			case 'static':
			  type_is = content_type;
			  editing_conent_options = set_static_type_editing_conent_options();
			  break;
			}


			return editing_conent_options;

			// console.log(type_is+' you got this content type')

		}

		//
		// set_text_type_editing_conent_options
		// 
		function set_text_type_editing_conent_options () {
			return get_label_edit() + get_placeholder_edit() + get_feld_name_edit() + get_feld_id_edit();
		}


		//
		// set_password_type_editing_conent_options
		// 
		function set_password_type_editing_conent_options () {
			return get_label_edit() + get_placeholder_edit();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_textarea_type_editing_conent_options () {
			return get_label_edit() + get_placeholder_edit();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_radio_type_editing_conent_options () {
			return get_label_edit() + get_radio_edit();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_checkbox_type_editing_conent_options () {
			return get_label_edit() + get_placeholder_edit();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_select_type_editing_conent_options () {
			return get_label_edit() + get_placeholder_edit();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_select_multiple_type_editing_conent_options () {
			return get_label_edit() + get_placeholder_edit();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_static_type_editing_conent_options () {
			return get_label_edit() + get_placeholder_edit();
		}




		// ------------------------------------------------------------//
		// ------------------------------------------------------------//
		// ------------------------------------------------------------//
		function get_label_edit () {
			return '<input type="text" class="form-control form_label" placeholder="Label text">';
		}

		function get_placeholder_edit () {
			return '<input type="text" class="form-control form_placeholder" placeholder="Placeholder text">';
		}

		function get_feld_name_edit () {
			return '<input type="text" class="form-control form_feld_name" placeholder="Textbox name">';
		}

		function get_feld_id_edit () {
			return '<input type="text" class="form-control form_feld_id" placeholder="Id of feld">';
		}

		function get_radio_edit () {
			return '<textarea class="form-control form_radio" rows="3"></textarea>';
		}

		function get_radio_checkbox_edit () {
			return '<label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">Option one</label>';
		}




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

			$('#temp_form').html($('#newForm').html());

			$('#temp_form .editing_panal').remove();

			// to remove all <li>
			$('#temp_form li').contents().unwrap();

			// to remove class
			$('#temp_form .ui-draggable').removeClass('ui-draggable')

			// to remove Attributs
			$('#temp_form article').removeAttr('data-inputtype')
			$('#temp_form article').removeAttr('data-toggle')
			$('#temp_form article').removeAttr('data-parent')
			$('#temp_form article').removeAttr('href')
			

			var generated_html = $('#temp_form').html();

			$('#output_html .modal-body>textarea').html(generated_html);
			$('#output_html').modal('show');
			// alert(generated_html);
		})











	});// end document ready





		


