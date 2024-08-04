document.addEventListener('DOMContentLoaded', function () {
  // Inicializa o mapa
  var map = L.map('map').setView([-2.5307, -44.2962], 7); // Define a posição inicial do mapa (lat, lon) e o zoom

  // Adiciona o tile layer do mapa
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Adiciona marcadores para destinos específicos
  var destinations = [
    { lat: -2.5291, lon: -44.3023, name: 'São Luís', id: 'saoLuis' },
    { lat: -2.4488, lon: -44.4268, name: 'Alcântara', id: 'alcantara' },
    { lat: -2.7417, lon: -42.7874, name: 'Barreirinhas', id: 'barreirinhas' },
    { lat: -7.5330, lon: -46.7100, name: 'Carolina', id: 'carolina' },
    { lat: -2.7727, lon: -42.2905, name: 'Tutóia', id: 'tutoia' },
    { lat: -6.4256, lon: -44.3485, name: 'Barra do Corda', id: 'barraCorda' }
  ];

  destinations.forEach(function (dest) {
    L.marker([dest.lat, dest.lon]).addTo(map)
      .bindPopup('<a href="destinations.html?city=' + dest.id + '">' + dest.name + '</a>')
      .openPopup();
  });
});


//BUSCA
function performSearch() {
  const searchInput = document.getElementById('search-input').value;
  if (searchInput) {
    window.location.href = `destinations.html?search=${encodeURIComponent(searchInput)}`;
  }
}

document.getElementById('search-button').addEventListener('click', performSearch);

document.getElementById('search-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});


