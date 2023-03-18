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
    try {
      for (let i = 1; i <= 10; i++) {
        let n = i + 15;
        const url = `https://pokeapi.co/api/v2/pokemon/${n}/`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            let element = document.createElement("div");
            element.innerHTML = `
              <p>${data.name}</p>
              <img src='${data.sprites.front_default}'></img>
            `;
            document.getElementById("central").appendChild(element);
          })
          .catch((err) => console.log(err));
      }
    } catch (err) {
      console.log(err);
    }
  }
  pokeRender();