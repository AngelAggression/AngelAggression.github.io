function loadScript(url, cb, isMoudule) {
    const script = document.createElement('script');
    script.src = url;
    if (cb) script.onload = cb;
    if (isMoudule) script.type = 'module';
    script.async = true;
    document.body.appendChild(script);
}

function initLive2d() {
    if (window.screen.width > 950) {
        loadScript('/js/live2d.min.js', function () {
            loadlive2d("live2d", "/live2d/model/tia/model.json");
        }
        )
    }
}