if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
    //手机
} else{
    //电脑
    L2Dwidget.init({
        "model": {
            "jsonPath": "https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json",
            "scale": 0.8
        },
        "display": {
            "position": "left",
            "width": 275,
            "height": 400,
            "hOffset": 10,
            "vOffset": -10,
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        }
    });
}