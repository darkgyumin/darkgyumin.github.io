(function() {
	var img = document.getElementsByTagName('img');

	Object.values(img).forEach(function(img) {
		img.style.width = '100%';
	});
})();