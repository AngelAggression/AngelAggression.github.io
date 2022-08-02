L2Dwidget.init({
    "model": {
        "jsonPath": "https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json",
        "scale": 0.8
    },
    "display": {
        "position": "left",
        "width": 275,
        "height": 400,
        "hOffset": -20,
        "vOffset": -10,
    },
    "mobile": {
        "show": false,
        "scale": 0.5
    },
    "name": {
        canvas: 'live2dcanvas',
        div: 'live2d-widget',
    },
    "react": {
        opacity: 1,
    },
});