const d = document;
const ctryContainer = d.querySelector(".main__countries");

export default function createCard(data){
    const fragment = d.createDocumentFragment();
    data.forEach((elem) => {
      const countryCard = d.createElement("article");
      const imgContainer = d.createElement("section");
      const infoContainer = d.createElement("section");
      const countryImg = d.createElement("img");
      const title = d.createElement("h3");
      const ul = d.createElement("ul");
      

      countryCard.className = "main__countries-card";
      countryCard.dataset.country = elem.name.toLowerCase();
      imgContainer.className = "main__countries-img";
      infoContainer.className = "main__countries-info";
      
      countryImg.alt = `Flag of ${elem.name}`

      countryImg.src = elem.flags.png;
      
      imgContainer.appendChild(countryImg);
      
      title.textContent = elem.name;
      
      ul.innerHTML = `<li>Population: ${elem.population}</li>
      <li>Region: ${elem.region}</li>
      <li>Capital: ${elem.capital}</li>`;
      
      infoContainer.appendChild(title);
      infoContainer.appendChild(ul);

      countryCard.appendChild(imgContainer);
      countryCard.appendChild(infoContainer);
      
      fragment.appendChild(countryCard); //Adding Card to a the Fragment
    });
    
    ctryContainer.innerHTML = "";
    ctryContainer.appendChild(fragment);
}