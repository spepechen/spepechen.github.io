var config = {
    style: 'mapbox://styles/spepechen/cknpv6d4w18gf17ofzrllawt5',
    accessToken: 'pk.eyJ1Ijoic3BlcGVjaGVuIiwiYSI6ImNrbm44NXljZjB6cmsyb24wNWxmMDBhNmwifQ.YqvwlI10OhYZtLYlgjiFgQ',
    showMarkers: false,
    markerColor: '#333',
    theme: 'dark',
    use3dTerrain: true,
    title: 'A bird-eye view tour around Taiwan',
    subtitle: 'From alpines to badlands, the tiny island has many wonders to offer. See how satellite images reveal secrets of Spe’s homeland.',
    byline: 'By Spe Chen',
    footer: 'Source: EO Browser, Taipei Times',
    chapters: [
        {
            id: 'taiwan',
            alignment: 'left',
            hidden: true,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: 118.97023, lat: 24.34739 },
                zoom: 6.63,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'taoyuan',
            alignment: 'left',
            hidden: false,
            title: 'Taoyuan: county of a thousand ponds',
            description: 'Our trip begins with a view that travelers will see when they fly in and out of the Taoyuan International Airport on a cloudless sunny day. Thousands of ponds scatter across the dry red clay Taoyuan plateau. One describes the glittering reflections on the surfaces like diamond sparkle.',
            location: {
                center: {  lon: 121.07176, lat: 24.99133 },
                zoom: 10.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'taoyuan1',
            alignment: 'left',
            hidden: false,
            description: 'Chinese mainland settlers began digging ponds on a larger scale to store water in the late Qing Dynasty. At its peak there were more than 8000 water paddles. The ponds later made way for the then newly built Shimen Reservoir. Now the number of ponds has decreased to somewhere at 3000. The local government finds ways to give the old ponds a second life by turning them into eco-parks and floating solar power farms.',
            location: {
                center: {  lon: 121.07176, lat: 24.99133 },
                zoom: 11.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'taoyuan2',
            alignment: 'left',
            hidden: false,
            image: 'images/legend.png',
            description: 'However, some face the risk of algae boom and consequent eutrophication due to lack of maintenance. The ponds colored by Se2WaQ script highlight the amount of Chlorophyll-a, an indicator of eutrophication. Greener the color, denser the Chlorophyll-a is.',
            location: {
                center: {  lon: 121.07176, lat: 24.99133 },
                zoom: 11.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'spepechen-4a4bjfsj',
                    opacity: 1,
                    duration: 3000,
                }
            ],
            onChapterExit: [
                {
                    layer: 'spepechen-4a4bjfsj',
                    opacity: 0,
                    duration: 500,
                }
            ]
        },

        {
            id: 'Chiayi',
            alignment: 'left',
            hidden: false,
            title: 'Waisanding sandbar: the moving land',
            image: 'images/S2L2A-timelapse - SWIR.gif',
            description: 'This is a piece of geography that is invisible on Google map. The shape of the sandbar is influenced by waves, coastal currents and the northeast monsoon. Monthly SWIR images since 2017 show how frequently the sandbar has dissolved, tilted and resurfaced off shore of the west coast.',
            location: {
                center: { lon: 120.0492701993836, lat: 23.506939382509113 },
                zoom: 11,
                pitch: 1.50,
                bearing: -1.65
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'puli',
            alignment: 'left',
            hidden: false,
            title: 'Sun moon lake',
            image: 'images/sun_moon_lake.png',
            description: 'Taiwan’s worst drought over 50 years has turned parts of the picturesque alpine lake into drylands. The year over year comparison of NDWI images from 2019 to 2021 shows that the water body has shrunken.',
            location: {
                center: { lon: 120.89492, lat: 23.85281 },
                zoom: 13.33,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'yushan',
            alignment: 'left',
            hidden: false,
            title: 'Yushan',
            description: 'Yushan, also known as Mt. Jade, is situated within the Central Mountain Ranges that spread from north to south end of the island. The main peak, elevates at 3952 meters, is the highest peak of Taiwan.',
            location: {
                center: {   lon: 120.9575, lat: 23.4600  },
                zoom: 11.88,
                pitch: 80.00,
                bearing: 1.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'yushan2',
            alignment: 'left',
            hidden: false,
            image: 'images/hilltop.png',
            description: 'Here’s a view at the main peak looking towards the Pacific Ocean. At the center of the picture is Yushan east peak. The photo was taken last December by Amy, my hiking expert friend.',
            location: {
                center: {   lon: 120.9575, lat: 23.4600  },
                zoom: 11.88,
                pitch: 80.00,
                bearing: 91.26
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hualian-start',
            alignment: 'right',
            hidden: false,
            title: 'Huadong Rift Valley',
            description: 'The mountainous landscape was a geological gift from plate movement - the Philippine Sea Plate to the East and the Eurasian Plate to the West. The pink line indicates one of the subduction zones where two plates collide.',
            location: {
                center: { lon: 121.52454, lat: 23.35869 },
                zoom: 8.86,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hualien-subduction-line',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'hualien-subduction-icon',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },

        {
            id: 'hualian',
            alignment: 'right',
            hidden: false,
            description: 'The collision forms the 158-km long Huadong Rift Valley, sandwiched by the Central Mountain Range and the Coastal Mountain Range. The valley stretches from Hualien City in the north to Taitung City in the south.',
            location: {
                center: { lon: 121.56979, lat: 23.90536 },
                zoom: 11.06,
                pitch: 80.00,
                bearing: 14.31
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // {
        //     id: 'hualian-2',
        //     alignment: 'right',
        //     hidden: false,
        //     title: '歐亞及菲律賓板塊交界紀念碑',
        //     image: './path/to/image/source.png',
        //     description: '1. Mapbox draw line across on a layer. 2.Elevation map',
        //     location: {
        //         center: { lon: 121.3250956745749, lat:  23.343892799526518 },
        //         zoom: 11.06,
        //         pitch: 80.00,
        //         bearing: 14.31
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //             layer: 'hualien-subduction-line',
        //             opacity: 1,
        //             duration: 5000
        //         },
        //         {
        //             layer: 'hualien-subduction-icon',
        //             opacity: 1,
        //             duration: 5000
        //         }
        //     ],
        //     onChapterExit: []
        // },

        {
            id: 'dulan',
            alignment: 'right',
            hidden: false,
            description: 'The diverse scenery in the rift valley can be best illustrated by this view. On one side of the Beinan River there are vast rice paddy fields. While on the opposite bank is in the direct contrast to the greenery - the moon-like surface of Liji Badlands.',
            location: {
                // center: { lon: 120.72277, lat: 24.3605 },
                // zoom: 15.5,
                // pitch: 60.00,
                // bearing: 0.00
                center: { lon: 121.14030, lat: 22.81198 },
                zoom: 15.23,
                pitch: 85.00,
                bearing: 35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        // {
        //     id: 'hualian-3',
        //     alignment: 'right',
        //     hidden: false,
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: { lon: 121.13612, lat: 22.84010 },
        //         zoom: 10.71,
        //         pitch: 80.00,
        //         bearing: 14.31
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        {
            id: 'taiwan-end',
            alignment: 'right',
            hidden: false,
            description: 'Hope you enjoy our virtual tour around Taiwan. :)',
            location: {
                center: { lon: 120.80739, lat: 23.63460 },
                zoom: 6.63,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hualien-subduction-line',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'hualien-subduction-icon',
                    opacity: 0,
                    duration: 2000
                }
            ],
            onChapterExit: [
              
            ]
        },
    ]
};
