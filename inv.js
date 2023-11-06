let x = console.log
import { player } from "./char.js"



// display the imported stats for player
displayPlayerStats()
function displayPlayerStats() {
  document.getElementById("HPinv").innerText = "HP: " + player.HP
  document.getElementById("AGinv").innerText = "AG: " + player.AG
  document.getElementById("STinv").innerText = "ST: " + player.ST
  document.getElementById("PEinv").innerText = "PE: " + player.PE
  document.getElementById("HDinv").innerText = "HD: " + player.HD
}

let objectsInInv = []
// item class constructor
export class itemClass {
  constructor(name, slot) {
    this.name = name
    this.slot = slot

  }
}
class Weapon extends itemClass {
  constructor(name, slot, damage, actionPoints) {
    super(name, slot)
    this.damage = damage
    this.actionPoints = actionPoints
    objectsInInv.push(this)
  }
}

class Buff extends itemClass {
  constructor(name, slot, buff, AGmodifier) {
    super(name, slot)
    this.buff = buff
    this.AGmodifier = AGmodifier
    objectsInInv.push(this)
  }
}
class Potion extends itemClass {
  constructor(name, slot, healingvalue, HPmodifier) {
    super(name, slot)
    this.healingvalue = healingvalue
    this.HPmodifier = HPmodifier
    objectsInInv.push(this)
  }
}
// make weapons
const knife = new Weapon("Knife", "weapon", Math.floor((3 * player.ST) / 9), 3)
const meatcleaver = new Weapon("Meat Cleaver", "weapon", Math.floor((4 * player.ST) / 9), 4)
const baseballbat = new Weapon("Baseball Bat", "weapon", Math.floor((4 * player.ST) / 9), 3)
// make buffs
const runningshoes = new Buff("Running Shoes", "buff", 1)
// make health stuff
const milk = new Potion("Milk", "health", 2)




//let invArr = ["Milk", "Running_Shoes"]
//invArr.push(givenWeapon)

const weaponBox = document.getElementById("invGrid1b_weaponBox")
const buffBox = document.getElementById("invGrid1b_buffBox")
const invBox = document.getElementById("invGrid1b_InvBox")
const healthBox = document.getElementById("invGrid1b_healthBox")
const discardBox = document.getElementById("invGrid1b_discardBox")

// Placeholder for items
let invArr = [knife.name, milk.name, runningshoes.name]



//import inventory items from localstorage
let currentWeapon = localStorage.getItem('weapon')
let currentBuff = localStorage.getItem('buff')


document.addEventListener("DOMContentLoaded", function () {
  const dropzones = document.getElementsByClassName('box');


  for (let i = 0; i < invArr.length; i++) {
    const item = invArr[i];
    const newItem = createInventoryItem(item)


    for (let j = 0; j < dropzones.length; j++) {
      const dropzone = dropzones[j];
      dropzone.addEventListener("dragover", function (e) {
        e.preventDefault()
      })

      dropzone.addEventListener("drop", function (e) {
        e.preventDefault()
        const data = e.dataTransfer.getData("text/plain")

        //Checks inv box
        if (invBox == dropzone) {
          if (invBox.childElementCount > 4) {
            x("inv occupied")
          } else {
            if (data === item) {
              dropzone.appendChild(newItem)
              if (weaponBox.children.length == 0) {
                localStorage.removeItem('weapon')
              }
              if (buffBox.children.length == 0) {
                localStorage.removeItem('buff')
              }

            }
          }
        }

        //Checks weaponBox
        if (weaponBox == dropzone) {
          if (weaponBox.childElementCount > 0) {
            x("weppon okkipado")
          } else {
            const foundObject = objectsInInv.find(obj => obj.name === data)
            if (foundObject.slot == 'weapon' && data === item) {
              dropzone.appendChild(newItem)
              localStorage.setItem('weapon', newItem.innerText)

            }
          }
        }

        //Checks buffBox
        if (buffBox == dropzone) {
          if (buffBox.childElementCount > 0) {
            x("occipied")
          } else {
            const foundObject = objectsInInv.find(obj => obj.name === data)
            if (foundObject.slot == 'buff' && data === item) {
              dropzone.appendChild(newItem)
              localStorage.setItem('buff', newItem.innerText)

            }
          }
        }

        //Checks healthBox but doesnt do anything right now
        if (healthBox == dropzone) {
          const foundObject = objectsInInv.find(obj => obj.name === data)
          if (foundObject.slot == 'health' && data === item) {
            player.HP = player.HP + foundObject.healingvalue
            document.getElementById('HPinv').innerText = "HP: " + player.HP
            dropzone.appendChild(newItem)
          }
        }

        //Checks discardBox but doesnt do any thing right now
        if (discardBox == dropzone) {
          if (data === item) {
            dropzone.appendChild(newItem)
          }
        }

      })
    }
  }
})

function createInventoryItem(itemName) {
  // create a new div element
  const newItem = document.createElement('div')
  newItem.setAttribute("id", itemName)
  newItem.setAttribute("class", "invGrid1b_InvItems")
  newItem.setAttribute('draggable', "true")
  let text = itemName.replace("_", " ")
  newItem.innerText = text

  // add the newly created element and its content into the DOM
  let parent = document.getElementById("invGrid1b_InvBox")

  // appends item if it exists in local storage
  switch (text) {
    case currentWeapon:
      weaponBox.appendChild(newItem)
      break
    case currentBuff:
      buffBox.appendChild(newItem)
      break

    default:
      parent.appendChild(newItem)
  }

  newItem.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", itemName)
  })

  return newItem
}

