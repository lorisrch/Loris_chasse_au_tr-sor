// Tableau 
function Tableau2D(x,y) {
    var array2D = new Array(x);
    for (var i = 0 ; i < array2D.length; i++){
        array2D[i] = new Array(y);

    }
    return array2D

}

//Création du tableau 
monTableau = Tableau2D(10,10);

function drawTableau2D(x,y,emplacement){
    let idString =""
    let texte = "<table>"
    for (let xx=0; xx < x; xx++){
        texte += `<tr>`
        for (let yy=0;yy < y; yy++){
            idstring = xx+"-"+yy
            texte += `<td id = "${idString}"></td>`
        }
        texte += `</tr>`
    }
    texte += `</table>`
    document.getElementById(emplacement).innerHTML = texte 
 

}

drawTableau2D(10,10,"ici")
let idCase = String(y) + "-" + String(x);
corpsTable = corpstable + <td> onclick= choix(this.id); id= +idCase + </td>
document.getElementById("emplacementTable").innerHTML = enteteTable + corpsTable + finTable;

caseTable = document.getElementById(idCellule);
caseTable.setAttribute('class', 'good');

let nomGagnant = window.prompt("Indiquez votre nom pour le score","anonyme")
document.getElementById('nom').value = nomGagnant
document.getElementById('score').value = nombreCoup
document.getElementById('appelScore').submit()

