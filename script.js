document.addEventListener('DOMContentLoaded', function() {

	function setBodyTheme(theme) {
		document.body.setAttribute('data-theme', theme);
	}

	var sesionTheme = sessionStorage.getItem('theme');
	if (sesionTheme) {
		setBodyTheme(sesionTheme);
	}

	var switcherItems = document.getElementsByClassName('theme-switcher__item');
	for (var i = 0; i < switcherItems.length; i++) {
		switcherItems[i].addEventListener('click', function() {
			var theme = this.getAttribute('data-switcher');
			sessionStorage.setItem('theme', theme);
			setBodyTheme(theme);
		});	
	}
});