


// hide buttons
hideButtons()
hideTextButtons()
//hide map button until player has seen all text
//document.getElementById('mapButton').style.visibility = 'hidden'

// All scenarios:
//Hour 0:
let shed = ["You wake up in a dirty shed <br> Your head hurt but you feel otherwise alright.",
  "You look around. When did you get here? On the ground right in front of you <br> there is a bag.",
  "Inside the bag there are a few items."]

// Shed: hour 0
//document.getElementById("worldText").innerHTML = shed[0]
//document.getElementById('nextButton').style.visibility = 'visible'

//prevNextText(shed)




// Switch for hour 1. Fields, Cave or Hills.
switch (localStorage.getItem("currentPlace")) {
  case "fields":

    let fields = ["Wow what a lovely field! <br>", "This is the second text", "This is the third phrase"]
    document.querySelector('.worldBox').style.backgroundImage = "url('img/fields1.png')"
    document.getElementById("worldText").innerHTML = fields[0]
    document.getElementById('nextButton').style.visibility = 'visible'
    prevNextText(fields)

    break;
  case "cave":

    let cave = ["Wow what a lovely cave! <br>", "This is the second text", "This is the third phrase"]
    document.querySelector('.worldBox').style.backgroundImage = "url('img/cave1.png')"
    document.getElementById("worldText").innerHTML = cave[0]
    document.getElementById('nextButton').style.visibility = 'visible'
    prevNextText(cave)


    break;

  case "forest":

    let forest = ["Wow what a lovely forest! <br>", "This is the second text", "This is the third phrase"]
    document.querySelector('.worldBox').style.backgroundImage = "url('img/forest1.png')"
    document.getElementById("worldText").innerHTML = forest[0]
    document.getElementById('nextButton').style.visibility = 'visible'

    prevNextText(forest)

    break;

  default:
    break;
}




// Makes text buttons work and show all text as pages
function prevNextText(text) {
  document.getElementById('nextButton').onclick = function () {
    let nextText = text.indexOf(document.getElementById("worldText").innerHTML)


    if (text.indexOf(document.getElementById("worldText").innerHTML) == (text.length - 1)) {
      document.getElementById("worldText").innerHTML = text[nextText]
      showButtons()
      hideTextButtons()
      //document.getElementById('mapButton').style.visibility = 'visible'

    } else {
      document.getElementById("worldText").innerHTML = text[nextText + 1]
      document.getElementById('prevButton').style.visibility = 'visible'

    }

  }
  document.getElementById('prevButton').onclick = function () {

    let prevText = text.indexOf(document.getElementById("worldText").innerHTML)
    if (text.indexOf(document.getElementById("worldText").innerHTML) == 1) {
      document.getElementById('prevButton').style.visibility = 'hidden'
    }
    if (text.indexOf(document.getElementById("worldText").innerHTML) < 1) {
      document.getElementById("worldText").innerHTML = text[prevText]
    } else {
      document.getElementById("worldText").innerHTML = text[prevText - 1]

    }

  }

}



function hideButtons() {
  document.getElementById('searchButton').style.visibility = 'hidden'
  document.getElementById('restButton').style.visibility = 'hidden'
  document.getElementById('fightButton').style.visibility = 'hidden'
}
function showButtons() {
  document.getElementById('searchButton').style.visibility = 'visible'
  document.getElementById('restButton').style.visibility = 'visible'
  document.getElementById('fightButton').style.visibility = 'visible'
}

function hideTextButtons() {
  document.getElementById('prevButton').style.visibility = 'hidden'
  document.getElementById('nextButton').style.visibility = 'hidden'
}

function showTextButtons() {
  document.getElementById('prevButton').style.visibility = 'visible'
  document.getElementById('nextButton').style.visibility = 'visible'
}