// Initialisation des champs date et promotions
$(".form__element--promotions, .form__element--rooms").chosen({max_selected_options: 99, no_results_text: "Aucun résultat..."});
$(".form__element--date--precise").datetimepicker({
	lang:'fr',
	format:'d.m.Y',
	timepicker:false,
});

$(".form__element--date--debut, .form__element--date--fin").datetimepicker({
	lang:'fr',
	format:'d.m.Y H:i',
	allowTimes:[
	  '7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00',
	  '13:30','14:00','14:30', '15:00','15:30', '16:00','16:30', '17:00','17:30','18:00','18:30',
	]
});

// Apparition des champs date et périodes selon les checkboxs associés
var dateChecked = function () {
	if ($(".form__element--date").is(':checked')) {
		$(".form__element--date--precise").fadeIn();
		$(".form__element--periode").prop('checked', false);
		periodeChecked();
	}
	else {
		$(".form__element--date--precise").css('display','none');
	}
}

var periodeChecked = function () {
	if ($(".form__element--periode").is(':checked')) {
		$(".form__element--date--debut, .form__element--date--fin").fadeIn();
		$(".form__element--date").prop('checked', false);
		dateChecked();
	}
	else {
		$(".form__element--date--debut, .form__element--date--fin").css('display','none');
	}
}

$(".form__element--periode").change(function(){
	periodeChecked();
});

$(".form__element--date").change(function(){
	dateChecked();
});
