document.addEventListener('DOMContentLoaded', ()=>{
    const url = `https://swapi.dev/api/people/`

    // const api_key = 'Chave disponibilizada pela api'
    // fetch(url, {headers:{
    //     'x-api-key': api_key
    // }})
    // .then()

    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao receber os dados')
        }
        return response.json()
    })
    .then((data)=>{
       renderizarPersonagens(data)
    })
    .catch((err)=>console.log(err))
})

function renderizarPersonagens(items){
    const container = document.getElementById("personagem-container");

    items.results.forEach((item, index)=>{ 
      const divPersonagens = document.createrElement('div');
      divPersonagens.innerHTML = `
          <div class="personagem-caixa">
             <img src="./image/person${index}.png">
          <div>
             <h3>${item.name}</h3>
            </div>
        </div>

    `;

    divPersonagens.addEventListener('click', ()=>{
        console.log(item, index)
    })
    divPersonagens.classList.add('personagem')
    container.appendChild(divPersonagens)
 })
}

function detalhesPersonagem(item, index){
  window.location.href = `./pages/person.html?index=${index}`
}