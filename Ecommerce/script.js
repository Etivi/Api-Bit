function printCards(data) {

    let arrayProducts = "";

    data.forEach(element => {
        
	arrayProducts += `
                <div class="col d-flex flex-column align-items-center shadow p-3 rounded-3 m-3">
					<div>
						<img src=${element.image}>
					</div>
					<h3 class="mt-3 text-center">${element.title}</h3>
					<h4>${element.category}</h4>
					<span>$ ${element.price}</span>
					<p class="pt-4 pb-4">${element.description}</p>
					<button class="btn btn-success">Add to cart</button>	
				</div>
        `;

    });

	document.querySelector("#printer").innerHTML = arrayProducts;
}

function getCharacters() {
    let url = `https://fakestoreapi.com/products`;

   	// devuelve los personajes que lo le indique
	// definir la URL
	// Consumir la URL con fetch
	fetch(url)
		// promesa extitosa o error
		.then(response => response.json())
		// convertir la info a Json
		.then((data) => {
            console.log(data)
            printCards(data);

		})
		.catch(errror => {
            console.log(errror)
        });
}

getCharacters()