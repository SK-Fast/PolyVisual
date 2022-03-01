import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app-check.js";
import { getStorage, ref, uploadString, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js";

const shareOutput = document.getElementById("shareOutput")
const shareURL = document.getElementById("shareURL")
const shareEmbed = document.getElementById("shareEmbed")
const shareBtn = document.getElementById("shareBtn")

const app = initializeApp(firebaseConfig);

const storage = getStorage();

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LfRMgoeAAAAADCUrVqooqDKagG_OwwyLk3ZYdkE'),
  
 
    isTokenAutoRefreshEnabled: true
  });

let processing = false

const db = getFirestore();

function makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

async function ShareCode() {
    console.log("Sharing the project..")
    shareOutput.style.display = "inline"

    shareURL.setAttribute("value","Loading...")
    shareEmbed.setAttribute("value","Loading...")

    let resultSaveXML = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
    let productSave = Blockly.Xml.domToText(resultSaveXML)

    const saveId = makeid(10)

    const storageRef = ref(storage, 'shared/' + saveId + ".ptmv");
    await uploadString(storageRef, productSave)

    await setDoc(doc(db, "Shared", saveId), {fileID: saveId});

    shareURL.setAttribute("value","https://polyvisual.devpixels.xyz?shareID=" + saveId)
    shareEmbed.setAttribute("value",`<iframe src="${"https://polyvisual.devpixels.xyz?shareID=" + saveId}" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="400px" width="600px" allowfullscreen></iframe>`)

}

shareBtn.addEventListener("click",ShareCode)

const url = new URL(window.location.href);
const shareID = url.searchParams.get("shareID");
if (shareID) {
    async function load() {
        shareBtn.innerHTML = "Loading Shared Project..."
        const projectDataDoc = await getDoc(doc(db, "Shared", shareID))
        if (!projectDataDoc.exists()) {
            shareBtn.innerHTML = "Share"

            console.log("Project not found.");
            return
          }
        const projectData = projectDataDoc.data()

        const downloadURL = await getDownloadURL(ref(storage, 'shared/' + projectData.fileID + ".ptmv"))

        fetch(downloadURL)
            .then(function(response) {
                response.text().then(function(text) {
                    Blockly.mainWorkspace.clear()
                    let domText = Blockly.Xml.textToDom(text)
                    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace,domText)
                    shareBtn.innerHTML = "Share"

                });
            });
    }

    load()
}