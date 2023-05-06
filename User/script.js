
function printCards(data) {

    console.log(data)

    let date = new Date(`${data.results[0].dob.date}`);
    const formatDate = (date)=>{
    let formatted_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    return formatted_date;
    }
    console.log(formatDate(date));

	
	let arrayCards = `
                <div class="box text-center">
					<img class="mt-3" src=${data.results[0].picture.large}>
				</div>
				<div class="box2 text-center shadow pb-5 ">
					<span id="user_title">Hi, My name is</span>
					<h2 class="fs-1"  id="user_value">${data.results[0].name.first} ${data.results[0].name.last}</h2>
					<div class="d-flex gap-5 justify-content-center mt-5">
						<i data-title="Hi, My name is" data-value="${data.results[0].name.first} ${data.results[0].name.last}" data-label="" class="fa-solid fa-user"></i>
						<i data-title="My email address is" data-value="${data.results[0].email}" data-label="" class="fa-regular fa-envelope"></i>
						<i data-title="My birthday is" data-value="${formatDate(date)}" data-label="" class="fa-solid fa-cake-candles"></i>
						<i data-title="My address is" data-value="País:${data.results[0].location.country} ${data.results[0].location.city}" data-label="" class="fa-solid fa-map-location-dot"></i>
						<i data-title="My phone number is" data-value="${data.results[0].cell}" data-label="" class="fa-solid fa-mobile-screen-button"></i>
						<i data-title="My username is" data-value="${data.results[0].login.username}" data-label="" class="fa-solid fa-lock"></i>
					</div>
                    <button id="play" type="button" class="btn btn-success mt-5">Next</button>
				</div>
    
        `;

	document.querySelector("#printer").innerHTML = arrayCards;

    const icons = document.querySelectorAll('.box2 i');
        const title = document.getElementById('user_title');
        const value = document.getElementById('user_value');
    
        icons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            title.innerText = icon.dataset.title;
            value.innerText = icon.dataset.value;
        });
        });
        const play = document.getElementById("play");

        play.addEventListener("click", () => {
            getCharacters();
        })
    
}


async function getCharacters() {
    let url = `https://randomuser.me/api/`;

   	// devuelve los personajes que lo le indique
	// definir la URL
	// Consumir la URL con fetch
	await fetch(url)
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

getCharacters()


