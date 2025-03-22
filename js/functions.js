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
                    "description": "Blois-Université IUT Blois 2021"
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
                    "description": "Blois- Castillo Real 2021"
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
                    "description": "Orleans- Catedral de la Santa Cruz 2021"
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
                    "description": "Orleans- Museo de bellas artes 2021"
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
                    "description": "Valenciennes-2021"
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
                    "description": "Lille-2021"
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
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [6.1294, 45.8992] // París
                },
                "properties": {
                    "title": " Annency",
                    "photo": "assets/fotos/annency.jpg",
                    "description": "Annency- 2022"
                }
            }, 
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [5.7679, 45.2611] // París
                },
                "properties": {
                    "title": " Grenoble",
                    "photo": "assets/fotos/grenoble.jpg",
                    "description": "Grenoble-Le sappey en chartreuse 2022"
                }
            }, 
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-0.5792, 44.8378] // París
                },
                "properties": {
                    "title": " Bordeaux",
                    "photo": "assets/fotos/bordeaux.jpg",
                    "description": "Bordeaux-2022"
                }
            }, 
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.8357, 45.7640] // París
                },
                "properties": {
                    "title": " Lyon",
                    "photo": "assets/fotos/lyon.jpg",
                    "description": "Lyon-2022"
                }
            }, 
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [6.1844, 48.6921] // París
                },
                "properties": {
                    "title": " Nancy",
                    "photo": "assets/fotos/nancy.jpg",
                    "description": "Nancy-2021"
                }
            }, 
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.3500, 48.8529] // París
                },
                "properties": {
                    "title": " Paris",
                    "photo": "assets/fotos/notre.jpg",
                    "description": "Paris- Notre Dame 2021"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.3522, 48.8606] // París
                },
                "properties": {
                    "title": " Paris",
                    "photo": "assets/fotos/pompid.jpg",
                    "description": "Paris- Pompidou 2021"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.3450, 48.8566] // París
                },
                "properties": {
                    "title": " Paris",
                    "photo": "assets/fotos/sainte.jpg",
                    "description": "Paris- Sainte-Chapell 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [7.7521, 48.5734] // París
                },
                "properties": {
                    "title": " Stasbourg",
                    "photo": "assets/fotos/stras.jpg",
                    "description": "Stasbourg-2021"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.1204, 48.8049] // París
                },
                "properties": {
                    "title": " Versailles",
                    "photo": "assets/fotos/versailles.jpg",
                    "description": "Versailles-Palacio de Versailles 2021"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.7800, 48.8708] // París
                },
                "properties": {
                    "title": " Paris",
                    "photo": "assets/fotos/disney.jpg",
                    "description": "Paris-Disney 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [7.4474, 46.9481] // París
                },
                "properties": {
                    "title": " Berna",
                    "photo": "assets/fotos/bern.jpg",
                    "description": "Suiza-Berna 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [6.13, 49.6117] // París
                },
                "properties": {
                    "title": " Luxemburgo",
                    "photo": "assets/fotos/luxemburgo.jpg",
                    "description": "Luxemburgo-Luxemburgo 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.3517, 50.8503] // París
                },
                "properties": {
                    "title": " Bruselas",
                    "photo": "assets/fotos/bruselas.jpg",
                    "description": "Bélgica-Bruselas 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [3.2247, 51.2093] // París
                },
                "properties": {
                    "title": " Brujas",
                    "photo": "assets/fotos/brujas.jpg",
                    "description": "Bélgica-Brujas 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.9041, 52.3676] // París
                },
                "properties": {
                    "title": " Amsterdam",
                    "photo": "assets/fotos/amsterdam.jpg",
                    "description": "Paises Bajos-Amsterdam 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [13.4050, 52.5200] // París
                },
                "properties": {
                    "title": " Berlin",
                    "photo": "assets/fotos/berlin.jpg",
                    "description": "Alemania-Berlin 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [13.2906, 52.7563] // París
                },
                "properties": {
                    "title": " Oranienburgo",
                    "photo": "assets/fotos/oranienburgo.jpg",
                    "description": "Alemania-Oranienburgo 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [20.0667, 49.9833] // París
                },
                "properties": {
                    "title": " Wieliczka",
                    "photo": "assets/fotos/wiel.jpg",
                    "description": "Polonia-Wieliczka 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [19.9450, 50.0647] // París
                },
                "properties": {
                    "title": " Cracovia",
                    "photo": "assets/fotos/krakow.jpg",
                    "description": "Polonia-Cracovia 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [14.4378, 50.0755] // París
                },
                "properties": {
                    "title": " Praga",
                    "photo": "assets/fotos/rc.jpg",
                    "description": "Republica Checa-Praga 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [19.0402, 47.4979] // París
                },
                "properties": {
                    "title": " Hungria",
                    "photo": "assets/fotos/bud.jpg",
                    "description": "Hungria-Budapest 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.3155, 45.4408] // París
                },
                "properties": {
                    "title": " Italia",
                    "photo": "assets/fotos/venecia.jpg",
                    "description": "Italia-Venecia 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [12.4964, 41.9028] // París
                },
                "properties": {
                    "title": " Italia",
                    "photo": "assets/fotos/roma.jpg",
                    "description": "Italia-Roma 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.4000, 43.7167] // París
                },
                "properties": {
                    "title": " Italia",
                    "photo": "assets/fotos/pisa.jpg",
                    "description": "Italia-Pisa 2022"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [9.1900, 45.4642] // París
                },
                "properties": {
                    "title": " Italia",
                    "photo": "assets/fotos/milan.jpg",
                    "description": "Italia-Milan 2022"
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
    