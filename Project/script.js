window.addEventListener('DOMContentLoaded', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var xmlDoc = this.responseXML;
            var text = xmlDoc.getElementsByTagName('text')[0].textContent;
            var sectionElement = document.getElementById('section-8');

            sectionElement.innerHTML = text;
            var aboutUsButton = document.getElementById('aboutUsButton');
            aboutUsButton.addEventListener('click', function() {
                var modal = document.getElementById('aboutUsModal');
                modal.style.display = 'block';
                initMap();
            });

            var closeButton = document.getElementsByClassName('close')[0];
            closeButton.addEventListener('click', function() {
                var modal = document.getElementById('aboutUsModal');
                modal.style.display = 'none';
                clearMap();
            });

            // Закрытие модального окна при клике вне модального окна на всех страницах
            window.addEventListener("click", function(event) {
                var modal = document.getElementById("aboutUsModal");
                if (event.target === modal) {
                    modal.style.display = "none";
                    clearMap();
                }
            });
        }
    };
    xhttp.open('GET', 'data.xml', true);
    xhttp.send();

    // Инициализация карты Яндекса
    function initMap() {
        ymaps.ready(function() {
            var map = new ymaps.Map("map", {
                center: [44.5321, 10.8646], // Координаты центра карты
                zoom: 12 // Уровень масштабирования карты
            });

            // Создание метки на штаб-квартире Ferrari
            var placemark = new ymaps.Placemark([44.5321, 10.8646], {
                hintContent: 'Штаб-квартира Ferrari'
            });

            // Добавление метки на карту
            map.geoObjects.add(placemark);
        });
    }

    // Очистка карты
    function clearMap() {
        var mapContainer = document.getElementById("map");
        mapContainer.innerHTML = "";
    }
});