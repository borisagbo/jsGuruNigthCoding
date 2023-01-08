const prompt= require("prompt-sync")({sigint:true});
 let scorePlayer=0
let scoreMachine=0
let scoreNulle=0
function perre_papier_ciseau() {

    let tour=0
    let tourChose = prompt("vous voullez passer combien de tour?")
    let message ="Entre ton choix 1 pour pierre , 2 pour papier, 3  cisceau  :"

    while (tour< tourChose){
        console.log(cheker(prompt(message),Math.floor(Math.random() * (2))))
        tour++;
        if(tour>=tourChose){
            console.log("-----------fin de la partie ------------")
            console.log("Score Joueur : " + scorePlayer )
            console.log("Score Machine : " + scoreMachine )
            console.log("Score Nulle : "+ scoreNulle)
            console.log(scoreMachine>scorePlayer?"En gros tu as perdu":"Felicitations")
            console.log("-----------fin de la partie ------------")
        }
    }
}
 function cheker(userSelection,machineSelection) {
     if (
         (userSelection-1)  === 0 && machineSelection ===2 ||
         (userSelection-1)  === 1 && machineSelection ===2  ||
         (userSelection-1)  === 2 && machineSelection ===1  )
     {
         scorePlayer++;
         return "Tu as gagné"

     }else if(userSelection-1 === machineSelection){
         scoreNulle++
         return "Match null"
     }else{
         scoreMachine++;
         return "Tu as perdu tonton"

     }
 }

perre_papier_ciseau()
