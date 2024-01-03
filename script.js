//création d'un tableau_DOM_Js
// let lignes = prompt("Nombre de lignes ?");
// let colonnes = prompt("Nombre de colonnes ?");
// let tableau = "<table>";

// for (let i = 1; i <= lignes; i++) {
//   tableau = tableau + "<tr>";
//   for (let k = 1; k <= colonnes; k++) {
//     tableau = tableau + "<td> Anwar </td>";
//   }
//   tableau = tableau + "</tr>";
// }
// tableau = tableau + "</table>";
// document.body.innerHTML = tableau;

/***************************************************************************/
// Création 10 nombres aléatoires dans html
// let html = "<ul>";
// for (let i = 0; i <= 10; i++) {
//   html = html + "<li>" + Math.floor(Math.random() * 100) + "</li>";
// }
// html = html + "</ul>";
// document.body.innerHTML = html;
/***************************************************************************/
// insérer dans la page HTML 10 nombres aléatoires sous la forme d'une liste à puces,
//  compris entre 0 et 10 
//  afficher en console si le nombre 10 fait partie du tirage.
// let html = '<ul>';
// let nalea = 10;
// for(let i = 0;i < nalea;i++) {
//    let tmp = Math.floor(Math.random() * 11);
//    if(tmp == 10) {
//       console.log('Le nombre 10 fait parti du tirage.');
//    }
//    html = html + '<li>' + tmp + '</li>';
// }
// html = html + '</ul>';
// document.body.innerHTML = html;

/***************************************************************************/

// insérer dans la page HTML 10 nombres aléatoires sous la forme d'une liste à puces, 
//  compris entre 0 et 10 (inclus). 
//  Via une condition, compter le nombre de fois où le nombre 10 fait partie du tirage.
//  insérer en plus dans la page HTML le nombre en question.
// let html = '<ul>';
// let nalea = 10;
// let nalea10 = 0;
// for(let i = 0;i < nalea;i++) {
//    let tmp = Math.floor(Math.random() * 11);
//    if(tmp == 10) {
//       nalea10++;
//    }
//    html = html + '<li>' + tmp + '</li>';
// }
// html = html + '</ul>';
// html = html + '<p>Il y a eu ' + nalea10 + ' tirages de 10.</p>'
// document.body.innerHTML = html;
/***************************************************************************/
// A l'aide du code de l'exercice précédent et de cette nouvelle instruction, 
// écrire un code JS qui 
// modifie aléatoirement la couleur d'arrière-plan de l'élément HTML <body>.
// let r = Math.floor(Math.random() * 256);
// let g = Math.floor(Math.random() * 256);
// let b = Math.floor(Math.random() * 256);
// let color = "rgb(" + r + ", " + g + ", " + b + ")";
// document.body.style.background = color;
/***************************************************************************/
// Le service Picsum permet d'obtenir des images libres de droit depuis
//  une adresse web. Par exemple, le lien ci-dessous affiche l'image avec
//   l'identifiant #42 en résolution 350x350 :
// https://picsum.photos/id/42/350/350

// A l'aide de ce service, insérer dans la page HTML 
// 12 images alétoires depuis le service Picsum.
// 1024 est le nombre des id des photos dans picsum

// 1
let html = '';
let nalea = 12;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 1024);
   html = html + '<img src="https://picsum.photos/id/' + tmp + '/350/350" />';
}
document.body.innerHTML = html;

// 2
// let html = '';
// let nalea = 12;
// for(let i = 1;i <= nalea;i++) {
//    html = html + '<img src="https://picsum.photos/350/350?random=' + i + '" />';
// }
// document.body.innerHTML = html;