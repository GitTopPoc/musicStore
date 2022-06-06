const Router = require("express")
const router = new Router()

router.get('/get-items', (req, res) => {
    try{
        return res.status(200).json(
            {
                items: [{id: 1,
                    title: "Valencia Classical Guitar",
                    img: "img/instrument-1.jpg",

                    price: 15.99,
                    star: 4.7,
                    company: "Valencia",
                    info:
                        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                    inCart: false,
                    count: 0,
                    total: 0,},

                    {
                        id: 2,
                        title: "Squier Electric Guitar Red",
                        img: "img/instrument-2.jpg",
                        price: 48.99,
                        star: 4.6,
                        company: "Squier",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 3,
                        title: "Squier Electric Guitar Black",
                        img: "img/instrument-3.jpg",
                        price: 48.99,
                        star: 4.8,
                        company: "Squier",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 4,
                        title: "Casio Piano",
                        img: "img/instrument-4.jpg",
                        price: 389.99,
                        star: 4.3,
                        company: "Casio",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 5,
                        title: "Yamaha Piano",
                        img: "img/instrument-5.jpg",
                        price: 305.99,
                        star: 4.5,
                        company: "Yamaha",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 6,
                        title: "Alesis Drum Set",
                        img: "img/instrument-6.jpg",
                        price: 88.99,
                        star: 4.9,
                        company: "Alesis",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 7,
                        title: "Cremonia Kalimba",
                        img: "img/instrument-7.jpg",
                        price: 7.99,
                        star: 4.2,
                        company: "Cremonia",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 8,
                        title: "Gold Bendir",
                        img: "img/instrument-8.jpg",
                        price: 4.99,
                        star: 4.8,
                        company: "Gold",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 9,
                        title: "Müren Classics",
                        img: "img/records-1.jpg",
                        price: 3.99,
                        star: 4.2,
                        company: "jet Plak",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 10,
                        title: "Best Of Ray Charles",
                        img: "img/records-2.jpg",
                        price: 4.99,
                        star: 4.6,
                        company: "Ajs Müzik",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 11,
                        title: "Roseden Blackbug Wish Stone",
                        img: "img/records-3.jpg",
                        price: 4.99,
                        star: 4.2,
                        company: "Jet Plak",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 12,
                        title: "Ataturk Favorite Songs",
                        img: "img/records-4.jpg",
                        price: 6.99,
                        star: 5,
                        company: "Ati Müzik",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 13,
                        title: "Müren Art Sun",
                        img: "img/records-5.jpg",
                        price: 5.99,
                        star: 4.1,
                        company: "Jet Plak",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 14,
                        title: "Tanju Okan My Woman",
                        img: "img/records-6.jpg",
                        price: 3.99,
                        star: 4.8,
                        company: "Altın Plak",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 15,
                        title: "Jazz For Lovers",
                        img: "img/records-7.jpg",
                        price: 4.99,
                        star: 4.7,
                        company: "Ajs Müzik",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 16,
                        title: "Tarkan Ahde Vefa",
                        img: "img/records-8.jpg",
                        price: 4.99,
                        star: 4.8,
                        company: "Altın Plak",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 17,
                        title: "Guitar Case",
                        img: "img/accessories-1.jpg",
                        price: 4.99,
                        star: 4.6,
                        company: "7Nota",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 18,
                        title: "Music Stand",
                        img: "img/accessories-2.jpg",
                        price: 3.99,
                        star: 4.5,
                        company: "Chroma",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 19,
                        title: "Kalimba",
                        img: "img/accessories-3.jpg",
                        price: 16.99,
                        star: 4.4,
                        company: "Huanyin",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 20,
                        title: "Picks Types",
                        img: "img/accessories-4.jpg",
                        price: 0.99,
                        star: 4.3,
                        company: "Alice",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 21,
                        title: "Tuner",
                        img: "img/accessories-5.jpg",
                        price: 2.25,
                        star: 4.8,
                        company: "Joyo",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 22,
                        title: "Organ Stand",
                        img: "img/accessories-6.jpg",
                        price: 10.99,
                        star: 4.3,
                        company: "Lastvoice",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 23,
                        title: "Wire Set",
                        img: "img/accessories-7.jpg",
                        price: 3.99,
                        star: 4.7,
                        company: "Donizetti",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    },

                    {
                        id: 24,
                        title: "Music Stand",
                        img: "img/accessories-8.jpg",
                        price: 6.99,
                        star: 4.6,
                        company: "Lastvoice",
                        info:
                            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
                        inCart: false,
                        count: 0,
                        total: 0,
                    }]
            }
        )

    }catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})


module.exports = router