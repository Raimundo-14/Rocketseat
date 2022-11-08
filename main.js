function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="assets/icon=${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="assets/icon=${player2}.svg" alt="Bardeira da ${player2}">
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
  createCard("20/11", "DOMINGO", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "SEGUNDA",
    createGame("england", "10:00", "iran") +
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
    createGame("marrocos", "07:00", "croacia") +
      createGame("alemanha", "10:00", "japao") +
      createGame("espanha", "13:00", "costa-rica") +
      createGame("belgica", "16:00", "canada")
  )
