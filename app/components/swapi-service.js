import Person from "../models/Person.js";
import Starship from "../models/Starship.js";
import Planet from "../models/Planet.js";
import Vehicle from "../models/Vehicle.js";

let people = {}


export default class SwapiService {
    getPeople(draw, drawError) {
        console.log("HELLO FROM SWAPISERVICE")
        fetch('https://swapi.co/api/people')
          .then(res => res.json())
          .then(res => {
            let myPeople = res.results.map(rawPerson => {
                let person = new Person(rawPerson)
                people[person.id] = person
                return person
            })
            draw(myPeople)
          })
          .catch(drawError)
    
        console.log("HERE I AM")
      }

    getStarships(draw, drawError) {
      console.log("HELLO FROM SWAPISERVICE")
      fetch('https://swapi.co/api/starships')
        .then(res => res.json())
        .then(res => {
            let myStarships = res.results.map(rawStarship => {
                return new Starship(rawStarship)
            })
            draw(myStarships)
        })
        .catch(drawError)
  
      console.log("HERE I AM")
    }
    getPlanets(draw, drawError) {
        console.log("HELLO FROM SWAPISERVICE")
        fetch('https://swapi.co/api/planets')
          .then(res => res.json())
          .then(res => {
              let myPlanets = res.results.map(rawPlanet => {
                  return new Planet (rawPlanet)
              })
              draw(myPlanets)
          })
          .catch(drawError)
    
        console.log("HERE I AM")
      }
      getVehicles(draw, drawError) {
        console.log("HELLO FROM SWAPISERVICE")
        fetch('https://swapi.co/api/vehicles')
          .then(res => res.json())
          .then(res => {
              let myVehicles = res.results.map(rawVehicle => {
                  return new Vehicle (rawVehicle)
              })
              draw(myVehicles)
          })
          .catch(drawError)
    
        console.log("HERE I AM")
      }
  
  }