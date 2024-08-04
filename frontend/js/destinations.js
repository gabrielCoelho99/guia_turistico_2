function showAttractions(attractionId) {
    const attractions = {
      palacioDosLeoes: [
        { src: "./assets/images/slz4.jpg", alt: "Palácio dos Leões" },
        { src: "./assets/images/Imagem1.jpg", alt: "Palácio dos Leões" },
        { src: "./assets/images/slz2.png", alt: "Palácio dos Leões" }
      ],

      fronhasRaposa: [
        { src: "./assets/images/img5.jpg", alt: "Fronhas de Raposa" },
        { src: "./assets/images/raposa.jpg", alt: "Fronhas de Raposa" },
        { src: "./assets/images/raposa2.webp", alt: "Fronhas de Raposa" }
      ],

      festasJuninas: [
        { src: "./assets/images/junina.jpeg", alt: "Festas Juninas" },
        { src: "./assets/images/junina3.webp", alt: "Festas Juninas" },
        { src: "./assets/images/junina4.jpg", alt: "Festas Juninas" }
      ],

      
      museuGastronomia: [
        { src: "./assets/images/gastronomia.webp", alt: "Museu da Gastronomia" },
        { src: "./assets/images/gastronomia2.jpg", alt: "Museu da Gastronomia" },
        { src: "./assets/images/gastronomia3.jpg", alt: "Museu da Gastronomia" }
      ],

      museuReggae: [
        { src: "./assets/images/reggae.jpg", alt: "Museu do Reggae" },
        { src: "./assets/images/reggae3.jpg", alt: "Museu da Reggae" },
        { src: "./assets/images/reggae2.jpeg", alt: "Museu da Reggae" }
      ],

      santuarioRibamar: [
        { src: "./assets/images/ribamar.jpeg", alt: "Paróquia e Santuário de S. José de Ribamar" },
        { src: "./assets/images/ribamar2.jpg", alt: "Paróquia e Santuário de S. José de Ribamar" },
        { src: "./assets/images/ribamar3.jpg", alt: "Paróquia e Santuário de S. José de Ribamar" }
      ],
      
      praiaGuia: [
        { src: "./assets/images/guia.jpg", alt: "Praia da Guia" },
        { src: "./assets/images/guia2.jpg", alt: "Praia da Guia" },
        { src: "./assets/images/guia3.jpg", alt: "Praia da Guia" }
      ],

      praiaMarcos: [
        { src: "./assets/images/marcos.jpg", alt: "Praia de S. Marcos" },
        { src: "./assets/images/marcos2.jpg", alt: "Praia de S. Marcos" },
        { src: "./assets/images/marcos3.jpg", alt: "Praia de S. Marcos" }
      ],

      praiaAraçagy: [
        { src: "./assets/images/aracagy.webp", alt: "Praia do Araçagy" },
        { src: "./assets/images/aracagy2.jpg", alt: "Praia do Araçagy" },
        { src: "./assets/images/aracagy3.jpg", alt: "Praia do Araçagy" }
      ],

      centroHistoricoAlcantara: [
        { src: "./assets/images/alcantara.webp", alt: "Centro Histórico de Alcântara" },
        { src: "./assets/images/alc4.jpg", alt: "Centro Histórico de Alcântara" },
        { src: "./assets/images/alc5.jpg", alt: "Centro Histórico de Alcântara" }
      ],

      museuAeroespacial: [
        { src: "./assets/images/aero1.jpg", alt: "Museu Aeroespacial" },
        { src: "./assets/images/aero2.jpg", alt: "Museu Aeroespacial" },
        { src: "./assets/images/img4.jpg", alt: "Museu Aeroespacial" }
      ],

      lencois: [
        { src: "./assets/images/lencois.webp", alt: "Parque Nacional dos Lençois Maranhenses" },
        { src: "./assets/images/lencois2.jpg", alt: "Parque Nacional dos Lençois Maranhenses" },
        { src: "./assets/images/img2.jpg", alt: "Parque Nacional dos Lençois Maranhenses" }
      ],
      
      circuitoCabure: [
        { src: "./assets/images/cabure.webp", alt: "Circuito Caburé" },
        { src: "./assets/images/cabure2.jpg", alt: "Circuito Caburé" },
        { src: "./assets/images/cabure3.jpg", alt: "Circuito Caburé" }
      ],
      
      passeioQuadriciclo: [
        { src: "./assets/images/passeio.jpg", alt: "Trilha de Quadriciclo" },
        { src: "./assets/images/passeio2.jpg", alt: "Trilha de Quadriciclo" },
        { src: "./assets/images/passeio3.jpg", alt: "Trilha de Quadriciclo" }
      ],
      
      chapadaMesa: [
        { src: "./assets/images/mesa.webp", alt: "Parque Nacional da Chapada das Mesas" },
        { src: "./assets/images/mesa2.jpg", alt: "Parque Nacional da Chapada das Mesas" },
        { src: "./assets/images/mesa3.jpg", alt: "Parque Nacional da Chapada das Mesas" }
      ],

      pocoAzul: [
        { src: "./assets/images/poco.webp", alt: "Complexo Poço Azul" },
        { src: "./assets/images/poco2.jpg", alt: "Complexo Poço Azul" },
        { src: "./assets/images/poco3.webp", alt: "Complexo Poço Azul" }
      ],

      pedraCaida: [
        { src: "./assets/images/caida.jpg", alt: "Complexo de Pedra Caída" },
        { src: "./assets/images/caida2.jpg", alt: "Complexo de Pedra Caída" },
        { src: "./assets/images/caida3.jpg", alt: "Complexo de Pedra Caída" }
      ],

      deltaAmericas: [
        { src: "./assets/images/delta1.jpg", alt: "Delta das Américas" },
        { src: "./assets/images/delta2.jpg", alt: "Delta das Américas" },
        { src: "./assets/images/delta3.jpg", alt: "Delta das Américas" }
      ],
      
      praiaTutoia: [
        { src: "./assets/images/tutoia.jpg", alt: "Praias de Tutoia e Lagoas" },
        { src: "./assets/images/tutoia2.jpg", alt: "Praias de Tutoia e Lagoas" },
        { src: "./assets/images/tutoia3.webp", alt: "Praias de Tutoia e Lagoas" }
      ],
      
      revoadaGuaras: [
        { src: "./assets/images/revoada.jpg", alt: "Revoada dos Guarás" },
        { src: "./assets/images/revoada2.jpg", alt: "Revoada dos Guarás" }
      ],

      barraCorda: [
        { src: "./assets/images/barra1.jpg", alt: "Circuito das Cachoeiras" },
        { src: "./assets/images/barra2.jpg", alt: "Circuito das Cachoeiras" },
        { src: "./assets/images/barra3.jpg", alt: "Circuito das Cachoeiras" }
      ],
      
      balneario: [
        { src: "./assets/images/balneario.jpg", alt: "Balneário Guajajará" },
        { src: "./assets/images/balneario2.jpg", alt: "Balneário Guajajará" }
      ]
    };
  
    const selectedAttractions = attractions[attractionId];
  
    if (selectedAttractions) {
      let modalContent = document.createElement('div');
      modalContent.className = 'modal-content';
  
      selectedAttractions.forEach(attraction => {
        let imgElement = document.createElement('img');
        imgElement.src = attraction.src;
        imgElement.alt = attraction.alt;
        modalContent.appendChild(imgElement);
      });
  
      let modal = document.createElement('div');
      modal.className = 'modal';
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
  
      modal.addEventListener('click', () => {
        document.body.removeChild(modal);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const cityId = params.get('city');
  
    if (cityId) {
      
      const citySection = document.getElementById(cityId);
      if (citySection) {
        citySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });


  //BUSCA DESTINOS
  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
  
    function normalizeString(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
  
    function scrollToDestination(term) {
      const normalizedTerm = normalizeString(term);
  
      // CIDADE
      const citySections = document.querySelectorAll('.city-section');
      for (const section of citySections) {
        const dataTerms = normalizeString(section.getAttribute('data-terms') || '');
        const titleElement = section.querySelector('.city-title');
        const title = titleElement ? normalizeString(titleElement.textContent) : '';
  
        if (dataTerms.includes(normalizedTerm) || title.includes(normalizedTerm)) {
          section.scrollIntoView({ behavior: 'smooth' });
          console.log(`Rolando para a seção: ${title}`);
          return;
        }
      }
  
      // ATRATIVO
      const popularCards = document.querySelectorAll('.popular-card');
      for (const card of popularCards) {
        const dataTerms = normalizeString(card.getAttribute('data-terms') || '');
        const cardTitleElement = card.querySelector('.popular-title');
        const title = cardTitleElement ? normalizeString(cardTitleElement.textContent) : '';
        const textElement = card.querySelector('.card-text');
        const text = textElement ? normalizeString(textElement.textContent) : '';
  
        if (dataTerms.includes(normalizedTerm) || title.includes(normalizedTerm) || text.includes(normalizedTerm)) {
          card.scrollIntoView({ behavior: 'smooth' });
          console.log(`Rolando para o card: ${title}`);
          return;
        }
      }
    }
  
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get('search');
  
    if (searchTerm) {
      searchInput.value = searchTerm;
      scrollToDestination(searchTerm);
    }
  
    function performSearch() {
      const searchInputValue = searchInput.value;
      if (searchInputValue) {
        scrollToDestination(searchInputValue);
      }
    }
  
    document.getElementById('search-button')?.addEventListener('click', performSearch);
  
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        performSearch();
      }
    });
  
    function searchDestinations() {
      const input = searchInput.value;
      const normalizedInput = normalizeString(input);
      const citySections = document.querySelectorAll(".city-section");
  
      citySections.forEach(section => {
        const dataTerms = normalizeString(section.getAttribute("data-terms") || '');
        const titleElement = section.querySelector(".city-title");
        const title = titleElement ? normalizeString(titleElement.textContent) : '';
  
        let sectionHasVisibleCard = false;
  
        // Verifica cartões dentro da seção
        const cards = section.querySelectorAll(".popular-card");
        cards.forEach(card => {
          const cardDataTerms = normalizeString(card.getAttribute("data-terms") || '');
          const cardTitleElement = card.querySelector(".popular-title");
          const cardTitle = cardTitleElement ? normalizeString(cardTitleElement.textContent) : '';
          const cardTextElement = card.querySelector(".card-text");
          const cardText = cardTextElement ? normalizeString(cardTextElement.textContent) : '';
  
          if (cardDataTerms.includes(normalizedInput) || cardTitle.includes(normalizedInput) || cardText.includes(normalizedInput)) {
            card.style.display = "";
            sectionHasVisibleCard = true;
          } else {
            card.style.display = "none";
          }
        });
  
        // Exibe ou oculta a seção com base nos cartões visíveis
        if (dataTerms.includes(normalizedInput) || title.includes(normalizedInput) || sectionHasVisibleCard) {
          section.style.display = "";
        } else {
          section.style.display = "none";
        }
      });
    }
  
    searchInput.addEventListener("input", searchDestinations);
  });
   