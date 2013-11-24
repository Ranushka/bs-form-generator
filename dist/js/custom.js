$(function() {
		$( "#catalog" ).accordion();
		
		


		// 
		// to make form elements dragable
		// 
		$( "#formElements .form_group_ui" ).draggable({
			appendTo: "body",
			helper: "clone"
		});

		

// $('#form_display').button('toggle')



		// 
		// make dropable to create new form with fields
		// 
		$( "#newForm" ).droppable(
		{
			activeClass: "new_Form_home_hilight",
			hoverClass: "ui-state-hover",
			accept: "#formElements .form_group_ui",

			// accept: ":not(#help_text>span)",
			drop: function( event, ui ) 
			{
				// $item = $clone();]
				var new_form_id = get_li_count();

				var editing_conent_options = get_editing_conent_options(ui.draggable.closest('article').attr( "data-inputtype" ));

				$(ui.draggable.closest('article').attr(
					{
						'data-toggle'	: 'collapse',
						'data-parent'	: '#newForm',
						'href'			: '#collapse'+new_form_id
					} )
				)

				// var collapse_trigure = 'data-toggle="collapse" data-parent="#accordion" href="#collapse'+new_form_id+'" ';
        		var editingConent = '<div id="collapse'+new_form_id+'" class="panel-collapse collapse editing_panal"> '+editing_conent_options+' </div>'

				$( '<li class="panel panel-default"></li>' ).append(ui.draggable.clone(),editingConent).appendTo( this );

				// make_drop_to_dragable();
				$( "#newForm" ).sortable();


			}

		});// end fun droppable

		// 
		// make dropabl elements to dragable
		// 
		function make_drop_to_dragable () {
			$( "#newForm li.panel" ).draggable({
				appendTo: "body",
				helper: "clone"
			});
		}


		// 
		// make dropable to delete form fields & elements
		// 
		$( "#form_delete_element" ).droppable(
		{
			activeClass: "form_delete_element_hilight",
			hoverClass: "ui-state-hover",
			accept: "#newForm li.panel",

			// accept: ":not(#help_text>span)",
			drop: function( event, ui ) 
			{
				$( ui.draggable ).remove();
			}

		});// end fun droppable form_delete_element



		function get_li_count ()
		{
			var n = $( "#newForm li" ).size();
			return n;
		}



		//TO DO---------------------------------------------------
			$("#newForm .form_group_ui>div").droppable(
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
			return get_label_edit() +
			 get_placeholder_edit() + 
			 get_feld_name_edit() + 
			 get_feld_id_edit()+
			 get_help_text();
		}


		//
		// set_password_type_editing_conent_options
		// 
		function set_password_type_editing_conent_options () {
			return get_label_edit() +
			get_placeholder_edit() +
			get_feld_name_edit() +
			get_feld_id_edit()+
			get_help_text();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_textarea_type_editing_conent_options () {
			return get_label_edit() +
			get_placeholder_edit() +
			get_feld_name_edit() +
			get_feld_id_edit()+
			get_help_text();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_radio_type_editing_conent_options () {
			return get_label_edit() +
			get_radio_edit() +
			get_feld_name_edit()+
			get_help_text();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_checkbox_type_editing_conent_options () {
			return get_label_edit() +
			get_checkbox_edit() +
			get_feld_name_edit()+
			get_help_text();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_select_type_editing_conent_options () {
			return get_label_edit() +
			get_select_edit() +
			get_feld_name_edit()+
			get_help_text();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_select_multiple_type_editing_conent_options () {
			return get_label_edit() +
			get_select_edit() +
			get_feld_name_edit()+
			get_help_text();
		}


		//
		// set_textarea_type_editing_conent_options
		// 
		function set_static_type_editing_conent_options () {
			return get_label_edit() +
			get_placeholder_edit()+
			get_help_text();
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

		function get_checkbox_edit () {
			return '<textarea class="form-control form_checkbox" rows="3"></textarea>';
		}

		function get_select_edit () {
			return '<textarea class="form-control form_select" rows="3"></textarea>';
		}

		function get_help_text () {
			return '<input type="text" class="form-control help_text" placeholder="Help info text for user">';
		}




		//
		// change form elements sizes
		// 
		$( '#change_form_element_size' ).change(function () 
			{
				var selacted_value = $( '#change_form_element_size option:selected' ).val();

				// to remove existing &input-sm &input-lg class
				$('#newForm .form-control').removeClass('input-sm input-lg');

				$('#newForm .form-control').addClass(selacted_value);

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

			// $('#temp_form').html($('#newForm').html());
			$('#temp_form').empty();

			$('<form class="form-horizontal" role="form"></form>').append($('#newForm').html()).appendTo('#temp_form')

			$('#temp_form .editing_panal').remove();

			// to remove all <li>
			$('#temp_form li').contents().unwrap();

			// to remove class
			$('#temp_form .ui-draggable').removeClass('ui-draggable')
			$('#temp_form .form_group_ui').removeClass('form_group_ui')

			// to remove Attributs
			$('#temp_form article').removeAttr('data-inputtype')
			$('#temp_form article').removeAttr('data-toggle')
			$('#temp_form article').removeAttr('data-parent')
			$('#temp_form article').removeAttr('href')


			

			var generated_html = $('#temp_form').html();

			$('#output_html .modal-body>pre').text(generated_html);
			$('#temp_form').empty();
			prettyPrint();
			$('#output_html').modal('show');
			// alert(generated_html);
		})











	});// end document ready





		


		function make_line_by () {
			var col_xs_sm_md_lg = 'col-xs-1 col-xs-2 col-xs-3 col-xs-4 col-xs-5 col-xs-6 col-xs-7 col-xs-8 col-xs-9 col-xs-10 col-xs-11 col-xs-12 col-sm-1 col-sm-2 col-sm-3 col-sm-4 col-sm-5 col-sm-6 col-sm-7 col-sm-8 col-sm-9 col-sm-10 col-sm-11 col-sm-12 col-md-1 col-md-2 col-md-3 col-md-4 col-md-5 col-md-6 col-md-7 col-md-8 col-md-9 col-md-10 col-md-11 col-md-12 col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12'
			$('#newForm').find('[class*="col-"]').removeClass(col_xs_sm_md_lg);
			$('#newForm').find('.form-group').removeClass('form-group');
		}


		function set_label_size () {

			$('#newForm').find('.control-label').addClass(label_size)
		}


		$( '#set_label_size' ).change(function () 
			{
				var col_xs = 'col-xs-1 col-xs-2 col-xs-3 col-xs-4 col-xs-5 col-xs-6 col-xs-7 col-xs-8 col-xs-9 col-xs-10 col-xs-11 col-xs-12'
				var selacted_label_size = $( '#set_label_size option:selected' ).val();
				// to automaticaly assign the feld size
				var selacted_feld_size = 12 - $( '#set_label_size option:selected' ).val().substr(7);

				$('#newForm .control-label').removeClass(col_xs);
				$('#newForm .control-label').addClass(selacted_label_size);
				$('#newForm .control-label').siblings('div').removeClass(col_xs);
				$('#newForm .control-label').siblings('div').addClass('col-xs-'+selacted_feld_size);

		  	}).change();



