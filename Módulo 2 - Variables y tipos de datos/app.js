// Listado de hoteles

var hoteles = {
    
    Torreblanca: {
        name: "Torreblanca",
        location: "Fuengirola",
        img: "https://pix10.agoda.net/hotelImages/609/60904/60904_1112191810005240254.jpg?s=1024x768",

    },

    "Villa de Laredo": {
        name: "Villa de Laredo",
        location: "Fuengirola",
        img: "https://cf.bstatic.com/images/hotel/max1024x768/204/20498986.jpg",
    },

    "La Cala Resort": {
        name: "La Cala Resort",
        location: "La Cala de Mijas",
        img: "https://static.booking.weekendesk.fr/image_cache/A876000/876048/876048_640_360_FSImage_1_EDIT_facade.jpg",
    }

}

var selectedHotel = prompt("Indica el nombre del hotel: Torreblanca, Villa de Laredo o La Cala Resort");

document.getElementById("hotel-name").innerHTML = "Hotel " + hoteles[selectedHotel].name;

document.getElementById("hotel-location").innerHTML = "ubicado en " + hoteles[selectedHotel]["location"];

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

// puntuación

var stars = {
    una: 
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: 
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: 
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: 
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: 
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("¿Cuántas estrellas?: una, dos, tres, cuatro o cinco")

document.getElementById("rating").innerHTML = rating

document.getElementById("star").innerHTML = stars[rating];

var algo = confirm("¿Quiere que la reseña sea anónima?")

document.getElementById("anonymous").checked = algo;

//anónimo (true o false)
//checkbox boolean
//confirm() -> boolean
