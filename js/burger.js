//var btn = document.getElementsByTagName('html')[0];

var btn = document.getElementsByClassName('icon-menu')[0];

function addClass() {
    var name, arr;
    name = "menu-open";
   arr = document.getElementsByTagName('html')[0];
   var  arrg = arr.className.split(" ");
    if (arrg.indexOf(name) == -1) {
        arr.className += " " + name;
    }

	if (arrg.indexOf(name) == 1) {
        arr.classList.remove(name);
    }
}



if (btn != null) {
	btn.addEventListener('click', function () {
		addClass();
	}, false);
}