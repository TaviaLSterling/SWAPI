import SwapiService from "./swapi-service.js";

const swapiService = new SwapiService
let app = document.getElementById('app')

function draw(data) {
  console.log(data)
  app.innerHTML = `
  <div id="error"></div>

  <div class="row">
  <div class="col-sm-4">
  <button onclick="app.controllers.swapi.getStarships()">
  Get Starships
  </button>
  <div id="starships"></div>
  </div>
  </div>
  <br>
  
  <div class="row">
  <div class="col-sm-4">
  <button onclick="app.controllers.swapi.getPeople()">
  Get People
  </button>
  <div id="people"></div>
  </div>
  </div>
  <br>

  <div class="row">
  <div class="col-sm-4">
  <button onclick="app.controllers.swapi.getPlanets()">
  Get Planets
  </button>
  <div id="planets"></div>
  </div>
  </div>
  <br>

  <div class="row">
  <div class="col-sm-4">
  <button onclick="app.controllers.swapi.getVehicles()">
  Get Vehicles
  </button>
  <div id="vehicles"></div>
  </div>
  </div>
  `
}

function drawStarships(data) {
  let starshipsElem = document.getElementById('starships')
  let template = ''
  data.forEach(starship => {
    template += `<div>
    ${starship.name}
    </div>`
  })

  starshipsElem.innerHTML = template

}
function drawPeople(data) {
    let peopleElem = document.getElementById('people')
    let template = ''
    data.forEach(person => {
      template += `<div>
      ${person.name}
      </div>`
    })
  
    peopleElem.innerHTML = template
  
  }

  function drawPlanets(data) {
    let planetsElem = document.getElementById('planets')
    let template = ''
    data.forEach(planet => {
      template += `<div>
      ${planet.name}
      </div>`
    })
  
    planetsElem.innerHTML = template
  
  }
  function drawVehicles(data) {
    let vehiclesElem = document.getElementById('vehicles')
    let template = ''
    data.forEach(vehicle => {
      template += `<div>
      ${vehicle.name}
      </div>`
    })
  
    vehiclesElem.innerHTML = template
  
  }

function drawError(error) {
  console.log(error)
  document.getElementById('error').innerHTML = error.message
}


export default class SwapiController {
  constructor() {
    draw()
   
  }

  getStarships() {
    console.log("HELLO FROM CONTROLLER")
    swapiService.getStarships(drawStarships, drawError)
    
  }
  getPeople() {
      swapiService.getPeople(drawPeople, drawError)
  }

  getPlanets() {
      swapiService.getPlanets(drawPlanets,drawError)
  }
  getVehicles() {
    swapiService.getVehicles(drawVehicles,drawError)
}
}
