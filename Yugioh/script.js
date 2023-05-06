function printCards(data) {
    console.log(data.data)
	
	let arrayCards = `
    <div clas="imgZoom">
    <img class="rounded-4 imgCard" src=${data.data[0].card_images[0].image_url} alt="">
</div>
<div class="container-fluid">
    <h2>${data.data[0].name}</h2>
    <div class="container-fluid">
        <div class="row">
            <div class="col box">
                <span>Type</span>
                <p>${data.data[0].type}</p>
            </div>
            <div class="col box">
                <span>Archetype</span>
                <p>${data.data[0].archetype}</p>
            </div>
            <div class="col box">
                <span>Typing</span>
                <p>${data.data[0].race}</p>
            </div>
        </div>
        <div class="row">
            <div class="col box">
                <span>FrameType</span>
                <p>${data.data[0].frameType}</p>
            </div>
            <div class="col box">
                <span>Name SET</span>
                <p>${data.data[0].card_sets[0].set_name}</p>
            </div>
            <div class="col box">
                <span>ID</span>
                <p>${data.data[0].id}</p>
            </div>
        </div>
        <div class="row">
            <div class="col box">
                <span>Price Tcg Player</span>
                <p>${data.data[0].card_prices[0].tcgplayer_price}</p>
            </div>
            <div class="col box">
                <span>Price Amazon</span>
                <p>${data.data[0].card_prices[0].amazon_price}</p>
            </div>
            <div class="col box">
                <span>Price Ebay</span>
                <p>${data.data[0].card_prices[0].ebay_price}</p>
            </div>
        </div>
    </div>
    <div>
        <h3>Card Text</h3>
        <p>${data.data[0].desc}</p>
    </div>
    <button id="play" type="button" class="btn btn-success mt-5">Next Card</button>
</div>
</div>
        `;

	document.querySelector("#printer").innerHTML = arrayCards;

    const play = document.getElementById("play");

        play.addEventListener("click", () => {
            getCharacters();
        })

}

function getCharacters() {
    let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;

   	// devuelve los personajes que lo le indique
	// definir la URL
	// Consumir la URL con fetch
	fetch(url)
		// promesa extitosa o error
		.then(response => response.json())
		// convertir la info a Json
		.then((data) => {
            console.log(data.name)
            printCards(data);

		})
		.catch(errror => {
            console.log(errror)
        });
}

getCharacters()