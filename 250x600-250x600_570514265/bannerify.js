(function () {
	function onImagesLoaded(container, event) {
		var images = container.getElementsByTagName("img");
		var loaded = images.length;
		for (var i = 0; i < images.length; i++) {
			if (images[i].complete) {
				loaded--;
			}
			else {
				images[i].addEventListener("load", function() {
					loaded--;
					if (loaded == 0) {
						event();
					}
				});
			}
			if (loaded == 0) {
				event();
			}
		}
	}
	
	onImagesLoaded(document.getElementById("banner1_061585661"), function() {
		var elements = document.getElementById("banner1_061585661").getElementsByClassName('js-bnfy');
		for (var i=0; i < elements.length; i++) {
			elements[i].style.display = 'block';
		}
		
		setInterval(function () {
			replayAnimations();
		}, 8000);
		
		function replayAnimations() {
			var banner = document.getElementById("banner1_061585661");
			var children = banner.childNodes;
			for (var i = 0; i < children.length; i++) {
				var cloned = children[i].cloneNode(true);
				banner.replaceChild(cloned, children[i]);
			}
		}
	});})();