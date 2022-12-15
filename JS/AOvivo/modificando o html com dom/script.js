const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]
//criando elemento
const article1 = document.createElement('article')
article1.id = 'post-2'
//populando o elemento
article1.innerHTML = 
`
<h3>Pop Vegan</h3>
<p class="subtitulo">Comida vegana para todos!</p>
<div class="data">06/07/2022</div>
<p>Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)</p>
`
//adicionando no DOM
const main = document.querySelector('main')
main.appendChild(article1)
// -----------------------------------------------
const article2 = document.createElement('article')
article2.id = 'post-4'
// chamando o titulo a partir do array 3(indice 2) chamando o parametro titulo
// chamando o titulo a partir do array 3(indice 2) chamando o parametro subtitulo
// chamando o titulo a partir do array 3(indice 2) chamando o parametro data
// chamando o titulo a partir do array 3(indice 2) chamando o parametro texto
article2.innerHTML = 
`
<h3>${arrayPostagens[1].titulo}</h3> 
<p class="subtitulo">${arrayPostagens[1].subtitulo}</p>
<div class="data">${arrayPostagens[1].data}</div>
<p>${arrayPostagens[1].texto}</p>
`
const main_dois = document.querySelector('main')
main_dois.appendChild(article2)
// -----------------------------------------------
// chamando a partir do array
const article3 = document.createElement('article')
article3.id = 'post-4'
// chamando o titulo a partir do array 3(indice 2) chamando o parametro titulo
// chamando o titulo a partir do array 3(indice 2) chamando o parametro subtitulo
// chamando o titulo a partir do array 3(indice 2) chamando o parametro data
// chamando o titulo a partir do array 3(indice 2) chamando o parametro texto
article3.innerHTML = 
`
<h3>${arrayPostagens[2].titulo}</h3> 
<p class="subtitulo">${arrayPostagens[2].subtitulo}</p>
<div class="data">${arrayPostagens[2].data}</div>
<p>${arrayPostagens[2].texto}</p>
`
const main_treis = document.querySelector('main')
main_treis.appendChild(article3)

