var tuitsmodulo = angular.module('tuitsmodulo', []);

tuitsmodulo.controller("tuitscontroller", function ($scope, $http) {

    var socket = io.connect('/');
    socket.on('announcements', function (data) {
        console.log('Got announcement:', data.message);
    });

    $scope.redireccionar = function (screnn, id) {

        url = "http://www.twitter.com/" + screen + "/status/" + id;
        console.log(url);
        location.href = url;
    }

    $scope.pedirStreaming = function () {
        socket.emit('query', {
            palabra: $scope.name,
            count: "10"
        });
        socket.on('tuits', function (data) {
            console.log(data.tuits);
        });
    }

    $scope.buscar_tuits = function () {
        var q = 'http://localhost:3000/tuitsearch/all/' + 'femicidio' + '/' + 100;
        $http.get(q).success(function (data) {
            $scope.tuits = data;
        });
    };

    $scope.deleteO = function (tuit_delete) {
        delete $scope.tuits[tuit_delete];
    };

    $scope.leer_json = function () {
        $scope.aux = 1;
        $.getJSON("1000.json", function (datos) {
            $.each(datos['statuses'], function (idx, tuit_to_save) {
                $scope.guardarTuit(tuit_to_save);
            });
        });
    }

    $scope.guardarTuit = function (tuit_save) {
        console.log(tuit_save);
        //var q = 'http://localhost:3000/tuitsearch/all/';
        $http({
            method: 'POST',
            url: 'http://localhost:3000/mongodb/tuit',
            data: JSON.stringify(tuit_save),
            headers: {
                'Content-type': 'application/json'
            }
        });
        $http({
            method: 'POST',
            url: 'http://localhost:3000/mongodb/hashtag',
            data: JSON.stringify(tuit_save),
            headers: {
                'Content-type': 'application/json'
            }
        });
        $http({
            method: 'POST',
            url: 'http://localhost:3000/mongodb/usermentions',
            data: JSON.stringify(tuit_save),
            headers: {
                'Content-type': 'application/json'
            }
        });
        $http({
            method: 'POST',
            url: 'http://localhost:3000/mongodb/retweeted',
            data: JSON.stringify(tuit_save),
            headers: {
                'Content-type': 'application/json'
            }
        });
        $http({
            method: 'POST',
            url: 'http://localhost:3000/mongodb/users',
            data: JSON.stringify(tuit_save),
            headers: {
                'Content-type': 'application/json'
            }
        });
    };

    $scope.guardarTuit2 = function () {
        //var q = 'http://localhost:3000/tuitsearch/all/';
        $http({
            method: 'POST',
            url: 'http://localhost:3000/mongodb/tuit',
            data: JSON.stringify(tuitexample),
            headers: {
                'Content-type': 'application/json'
            }
        });
        $http({
            method: 'POST',
            url: 'http://localhost:3000/mongodb/hashtag',
            data: JSON.stringify(tuitexample),
            headers: {
                'Content-type': 'application/json'
            }
        });
        $http({
            method: 'POST',
            url: 'http://localhost:3000/mongodb/usermentions',
            data: JSON.stringify(tuitexample),
            headers: {
                'Content-type': 'application/json'
            }
        });
        $http({
            method: 'POST',
            url: 'http://localhost:3000/mongodb/retweeted',
            data: JSON.stringify(tuitexample),
            headers: {
                'Content-type': 'application/json'
            }
        });
        $http({
            method: 'POST',
            url: 'http://localhost:3000/mongodb/users',
            data: JSON.stringify(tuitexample),
            headers: {
                'Content-type': 'application/json'
            }
        });
    };

    $scope.cursos = [{
            nombre: "Derecho Constitucional",
            disponible: "Desde el 14 de julio/2017",
            duracion: "5 semanas (40 horas de estudio)",
            url: "https://mooc.utpl.edu.ec/enrol/index.php?id=39",
            imagen: "https://mooc.utpl.edu.ec/pluginfile.php/19125/course/overviewfiles/Derecho%20Constitucional.jpg"
        },
        {
            nombre: "Relaciones Públlicas y Protocolo",
            disponible: "Desde el 15 de mayo/2017",
            duracion: "6 semanas(40 horas de estudio)",
            url: "https://mooc.utpl.edu.ec/enrol/index.php?id=39",
            imagen: "https://mooc.utpl.edu.ec/pluginfile.php/19124/course/overviewfiles/Relaciones%20Publica.jpg"
        },
        {
            nombre: "Familiarización con el EVA (DOCENTES)",
            disponible: "El 5 de septiembre/2017",
            duracion: "4 semanas",
            url: "https://mooc.utpl.edu.ec/enrol/index.php?id=36",
            imagen: "https://mooc.utpl.edu.ec/pluginfile.php/10533/course/overviewfiles/imagen2.jpg"
        },
        {
            nombre: "Familiarización con el EVA (ESTUDIANTES)",
            disponible: "El 5 de agosto/2017",
            duracion: "5 semanas(40 horas de estudio)",
            url: "https://mooc.utpl.edu.ec/enrol/index.php?id=34",
            imagen: "https://mooc.utpl.edu.ec/pluginfile.php/9744/course/overviewfiles/Arte%20Cursos%20Familia%20EVA%201.2%20%281%29.jpg"
        },
        {
            nombre: "Expresión Oral y Escrita",
            disponible: "Ya disponible",
            duracion: "5 semanas",
            url: "https://mooc.utpl.edu.ec/enrol/index.php?id=41",
            imagen: "https://mooc.utpl.edu.ec/pluginfile.php/20024/course/overviewfiles/expresion_banner_little.png"
        },
        {
            nombre: "Metodología de Estudio",
            disponible: "Desde el 15 de mayo/2017",
            duracion: "6 semanas(40 horas de estudio)",
            url: "https://mooc.utpl.edu.ec/enrol/index.php?id=39",
            imagen: "https://mooc.utpl.edu.ec/pluginfile.php/19124/course/overviewfiles/Relaciones%20Publica.jpg"
        },
        {
            nombre: "Realidad Nacional",
            disponible: "Desde el 15 de mayo/2017",
            duracion: "Inscripciones Abiertas",
            url: "https://mooc.utpl.edu.ec/enrol/index.php?id=42",
            imagen: "https://mooc.utpl.edu.ec/pluginfile.php/20079/course/overviewfiles/Realidad_Nacional_banner_little.png"
        }
    ];

    $scope.cursosOpen = "http://opencampus.utpl.edu.ec/courses";
    $scope.cursosOpenValidacion = "http://opencampus.utpl.edu.ec/validacion_utpl";
    $scope.cursosValidacion = "http://opencampus.utpl.edu.ec/validacion_utpl";

    tuitexample = {
        "created_at": "Fri Jul 21 16:12:56 +0000 2017",
        "id": 888431610764427264,
        "id_str": "888431610764427264",
        "text": "Amigos les comparto la invitaci\u00f3n para que se conecten y se informen.\nTema ..EL FEMICIDIO\n\nComparte la invitaci\u00f3n... https:\/\/t.co\/aqJ4UNFsS0",
        "truncated": false,
        "entities": {
            "hashtags": [{
                "text": "LecturaRecomendada1",
                "indices": [
                    89,
                    108
                ]
            }, {
                "text": "LecturaRecomendada2",
                "indices": [
                    89,
                    108
                ]
            }],
            "symbols": [],
            "user_mentions": [{
                    "screen_name": "Justicia_Ec2",
                    "name": "Justicia Ecuador",
                    "id": 170069351,
                    "id_str": "170069351",
                    "indices": [
                        3,
                        15
                    ]
                },
                {
                    "screen_name": "alvaradorosana2",
                    "name": "Rosana Alvarado",
                    "id": 216783643,
                    "id_str": "216783643",
                    "indices": [
                        26,
                        41
                    ]
                }
            ],
            "urls": [{
                "url": "https:\/\/t.co\/aqJ4UNFsS0",
                "expanded_url": "http:\/\/fb.me\/1lNcCmnKA",
                "display_url": "fb.me\/1lNcCmnKA",
                "indices": [117, 140]
            }]
        },
        "metadata": {
            "iso_language_code": "es",
            "result_type": "recent"
        },
        "retweeted_status": {
            "created_at": "Tue Jul 18 15:48:00 +0000 2017",
            "id_str": "887338168755900416",
            "text": "[Conversatorio online] Femicidio: ¿un delito más o real medida de protección a las mujeres? Mañana, 15:00… https://t.co/4itZKAxaz1",
            "truncated": true,
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [{
                    "url": "https://t.co/4itZKAxaz1",
                    "expanded_url": "https://twitter.com/i/web/status/887338168755900416",
                    "display_url": "twitter.com/i/web/status/8…",
                    "indices": [
                        107,
                        130
                    ]
                }]
            },
            "metadata": {
                "iso_language_code": "es",
                "result_type": "recent"
            },
            "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 297039501,
                "id_str": "297039501",
                "name": "INREDH",
                "screen_name": "inredh1",
                "location": "Ecuador",
                "description": "La Fundación Regional de Asesoría en Derechos Humanos, INREDH, es un organismo de  defensa de los Derechos Humanos y derechos de la naturaleza",
                "url": "http://t.co/6yjX9d2CQm",
                "entities": {
                    "url": {
                        "urls": [{
                            "url": "http://t.co/6yjX9d2CQm",
                            "expanded_url": "http://www.inredh.org",
                            "display_url": "inredh.org",
                            "indices": [
                                0,
                                22
                            ]
                        }]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 3608,
                "friends_count": 770,
                "listed_count": 49,
                "created_at": "Wed May 11 20:39:09 +0000 2011",
                "favourites_count": 1199,
                "utc_offset": -14400,
                "time_zone": "Eastern Time (US & Canada)",
                "geo_enabled": true,
                "verified": false,
                "statuses_count": 11999,
                "lang": "es",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "709397",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme6/bg.gif",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme6/bg.gif",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1474860217/logo_inredh_peque_o_normal.JPG",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1474860217/logo_inredh_peque_o_normal.JPG",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/297039501/1484670808",
                "profile_link_color": "FF3300",
                "profile_sidebar_border_color": "86A4A6",
                "profile_sidebar_fill_color": "A0C5C7",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": false,
                "following": false,
                "follow_request_sent": false,
                "notifications": false,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 2,
            "favorite_count": 1,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "es"
        },
        "source": "\u003ca href=\"http:\/\/www.facebook.com\/twitter\" rel=\"nofollow\"\u003eFacebook\u003c\/a\u003e",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3178297061,
            "id_str": "3178297061",
            "name": "cristina vinueza",
            "screen_name": "VinuezaCristin1",
            "location": "",
            "description": "Una luchadora incansable!",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 4954,
            "friends_count": 2858,
            "listed_count": 20,
            "created_at": "Sat Apr 18 00:08:49 +0000 2015",
            "favourites_count": 1903,
            "utc_offset": -25200,
            "time_zone": "Pacific Time (US & Canada)",
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 4234,
            "lang": "es",
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
            "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/674039201491460097\/Vtw6VjNo_normal.jpg",
            "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/674039201491460097\/Vtw6VjNo_normal.jpg",
            "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/3178297061\/1489761963",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "es"
    };
});