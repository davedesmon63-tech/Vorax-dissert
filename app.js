function generer(){

let sujets=[
"La liberté est-elle totale ?",
"La loi est-elle toujours juste ?",
"L'homme est-il libre ?",
"La justice dépend-elle de la société ?"
];

let s=sujets[Math.floor(Math.random()*sujets.length)];

document.getElementById("sujet").innerHTML=s;
}


function astuce(){

let astuces=[
"Toujours définir les mots du sujet",
"Fais un plan en 2 ou 3 parties",
"Utilise des exemples concrets",
"Rédige une bonne problématique"
];

let a=astuces[Math.floor(Math.random()*astuces.length)];

document.getElementById("astuce").innerHTML=a;
}
