/*

My Custom JS
============

Author:  Akshay Arora
Updated: January 2016
Notes:	 Part of Assignment of Bootstrap

*/

$(function() {
	$('#btnSignUp').click(function (e){
		e.preventDefault();
		$('#alertBox').slideDown();
	})
	$('a.pop').click(function(e){
		e.preventDefault();
	})
	$('a.pop').popover();
	$('[rel="tooltip"]').tooltip();
})