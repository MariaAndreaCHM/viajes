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
                    "coordinates": [1.3345, 47.5861] // Londres
                },
                "properties": {
                    "title": "Blois - Rio de la Loira",
                    "photo": "assets/fotos/blois.jpg",
                    "description": " Blois-Rio de la Loira 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.2945, 48.8584] // París
                },
                "properties": {
                    "title": " París",
                    "photo": "assets/fotos/paris.jpg",
                    "description": "Paris-Torre Eiffel 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [1.3404, 47.5921] // París
                },
                "properties": {
                    "title": " Blois",
                    "photo": "assets/fotos/universite.jpg",
                    "description": "Blois-Université IUT Blois 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [1.3350, 47.5860] // París
                },
                "properties": {
                    "title": " Blois",
                    "photo": "assets/fotos/castillo.jpg",
                    "description": "Blois- Castillo Real 2022"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [1.9092, 47.8977] // París
                },
                "properties": {
                    "title": " Orleans",
                    "photo": "assets/fotos/orleans.jpg",
                    "description": "Orleans- Catedral de la Santa Cruz 2022"
                }
                
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [1.9039, 47.9022] // París
                },
                "properties": {
                    "title": " Orleans",
                    "photo": "assets/fotos/museoOrleans.jpg",
                    "description": "Orleans- Museo de bellas artes 2022"
                },
                
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [3.3586, 50.3586] // París
                },
                "properties": {
                    "title": " Valenciennes",
                    "photo": "assets/fotos/valencienne.jpg",
                    "description": "Valenciennes-2022"
                },
                
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [3.0573, 50.6292] // París
                },
                "properties": {
                    "title": " Lille",
                    "photo": "assets/fotos/lille.jpg",
                    "description": "Lille-2022"
                },
                
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [0.0542, 43.0956] // París
                },
                "properties": {
                    "title": " Lourdes",
                    "photo": "assets/fotos/lourdes.jpg",
                    "description": "Lourdes- Gruta de Lourdes 2022"
                },
                
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [1.4442, 43.6047] // París
                },
                "properties": {
                    "title": " Toulousse",
                    "photo": "assets/fotos/toulousse.jpg",
                    "description": "Toulousse- Capitolio 2022"
                },
                
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.3376, 48.8606] // París
                },
                "properties": {
                    "title": " París",
                    "photo": "assets/fotos/louvre.jpg",
                    "description": "Paris-Museo del Louvre 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.3320, 48.8330] // París
                },
                "properties": {
                    "title": " París",
                    "photo": "assets/fotos/catacumbas.jpg",
                    "description": "Paris-Catacumbas 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.3431, 48.8867] // París
                },
                "properties": {
                    "title": " París",
                    "photo": "assets/fotos/sacre.jpg",
                    "description": "Paris-Sacré Coeur 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [0.9870, 47.4118] // París
                },
                "properties": {
                    "title": " Amboise",
                    "photo": "assets/fotos/amboise.jpg",
                    "description": "Amboise-Castillo de Amboise 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [0.9840, 47.4123] // París
                },
                "properties": {
                    "title": " Amboise",
                    "photo": "assets/fotos/daVinci.jpg",
                    "description": "Amboise-Castillo de Clos-Lucé 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [0.6986, 47.3947] // París
                },
                "properties": {
                    "title": " Tours",
                    "photo": "assets/fotos/tours1.jpg",
                    "description": "Tours-Ayuntamiento 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [0.7536, 47.4017] // París
                },
                "properties": {
                    "title": " Tours",
                    "photo": "assets/fotos/tours2.jpg",
                    "description": "Tours-Lago 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-0.0721, 47.6934] // París
                },
                "properties": {
                    "title": " La fléche",
                    "photo": "assets/fotos/lac.jpg",
                    "description": "La fléche-Lac de la monnerie 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.3522, 48.8566] // París
                },
                "properties": {
                    "title": " Paris",
                    "photo": "assets/fotos/parisho.jpg",
                    "description": "Paris-Ayuntamiento 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.2499, 48.8462] // París
                },
                "properties": {
                    "title": " Paris",
                    "photo": "assets/fotos/roland.jpg",
                    "description": "Paris-Roland Garros 2022"
                }
            }, 




        ]
    };
    
    // Agregar las fotos al mapa
    L.geoJSON(myPhotos, {
        onEachFeature: function (feature, layer) {
            var photoContent = `
                <div class="polaroid">
                    <img src="${feature.properties.photo}" alt="${feature.properties.title}">
                    <div class="caption">${feature.properties.description}</div>
                </div>
            `;
            layer.bindPopup(photoContent);
        }
    }).addTo(map);
    