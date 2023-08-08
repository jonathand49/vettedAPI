async function fetchUselessFacts() {
    let factContainer = document.getElementById('factContainer');
    factContainer.innerHTML = 'Loading...';
  
    try {
      let response1 = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      let data1 = await response1.json();
      let fact1 = data1.text;
  
      let response2 = await fetch('https://api.api-ninjas.com/v1/facts?limit=');
      let data2 = await response2.json();
      let fact2 = data2.data;
  
      factContainer.innerHTML = `
        <div>
          <h3>Useless Fact:</h3>
          <p>${fact1}</p>
          <p>${fact2}</p>
        </div>
      `;
    } catch (error) {
      factContainer.innerHTML = 'Failed to fetch useless facts.';
    }
  }
  
  async function fetchUselessNews() {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = 'Loading...';
  
    try {
      let response1 = await fetch('https://uselessfacts.jsph.pl/random.json?category=animal');
      let data1 = await response1.json();
      let news1 = data1.text;
  
      let response2 = await fetch('https://api.api-ninjas.com/v1/animals?name=');
      let data2 = await response2.json();
      let news2 = data2.data;
  
      newsContainer.innerHTML = `
        <div>
          <h3>Useless News:</h3>
          <p>${news1}</p>
          <p>${news2}</p>
        </div>
      `;
    } catch (error) {
      newsContainer.innerHTML = 'Failed to fetch useless news.';
    }
  }

  