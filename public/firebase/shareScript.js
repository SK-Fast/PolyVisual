const shareOutput = document.getElementById("shareOutput")
const shareURL = document.getElementById("shareURL")
const shareEmbed = document.getElementById("shareEmbed")
const shareBtn = document.getElementById("shareBtn")

let processing = false

function ShareCode() {
    console.log("Sharing the project..")
    shareOutput.style.display = true
}

shareBtn.addEventListener("click",ShareCode)