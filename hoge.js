function init() {
	document.getElementById('hoge2_content').display = 'none';
	document.getElementById('hoge1').addEventListener('click', linkClick, false);
	document.getElementById('hoge2').addEventListener('click', linkClick, false);
	window.addEventListener('popstate', function(e) {
		swapUrl(location.pathname);
	}, false);
}

function linkClick(e) {
	e.preventDefault();
	swapUrl(this.href);
	history.pushState(null, null, this.href);
}

function swapUrl(url) {
	if(url.indexOf('hoge2') >= 0) {
		document.getElementById('hoge1_content').style.display = 'none';
		document.getElementById('hoge2_content').style.display = 'block';
	} else {
		document.getElementById('hoge1_content').style.display = 'block';
		document.getElementById('hoge2_content').style.display = 'none';
	}
}
