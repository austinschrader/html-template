$(document).ready(function () {
	$('#formOne').submit(function (event) {
		const firstNameInput = $('input#first-name').val();
		const middleNameInput = $('input#middle-name').val();
		const lastNameInput = $('input#last-name').val();

		$('.first-name-output').text(firstNameInput);
		$('.middle-name-output').text(middleNameInput);
		$('.last-name-output').text(lastNameInput);

		$('#letter').show();

		event.preventDefault();
	});
});
