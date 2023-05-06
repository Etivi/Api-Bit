// const contenedor = document.querySelector(".box");

// let url = "https://rickandmortyapi.com/api/character/";

// fetch(url)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log(data);
//         let status = data;
//         let contenido = "";
// 		let contador = 0;

// 		for (character of data.results) {

            // if (character.status === "Alive") {
            //     status = "alive";
            // } else if (character.status === "Dead") {
            //     status = "dead"
            // } else status = "unknown"

//             contenido += `
//             <div id="contenedor" class=" rounded-3">
//             <div class="row" id="row">
//                 <div class="d-flex">
//                     <img id="img" class="" src=${character.image}>
//                     <div
//                         class="d-flex flex-column justify-content-center ps-3 pe-3 gap-3 target"
//                     >
//                         <div>
//                             <h2 id="name" class=""> ${character.name}</h2>
//                             <div class="d-flex gap-3 card-body">
//                                 <span><i id="status" class="fa-solid fa-circle fa-2xs pe-2 ${status}"></i>${character.status}</span>
//                                 <span id="species">${character.species}</span>
//                             </div>
//                         </div>
//                         <div class="d-flex flex-column">
//                             <span id="last-location" class="text-secondary fs-5">Last known location:</span>
//                             <a href="#" id="location" class="fs-4">${character.location.name}</a>
//                         </div>
//                         <div class="d-flex flex-column">
//                             <span class="text-secondary fs-5">First seen in:</span>
//                             <a href="#" class="fs-4">Cap2</a>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//         `;
//         contador++;

// 			if (contador == 6) {
// 				break;
// 			}

// 		}

// 		// Agrega el contenido al elemento HTML
// 		contenedor.innerHTML = contenido;
// 	});

// ┼┼┼ segunda manera

// const contenedor = document.querySelector(".box");

// let count = Math.floor(Math.random() * 826) + 1;
// let url = `https://rickandmortyapi.com/api/character/${count}`;

// fetch(url)
//     .then((response) => response.json())
//     .then(data =>{

// console.log(data);

// let contenido =
// `
// <div id="contenedor" class=" rounded-3">
//     <div class="row" id="row">
//         <div class="d-flex">
//             <img id="img" class="" src=${data.image}>
//             <div
//                 class="d-flex flex-column justify-content-center ps-3 pe-3 gap-3 target"
//             >
//                 <div>
//                     <h2 id="name" class=""> ${data.name}</h2>
//                     <div class="d-flex gap-3 card-body">
//                         <span><i id="status" class="fa-solid fa-circle fa-2xs pe-2 ${status}"></i>${data.status}</span>
//                         <span id="species">${data.species}</span>
//                     </div>
//                 </div>
//                 <div class="d-flex flex-column">
//                     <span id="last-location" class="text-secondary fs-5">Last known location:</span>
//                     <a href="#" id="location" class="fs-4">${data.location.name}</a>
//                 </div>
//                 <div class="d-flex flex-column">
//                     <span class="text-secondary fs-5">First seen in:</span>
//                     <a href="#" class="fs-4">Cap2</a>
//                 </div>
//             </div>
//         </div>

//     </div>
// </div>
// `
// contenedor.innerHTML = contenido;

//     })

// tercera manera

function printCards(data) {
	
	let arrayCards = "";
    console.log(data)

	data.forEach((item) => {

        let status = item.status;

        if (item.status === "Alive") {
            status = "alive";
        } else if (item.status === "Dead") {
            status = "dead"
        } else status = "unknown"

		// indicarle que en el div va a ir concatenando las tarjetas ateriores con una tarheta nueva
		arrayCards += `
        <div id="contenedor" class=" rounded-3">
            <div class="row" id="row">
                <div class="d-flex">
                    <img id="img" class="" src=${item.image}>
                    <div
                        class="d-flex flex-column justify-content-center ps-3 pe-3 gap-3 target"
                    >
                        <div>
                            <h2 id="name" class="d-flex gap-3"> ${item.name}</h2>
                            <span>${item.id}</span>
                            <div class="d-flex gap-3 card-body">
                                <span><i id="status" class="fa-solid fa-circle fa-2xs pe-2 ${status}"></i>${item.status}</span>
                                <span id="species">${item.species}</span>
                            </div>
                        </div>
                        <div class="d-flex flex-column">
                            <span id="last-location" class="text-secondary fs-5">Last known location:</span>
                            <a href="#" id="location" class="fs-4">${item.location.name}</a>
                        </div>
                        <div class="d-flex flex-column">
                            <span class="text-secondary fs-5">First seen in:</span>
                            <a href="#" class="fs-4">Cap2</a>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
        `;
	});

	document.querySelector("#printer").innerHTML = arrayCards;
}

function getCharacters() {
    let url = `https://rickandmortyapi.com/api/character/`;

    let cant = parseInt(prompt("Cuantos personajes deseas mirar"));
    let aleatorio=[];
    for (let i = 0; i < cant; i++) {
        url += `${Math.floor(Math.random() * 826) + 1},`   
    }

	// devuelve los personajes que lo le indique
	// definir la URL
	// Consumir la URL con fetch
	fetch(url)
		// promesa extitosa o error
		.then(response => response.json())
		// convertir la info a Json
		.then((data) => {
			printCards(data);
		})
		.catch(errror => {
            console.log(errror)
        });
}


const play = document.getElementById("play");

play.addEventListener("click", () => {
    getCharacters();
})
