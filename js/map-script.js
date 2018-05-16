ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.752786, 56.001153],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([54.752656, 56.002053], {
            hintContent: 'офис Добрый картон',
            balloonContent: 'проспект Октября, 46'
        }, {
            preset: "islands#redStretchyIcon",
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './img/map/icon/map-red.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-10, -80]
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent),

    myMap.behaviors.disable('scrollZoom');
});
