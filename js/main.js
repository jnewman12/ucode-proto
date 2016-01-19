$(function() {
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
}); 

function affixNav() {
	if ($(window).width() > 991) {
		$('nav').affix();
	}
} 

/* test for editor 
var textarea = $('textarea[name="html"]');
var view=$('#view');
textarea.hide();
var editor = ace.edit("editor");
editor.setTheme("ace/theme/eclipse");
editor.getSession().setMode("ace/mode/html");
editor.getSession().on('change', function () {
    view.contents().find('body').html(editor.getSession().getValue());
});
*/