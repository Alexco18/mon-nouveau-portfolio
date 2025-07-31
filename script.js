function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showPage(type) {
  showView('page');
  const title = {
    profil: 'Mon Profil',
    pro: 'Mes Projets Pro',
    scolaire: 'Projets Scolaires',
    perso: 'Projets Perso'
  };
  document.getElementById('page-title').textContent = title[type];
  document.getElementById('page-description').textContent = `Contenu de la section "${title[type]}" ici.`;
}
