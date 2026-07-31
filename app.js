function cours(){

let matiere = document.getElementById("matiere").value;
let type = document.getElementById("typeCours").value;

let contenu = "";

if(matiere === "Français"){

if(type === "Introduction"){
contenu = "📚 Introduction : Présente le sujet et pose une question.";
}

if(type === "Argument"){
contenu = "📚 Argument : Une idée que tu défends. Exemple : L’école est importante.";
}

if(type === "Conclusion"){
contenu = "📚 Conclusion : Résume et répond à la question.";
}

}

if(matiere === "Anglais"){
contenu = "📚 Essay = Introduction + Body + Conclusion";
}

if(matiere === "Histoire-Géo"){
contenu = "📚 HG = idées + faits + dates";
}

document.getElementById("contenuCours").innerText = contenu;

}


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


function genererSujet(){

let sujets = [
"La liberté est-elle une illusion ?",
"L’éducation rend-elle meilleur ?",
"La justice est-elle toujours juste ?"
];

let s = sujets[Math.floor(Math.random()*sujets.length)];

document.getElementById("sujet-test").innerHTML = "<b>Sujet :</b> " + s;
}


function corrigerIA(){

let texte = document.getElementById("copie").value;

let note = 0;
let feedback = "";

if(texte.length > 300){
note += 8;
feedback += "✔ Bonne longueur<br>";
}else{
feedback += "❌ Trop court<br>";
}

if(texte.includes("par exemple")){
note += 4;
feedback += "✔ Exemple présent<br>";
}else{
feedback += "❌ Ajoute des exemples<br>";
}

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
