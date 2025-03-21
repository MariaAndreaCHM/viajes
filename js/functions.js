       // Crear el mapa aquí (Asegúrate de que el código que accede al mapa esté después de cargar Leaflet)
       var map = L.map('map').setView([20, 0], 2); // Coordenadas del centro del mapa y el zoom inicial

       // Añadir la capa de OpenStreetMap
       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       }).addTo(map);

       //fotos
       var myPhotos = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-0.1276, 51.5074] // Londres
                },
                "properties": {
                    "title": "Foto de Londres",
                    "photo": "url_de_foto_londres.jpg",
                    "description": "Descripción"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.3522, 48.8566] // París
                },
                "properties": {
                    "title": "Foto de París",
                    "photo": "assets/fotos/blois.jpg",
                    "description": "Descripción"
                }
            }
        ]
    };
    
    // Agregar las fotos al mapa
    L.geoJSON(myPhotos, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<h3>" + feature.properties.title + "</h3><img src='" + feature.properties.photo + "' alt='Foto' style='width:100%;'/>");
        }
    }).addTo(map);
    