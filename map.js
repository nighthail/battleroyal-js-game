

// Available places from where the player is

//remove this to make script work again 
//let currentPlace = "cave"

import { start } from "./char.js"
let hour = start.HOUR
console.log(hour)

let allPlaces = ["fields", "cave", "hills", "shed", "coast", "forest"]
let availablePlaces = []
let unavailablePlaces = []

//checks if current place already exists in localstorage
onOpen()
function onOpen() {
  if (localStorage.getItem("currentPlace") === null) {
    let currentPlace = start.PLACE

    updateMapSpot(currentPlace)
  }
  else {
    let currentPlace = localStorage.getItem("currentPlace")
    updateMapSpot(currentPlace)

  }
}


//Hover to show text
document.getElementById("mapPointer").onmouseover = function () {
  document.getElementById('mapText').innerHTML = "You are here"

}
document.getElementById("mapPointer").onmouseleave = function () {
  document.getElementById('mapText').innerHTML = "Click on map to move to new location"

}




function updateMapSpot(currentPlace) {
  switch (currentPlace) {
    case "cave":
      // saves spot in local storage
      localStorage.setItem("currentPlace", currentPlace)


      availablePlaces = ["hills", "shed", "fields", "forest"]
      unavailablePlaces = allPlaces.filter(x => !availablePlaces.includes(x))

      document.getElementById('mapPointer').style.marginTop = '80px'
      document.getElementById('mapPointer').style.marginLeft = '220px'

      for (let i = 0; i < unavailablePlaces.length; i++) {
        document.getElementById(unavailablePlaces[i]).style.filter = 'none'

      }
      for (let j = 0; j < availablePlaces.length; j++) {
        document.getElementById(availablePlaces[j]).style.filter = 'invert(100%)'
        document.getElementById(availablePlaces[j]).onclick = function () {
          updateMapSpot(this.id)
        }
      }

      break;
    case "coast":
      // saves spot in local storage
      localStorage.setItem("currentPlace", currentPlace)


      availablePlaces = ["fields", "forest"]

      unavailablePlaces = allPlaces.filter(x => !availablePlaces.includes(x))

      document.getElementById('mapPointer').style.marginTop = '240px'
      document.getElementById('mapPointer').style.marginLeft = '130px'

      for (let i = 0; i < unavailablePlaces.length; i++) {
        document.getElementById(unavailablePlaces[i]).style.filter = 'none'

      }
      for (let j = 0; j < availablePlaces.length; j++) {
        document.getElementById(availablePlaces[j]).style.filter = 'invert(100%)'
        document.getElementById(availablePlaces[j]).onclick = function () {
          updateMapSpot(this.id)
        }
      }
      break;
    case "forest":
      // saves spot in local storage
      localStorage.setItem("currentPlace", currentPlace)


      availablePlaces = ["fields", "cave", "coast"]

      unavailablePlaces = allPlaces.filter(x => !availablePlaces.includes(x))

      document.getElementById('mapPointer').style.marginTop = '140px'
      document.getElementById('mapPointer').style.marginLeft = '130px'

      for (let i = 0; i < unavailablePlaces.length; i++) {
        document.getElementById(unavailablePlaces[i]).style.filter = 'none'

      }
      for (let j = 0; j < availablePlaces.length; j++) {
        document.getElementById(availablePlaces[j]).style.filter = 'invert(100%)'
        document.getElementById(availablePlaces[j]).onclick = function () {
          updateMapSpot(this.id)
        }
      }
      break;
    case "fields":
      // saves spot in local storage
      localStorage.setItem("currentPlace", currentPlace)


      availablePlaces = ["shed", "cave", "coast", "forest"]

      unavailablePlaces = allPlaces.filter(x => !availablePlaces.includes(x))

      document.getElementById('mapPointer').style.marginTop = '180px'
      document.getElementById('mapPointer').style.marginLeft = '230px'

      for (let i = 0; i < unavailablePlaces.length; i++) {
        document.getElementById(unavailablePlaces[i]).style.filter = 'none'

      }
      for (let j = 0; j < availablePlaces.length; j++) {
        document.getElementById(availablePlaces[j]).style.filter = 'invert(100%)'
        document.getElementById(availablePlaces[j]).onclick = function () {
          updateMapSpot(this.id)
        }
      }

      break;
    case "hills":
      // saves spot in local storage
      localStorage.setItem("currentPlace", currentPlace)


      availablePlaces = ["shed", "cave"]

      unavailablePlaces = allPlaces.filter(x => !availablePlaces.includes(x))

      document.getElementById('mapPointer').style.marginTop = '10px'
      document.getElementById('mapPointer').style.marginLeft = '290px'

      for (let i = 0; i < unavailablePlaces.length; i++) {
        document.getElementById(unavailablePlaces[i]).style.filter = 'none'

      }
      for (let j = 0; j < availablePlaces.length; j++) {
        document.getElementById(availablePlaces[j]).style.filter = 'invert(100%)'
        document.getElementById(availablePlaces[j]).onclick = function () {
          updateMapSpot(this.id)
        }
      }
      break;
    case "shed":
      // saves spot in local storage
      localStorage.setItem("currentPlace", currentPlace)


      availablePlaces = ["fields", "cave", "hills"]


      unavailablePlaces = allPlaces.filter(x => !availablePlaces.includes(x))

      document.getElementById('mapPointer').style.marginTop = '120px'
      document.getElementById('mapPointer').style.marginLeft = '340px'

      for (let i = 0; i < unavailablePlaces.length; i++) {
        document.getElementById(unavailablePlaces[i]).style.filter = 'none'

      }
      for (let j = 0; j < availablePlaces.length; j++) {
        document.getElementById(availablePlaces[j]).style.filter = 'invert(100%)'
        document.getElementById(availablePlaces[j]).onclick = function () {
          updateMapSpot(this.id)
        }
      }
      break;
    default:
      availablePlaces = ["fields", "cave", "hills"]
  }


}