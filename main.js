function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="assets1/icon=${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="assets1/icon=${player2}.svg" alt="Bardeira da ${player2}">
    </li>
  `
}
let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
      <ul>
       ${games} 
      </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "DOMINGO", createGame("catar", "13:00", "equador")) +
  createCard(
    "21/11",
    "SEGUNDA",
    createGame("inglaterra", "10:00", "iran") +
      createGame("estados-unidos", "16:00", "pais-de-gales")
  ) +
  createCard(
    "22/11",
    "TERÇA",
    createGame("argentina", "07:00", "arabia-saudita") +
      createGame("dinamarca", "10:00", "tunisia") +
      createGame("mexico", "13:00", "polonia") +
      createGame("frança", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "QUARTA",
    createGame("marrocos", "07:00", "croacia") +
      createGame("alemanha", "10:00", "japao") +
      createGame("espanha", "13:00", "costa-rica") +
      createGame("belgica", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "QUINTA",
    createGame("suiça", "07:00", "camaroes") +
      createGame("uruguai", "10:00", "corea-do-sul") +
      createGame("portugal", "13:00", "gana") +
      createGame("brazil", "16:00", "servia")
  ) +
  createCard(
    "25/11",
    "SEXTA",
    createGame("pais-de-gales", "07:00", "iran") +
      createGame("catar", "10:00", "senegal") +
      createGame("holanda", "13:00", "equador") +
      createGame("inglaterra", "16:00", "estados-unidos")
  ) +
  createCard(
    "27/11",
    "DOMINGO",
    createGame("japao", "07:00", "costa-rica") +
      createGame("belgica", "10:00", "marrocos") +
      createGame("croacia", "13:00", "canada") +
      createGame("espanha", "16:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGame("camaroes", "07:00", "servia") +
      createGame("corea-do-sul", "10:00", "gana") +
      createGame("brazil", "13:00", "suiça") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "TERÇA",
    createGame("equador", "07:00", "senegal") +
      createGame("holanda", "10:00", "catar") +
      createGame("iran", "13:00", "estados-unidos") +
      createGame("pais-de-gales", "16:00", "inglaterra")
  ) +
  createCard(
    "30/11",
    "QUARTA",
    createGame("tunisia", "07:00", "frança") +
      createGame("australia", "10:00", "dinamarca") +
      createGame("polonia", "13:00", "argentina") +
      createGame("arabia-saudita", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "QUINTA",
    createGame("croacia", "07:00", "belgica") +
      createGame("canada", "10:00", "marrocos") +
      createGame("japao", "13:00", "espanha") +
      createGame("costa-rica", "16:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "SEXTA",
    createGame("corea-do-sul", "07:00", "portugal") +
      createGame("gana", "10:00", "uruguai") +
      createGame("servia", "13:00", "suiça") +
      createGame("camaroes", "16:00", "brazil")
  )
