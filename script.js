onload = init

function init() {
  var onclick = clickUpdates()
  var btn = document.getElementById("bttn")
  bttn.addEventListener("click", onclick, false)
}

function clickUpdates() {
  var count = 0
  var next = function () {
    switch (count) {
      case 0:
        document.getElementById("carrosel").style.margin = "64px 0px 0px -700px"
        break
      case 1:
        document.getElementById("carrosel").style.margin = "64px 0px 0px -1500px"
        break
      default:
    }
    count = count < 3 ? count + 1 : 3
  }
  return next
}