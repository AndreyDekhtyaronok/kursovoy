window.addEventListener('DOMContentLoaded', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var xmlDoc = this.responseXML;
            var items = xmlDoc.getElementsByTagName('item');
            var carouselInner = document.getElementById('carouselInner');

            for (var i = 0; i < items.length; i++) {
                var imageElement = items[i].getElementsByTagName('image')[0];
                var imageURL = imageElement.textContent;

                var carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                if (i === 0) {
                    carouselItem.classList.add('active');
                }

                var img = document.createElement('img');
                img.className = 'd-block w-100';
                img.src = imageURL;
                img.alt = '...';

                carouselItem.appendChild(img);
                carouselInner.appendChild(carouselItem);
            }
        }
    };
    xhttp.open('GET', 'carousel.xml', true);
    xhttp.send();
});