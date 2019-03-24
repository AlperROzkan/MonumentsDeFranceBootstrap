$(function () {


    $(".mapcontainer").mapael({
        map: {
            name: "france_departments"
            // disable zoom on the map
            , zoom: {
                enabled: false
            }
        },

        plots: {
            // Image plot
            'ancienne douane strasbourg': {
                type: "image",
                url: "../assets/images/marker.png",
                href: 'http://monumentsdefrance.com/ancienne-douane-strasbourg',
                width: 18,
                height: 45,
                latitude: 48.5734053,
                longitude: 7.7521113,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Ancienne Douane \nde Strasbourg",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 11, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 14},
                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/ancienne-douane-strasbourg.jpg\" height=\"200\" width=\"200\">",
                }
            },
            'arenes de nimes': {
                type: "image",
                url: "../assets/images/marker.png",
                href: 'http://monumentsdefrance.com/arenes-de-nimes',
                width: 18,
                height: 45,
                latitude: 43.836699,
                longitude: 4.360054,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Arènes de Nîmes",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 11, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 14},

                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/arenes-de-nimes.jpg\" height=\"150\" width=\"200\">",
                }
            },
            'Cite de Carcassonne': {
                type: "image",
                url: "../assets/images/marker.png",
                href: 'http://monumentsdefrance.com/carcassonne',
                width: 18,
                height: 45,
                latitude: 43.212161,
                longitude: 2.353663,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Cité de Carcassonne",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 11, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 14},
                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/carcassonne.jpg\" height=\"180\" width=\"200\">",
                }
            },
            'Château de Chambord': {
                type: "image",
                url: "../assets/images/marker.png",
                href: 'http://monumentsdefrance.com/chateau-de-chambord',
                width: 18,
                height: 45,
                latitude: 47.616246,
                longitude: 1.517808,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Château de Chambord",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 11, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 14},
                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/chateau-de-chambord.jpg\" height=\"150\" width=\"200\">",
                }
            },
            'Fac de Médecine de Montpellier': {
                type: "image",
                url: "../assets/images/marker.png",
                href: 'http://monumentsdefrance.com/fac-medecine-montpellier',
                width: 18,
                height: 45,
                latitude: 43.610769,
                longitude: 3.876716,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Fac de Médecine \nde Montpellier",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 11, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 14},
                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/fac-medecine-montpellier.jpg\" height=\"200\" width=\"200\">",
                }
            },
            'Port de Honfleur': {
                type: "image",
                url: "../assets/images/marker.png",
                href: 'http://monumentsdefrance.com/honfleur',
                width: 18,
                height: 45,
                latitude: 49.4199,
                longitude: 0.2329,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Port de Honfleur",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 11, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 14},
                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/honfleur.jpg\" height=\"200\" width=\"200\">",
                }
            },
            'mont saint michel': {
                type: "image",
                url: "../assets/images/marker.png",
                href: '../static/monuments/mont-saint-michel.html',
                width: 18,
                height: 45,
                latitude: 48.636,
                longitude: -1.5114,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Mont Saint Michel",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 11, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 14},
                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/mont-saint-michel.jpg\" height=\"180\" width=\"200\">",
                }
            },
            'opera lille': {
                type: "image",
                url: "../assets/images/marker.png",
                href: 'http://monumentsdefrance.com/opera-lille',
                width: 18,
                height: 45,
                latitude: 50.6375383,
                longitude: 3.0645052,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Opera de Lille",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 11, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 14},
                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/opera-lille.jpg\" height=\"200\" width=\"200\">",
                }
            },


        }


    });

    $(".mapcontainer2").mapael({
        map: {
            name: "paris_districts"
            // disable zoom on the map
            , zoom: {
                enabled: false,
            }
        },
        plots: {
            // Image plot
            'tour eiffel': {
                type: "image",
                url: "../assets/images/marker.png",
                href: '../static/monuments/tour-eiffel.html',
                width: 26,
                height: 62,
                x: 250,
                y: 250,
                //plotsOn:"district-75107",
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Tour Eiffel",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 16, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 20},
                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/tour-eiffel.jpg\" height=\"200\" width=\"200\">",
                }
            },
            'Jardin des Tuileries': {
                type: "image",
                url: "../assets/images/marker.png",
                href: 'http://monumentsdefrance.com/jardin-des-tuileries',
                width: 26,
                height: 62,
                x: 360,
                y: 180,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Jardin des Tuileries",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 16, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 20},
                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/jardin-des-tuileries.jpg\" height=\"200\" width=\"200\">",
                }
            },
            'Cimetiere du père Lachaise': {
                type: "image",
                url: "../assets/images/marker.png",
                href: 'http://monumentsdefrance.com/cimetiere-pere-lachaise',
                width: 26,
                height: 62,
                x: 620,
                y: 200,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                text: {
                    content: "Cimetiere du \npère Lachaise",
                    position: "bottom",
                    margin: {"x": 0, "y": -10},
                    attrs: {"font-size": 16, fill: "#EFEFEF", opacity: 0},
                    attrsHover: {opacity: 1, "font-size": 20},
                }
                , tooltip: {
                    overflow: {"bottom": true},
                    content: " <img src=\"../assets/images/cimetiere-pere-lachaise.jpg\" height=\"200\" width=\"200\">",
                }
            },

        }


    });
});
