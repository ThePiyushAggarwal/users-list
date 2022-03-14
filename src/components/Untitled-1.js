const getFact = () => {
  return fetch('https://catfact.ninja/facts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
const createFactDiv = (fact) => {
  const factContainer = document.createElement('div')
  const setup = document.createElement('p')

  setup.innerText = fact.data
  console.log(fact.data)
  factContainer.append(setup)

  return factContainer
}
const appendFact = (factDiv) => {
  const factContainer = document.getElementById('factContainer')
  factContainer.append(factDiv)
}

//This is unused
/*
    document.addEventListener('DOMContentLoaded', () => {
    })
    */

getFact().then((fact) => {
  const factDiv = createFactDiv(fact)
  appendFact(factDiv)
})
