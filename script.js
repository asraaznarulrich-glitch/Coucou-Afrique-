// BASE DE DONNÉES SIMULÉE (MVP)
const bourses = [
  {
    titre: "Bourse Eiffel",
    pays: "France",
    domaine: "Tous domaines",
    deadline: "15 Mars 2026",
    description: "Bourse d'excellence du gouvernement français."
  },
  {
    titre: "Bourse Canada Excellence",
    pays: "Canada",
    domaine: "Informatique",
    deadline: "20 Juin 2026",
    description: "Programme pour étudiants internationaux."
  },
  {
    titre: "Erasmus+",
    pays: "Europe",
    domaine: "Tous domaines",
    deadline: "1 Avril 2026",
    description: "Programme d'échange universitaire européen."
  },
  {
    titre: "Bourse Maroc",
    pays: "Maroc",
    domaine: "Ingénierie",
    deadline: "10 Mai 2026",
    description: "Bourse pour étudiants africains."
  }
];

// AFFICHER TOUT AU DÉPART
window.onload = () => {
  displayBourses(bourses);
};

// AFFICHAGE
function displayBourses(data) {
  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  data.forEach(b => {
    container.innerHTML += `
      <div class="card">
        <h3>${b.titre}</h3>
        <p><strong>Pays:</strong> ${b.pays}</p>
        <p><strong>Domaine:</strong> ${b.domaine}</p>
        <p><strong>Deadline:</strong> ${b.deadline}</p>
        <p>${b.description}</p>
      </div>
    `;
  });
}

// RECHERCHE
function searchBourses() {
  const value = document.getElementById("searchInput").value.toLowerCase();

  const filtered = bourses.filter(b =>
    b.titre.toLowerCase().includes(value) ||
    b.pays.toLowerCase().includes(value) ||
    b.domaine.toLowerCase().includes(value)
  );

  displayBourses(filtered);
}

// FILTRES RAPIDES
function filter(pays) {
  const filtered = bourses.filter(b => b.pays.includes(pays));
  displayBourses(filtered);
}
