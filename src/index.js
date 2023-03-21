// async function pokeRender(){
//     for(let i=0;i<=10;i++){
//         let n=i+15
//         const url = `https://pokeapi.co/api/v2/pokemon/${n}/`;
//         const response= await fetch(url);
//         data=await response.json()
//         let element= document.createElement("div");
//         element.innerText=`
//         <p>${data.name}</p>
//         <img src='${data.sprites.front_default}'></img>
//         `;
//         document.getElementById("central").appendChild(element);
//     }
// }
// pokeRender()

async function pokeRender() {
  let pokeArr = [];
  try {
    for (let i = 1; i <= 100; i++) {
      let n = i + 0;
      const url = `https://pokeapi.co/api/v2/pokemon/${n}/`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const container = document.createElement("div");
          container.className = "flex items-center justify-between card ";

          const image = document.createElement("img");
          image.src = data.sprites.front_default;
          image.className =
            "shadow-lg h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

          const title = document.createElement("h2");
          title.textContent =
            data.name[0].toUpperCase() + data.name.substring(1);

          title.className = "font-bold text-red-500 text-base";

          const ability = document.createElement("p");
          ability.textContent =
            "Abilitys: " +
            data.abilities[0].ability.name +
            " , " +
            data.abilities[1].ability.name +
            " and " +
            data.abilities[2].ability.name;
          ability.className = "text-gray-400 text-sm";

          const infoCard = document.createElement("div");
          infoCard.append(title, ability);

          container.append(image, infoCard);
          pokeArr.push(container);

          document.getElementById("central").append(...pokeArr);
        })

        .catch((err) => console.log(err));
    }
  } catch (err) {
    console.log(err);
  }
  console.log(pokeArr);
}
pokeRender();
