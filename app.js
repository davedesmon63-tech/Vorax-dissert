// IA PROF
function cours(){

let matiere = document.getElementById("matiere").value;
let type = document.getElementById("typeCours").value;

let contenu = "";

if(matiere === "Français"){

if(type === "Introduction"){
contenu = "📚 INTRODUCTION\n\nPrésente le sujet + pose une question.\nEx: La liberté est importante, mais est-elle totale ?";
}

if(type === "Argument"){
contenu = "📚 ARGUMENT\n\nUne idée que tu défends.\nEx: L’école est importante car elle éduque.";
}

if(type === "Conclusion"){
contenu = "📚 CONCLUSION\n\nRésume + répond.\nEx: L’école est donc essentielle.";
}

}

if(matiere === "Anglais"){
contenu = "📚 Essay = Introduction + Body + Conclusion\nUse arguments + examples.";
}

if(matiere === "Histoire-Géo"){
contenu = "📚 HG = idées + faits + dates.\nToujours expliquer avec précision.";
}

document.getElementById("contenuCours").innerText = contenu;

}

// LEÇON SIMPLE
function lecon(){

let contenu = `
👉 ARGUMENT = idée 💭
👉 EXEMPLE = preuve 📌

Exemple :
Argument : L’école est utile
Exemple : On apprend à lire
`;

document.getElementById("lecon").innerText = contenu;

}

// SUJET
function genererSujet(){

let sujets = [
"La liberté est-elle une illusion ?",
"L’éducation rend-elle meilleur ?",
"La justice est-elle toujours juste ?",
"L’homme est-il libre ?"
];

let s = sujets[Math.floor(Math.random()*sujets.length)];

document.getElementById("sujet-test").innerHTML = "<b>Sujet :</b> " + s;
}

// CORRECTION
function corrigerIA(){

let texte = document.getElementById("copie").value;

let note = 0;
let feedback = "";

// longueur
if(texte.length > 300){
note += 8;
feedback += "✔ Bonne longueur<br>";
}else{
feedback += "❌ Trop court<br>";
}

// exemple
if(texte.includes("par exemple")){
note += 4;
feedback += "✔ Exemple présent<br>";
}else{
feedback += "❌ Ajoute des exemples<br>";
}

// structure
if(texte.includes("introduction") || texte.includes("conclusion")){
note += 4;
feedback += "✔ Structure visible<br>";
}else{
feedback += "❌ Structure faible<br>";
}

document.getElementById("resultat").innerHTML =
"📊 Note : " + note + "/20 <br><br>" +
"🧠 Analyse : <br>" + feedback;

}
