// Store data
const stores = [
    {
      id: 1,
      name: "TUDOR",
      logo: "tudorlogo.png",
      website: "https://www.tudorwatch.com/en",
      features: ["Premium Selection", "24/7 Customer Service", "Free Shipping"],
      priceRange: "$1,500 - $10,000",
      rating: 4.8,
      description: "Luxury timepieces with exceptional service and authenticity guarantee.",
      interface: "tudor.png"
    },
    {
      id: 2,
      name: "GRAND SEIKO",
      logo: "gslogo.png",
      website: "https://grandseikoboutique.in/?utm_campaign=google&utm_medium=textual&utm_campaign=GS_Brand&gad_source=1&gclid=CjwKCAiAtNK8BhBBEiwA8wVt940rbyDgpZfYASnzF5FB2MOY4EassMeQEtGX-F64tYPHBrVPmWCgdxoCDZsQAvD_BwE",
      features: ["Virtual Try-On", "Price Match", "Expert Consultation"],
      priceRange: "$200 - $25,000",
      rating: 4.6,
      description: "Modern collection with innovative shopping experience.",
      interface: "gs.png"
    },
    {
      id: 3,
      name: "PATEK PHILIPPE",
      logo: "ptflogo.jpeg",
      website: "https://www.patek.com/en/home",
      features: ["Pre-owned Section", "Watch Trade-in", "Global Shipping"],
      priceRange: "$100 - $100,000",
      rating: 4.7,
      description: "Extensive collection of new and vintage timepieces.",
      interface: "ptf.png"
    }
  ];
  
//   // DOM Elements
  const storeCards = document.getElementById('storeCards');
  
  
  // Filter and sort stores
  function filterAndSortStores() {
    const searchTerm = searchInput.value.toLowerCase();
    const priceRange = priceFilter.value;
    const sortOption = sortBy.value;
  
  //   let filteredStores = stores.filter(store => 
  //     store.name.toLowerCase().includes(searchTerm) ||
  //     store.description.toLowerCase().includes(searchTerm)
  //   );
  
  //   if (priceRange !== 'all') {
  //     filteredStores = filteredStores.filter(store => {
  //       const avgPrice = parseInt(store.priceRange.split(' - ')[1].replace('$', '').replace(',', ''));
  //       return priceRange === 'budget' ? avgPrice < 30000 : avgPrice >= 30000;
  //     });
  //   }
  
  //   filteredStores.sort((a, b) => {
  //     if (sortOption === 'rating') return b.rating - a.rating;
  //     return a.name.localeCompare(b.name);
  //   });
  
    renderStores(filteredStores);
  }
 
  

  function filterAndSortStores() {
    renderStores(stores); // Render all stores directly.
  }
  
  
  // Render store cards
  function renderStores(stores) {
    storeCards.innerHTML = stores.map(store => `
      <div class="store-card">
        <div class="store-card-content">
          <div class="store-header">
            <img src="${store.logo}" alt="${store.name} logo" class="store-logo">
            <div>
              <h3 class="store-name">${store.name}</h3>
              <div class="store-rating">
                <svg xmlns="http://www.w3.org/2000/svg" widt h="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star-icon" style="color: #fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span>${store.rating}</span>
              </div>
            </div>
          </div>
          <img src="${store.interface}" alt="${store.name} interface" class="store-interface">
          <p class="store-description">${store.description}</p>
          <div class="store-features">
            <h4>Key Features:</h4>
            <ul>
              ${store.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
          <div class="store-footer">
            <a href="${store.website}" target="_blank" rel="noopener noreferrer" class="visit-button">Visit Store</a>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  filterAndSortStores();