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
        //   let element = document.createElement("div");
          const container = document.createElement("div");
          container.className='text-center md:text-left card';

          const image = document.createElement("img");
          image.src=data.sprites.front_default;
          image.className='shadow-lg h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'

          const title = document.createElement("h2");
          title.textContent = data.name[0].toUpperCase()+data.name.substring(1);
         
          title.className="font-bold text-red-600"
          

          const ability = document.createElement("p");
          ability.textContent=data.abilities[0].ability.name+' , '+data.abilities[1].ability.name+' and '+ data.abilities[2].ability.name
         ability.className="text-gray-600"
        //   element.innerHTML = `
        //       <h1>name:${data.name}</h1>
        //       <img src='${data.sprites.front_default}'></img>
        //       <p>first ability:${data.abilities[0].ability.name}</>
        //     `;
        
          container.append(image, title, ability);
          pokeArr.push(container);

        //   document.getElementById("central").appendChild(element);
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
