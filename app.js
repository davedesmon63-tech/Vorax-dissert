"use client";
import { useState } from "react";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [level, setLevel] = useState("facile");
  const [progress, setProgress] = useState(0);
  const [course, setCourse] = useState("");

  // 🎯 Générateur de sujets selon niveau
  const generateSubject = () => {
    const sujets = {
      facile: [
        "L'école est-elle importante ?",
        "Faut-il aller à l'école ?"
      ],
      moyen: [
        "L’éducation rend-elle l’homme meilleur ?",
        "L’école suffit-elle pour réussir ?"
      ],
      bac: [
        "L’éducation garantit-elle la réussite sociale ?",
        "L’école forme-t-elle vraiment l’esprit critique ?"
      ]
    };

    const list = sujets[level];
    const random = list[Math.floor(Math.random() * list.length)];
    setSubject(random);
  };

  // 🤖 IA PROF (cours dynamique)
  const generateCourse = () => {
    setCourse(`
📚 COURS COMPLET - Niveau ${level.toUpperCase()}

🧠 ARGUMENT :
Une idée qui répond à "POURQUOI ?"

📌 EXEMPLE :
Une preuve qui commence souvent par "Par exemple"

🔥 STRUCTURE :
Argument ➜ Explication ➜ Exemple

🎯 Exemple parfait :
L’école est importante (argument), parce qu’elle permet d’apprendre (explication).
Par exemple, on apprend à lire et écrire (exemple).

💡 ASTUCE :
Toujours utiliser :
- "Parce que"
- "Par exemple"

🚫 ERREURS :
- Pas d'exemple
- Texte trop court
- Pas de structure
`);
  };

  // 🧠 Correction intelligente
  const correctCopy = () => {
    let score = 0;
    let feedback = [];

    if (text.length > 150) {
      score += 5;
    } else {
      feedback.push("❌ Trop court");
    }

    if (text.includes("parce que")) {
      score += 5;
    } else {
      feedback.push("❌ Ajoute 'parce que'");
    }

    if (text.includes("par exemple")) {
      score += 5;
    } else {
      feedback.push("❌ Ajoute un exemple");
    }

    if (text.split(".").length > 3) {
      score += 5;
    } else {
      feedback.push("❌ Mauvaise structure");
    }

    // 📈 progression
    setProgress(progress + 10);

    setResult({
      score: score + "/20",
      feedback
    });
  };

  return (
    <div style={{ padding: 20, color: "white", background: "#0f172a", minHeight: "100vh" }}>
      <h1>🎓 Vorax Learn IA</h1>

      {/* 🎯 Niveau */}
      <h3>Choisir niveau</h3>
      <select onChange={(e) => setLevel(e.target.value)}>
        <option value="facile">Facile</option>
        <option value="moyen">Moyen</option>
        <option value="bac">Bac</option>
      </select>

      {/* 🤖 IA PROF */}
      <h3>🤖 IA Prof</h3>
      <button onClick={generateCourse}>Générer un cours</button>
      <pre>{course}</pre>

      {/* 📝 Sujet */}
      <h3>📄 Sujet</h3>
      <button onClick={generateSubject}>Nouveau sujet</button>
      <p>{subject}</p>

      {/* ✍️ Rédaction */}
      <textarea
        placeholder="Écris ta dissertation ici..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: 150 }}
      />

      <br /><br />
      <button onClick={correctCopy}>Corriger</button>

      {/* 📊 Résultat */}
      {result && (
        <div>
          <h3>📊 Note : {result.score}</h3>
          {result.feedback.map((f, i) => (
            <p key={i}>{f}</p>
          ))}
        </div>
      )}

      {/* 📈 Progression */}
      <h3>📈 Progression</h3>
      <div style={{ background: "gray", height: 20 }}>
        <div style={{ background: "green", width: progress + "%" , height: 20 }}></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
                }
