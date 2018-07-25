ymaps.ready(init);
var myMap, myGeoObject, myRectangle;

function init () {
    myMap = new ymaps.Map('map', {
        center: [55.9, 37.41],
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
    });

    myRectangle = new ymaps.Rectangle([
        [55.875, 37.38],
        [55.915, 37.456]
    ], {

    }, {
        fillColor: '#7df9ff33',
        fillOpacity: 0.5,
        strokeColor: '#0000FF',
        strokeOpacity: 0.5,
        strokeWidth: 2,
        borderRadius: 6
    });

    myMap.geoObjects
        .add(myRectangle)
        .add(myGeoObject);
}
