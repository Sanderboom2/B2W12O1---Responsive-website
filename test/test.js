var knop = document.getElementById('knop');
knop.setAttribute('onclick', 'showMenu()');

function showMenu(){
	var menu = document.getElementById('menu');
	if(menu.style.height == '0px' || menu.style.height == ''){
		menu.style.height = 'auto';
	}
	else{
		menu.style.height = '0px';
	}
}
