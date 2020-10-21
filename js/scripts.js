$(document).ready(function () {
	$('#formOne').submit(function (event) {
		const firstNameInput = $('input#first-name');
		const middleNameInput = $('input#middle-name');
		const lastNameInput = $('input#last-name');

		$('.first-name-output').text(firstNameInput);
		$('.middle-name-output').text(middleNameInput);
		$('.last-name-output').text(lastNameInput);

		$('#letter').show();

		event.preventDefault();
	});
});
