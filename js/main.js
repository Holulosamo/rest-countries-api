import getCountries from "./api.js"
import createCard from "./card.js";

const d = document;
const select = d.querySelector('.main__select');
const searchInput = d.querySelector('.main__form-search');

//Showing all data
const showCountries = () => {
    getCountries().then((response) => {
      createCard(response);
    });
}

//Filtering countries by Region
const filterData = (e) => {
    getCountries().then((response) => {
      const dataFiltered = response.filter((elem) => {
        return e.target.value === elem.region;
      });

      return dataFiltered.length
        ? createCard(dataFiltered)
        : createCard(response);
    });
}

//Filtering by search
const handleSearch = (e) => {
    const regions = d.querySelectorAll(".main__countries-card");

    regions.forEach(elem => {
        elem.dataset.country.includes(e.target.value.toLowerCase()) 
        ? elem.classList.remove("filter") 
        : elem.classList.add("filter");
    })
}

d.addEventListener('DOMContentLoaded', showCountries)
select.addEventListener("change", filterData);
searchInput.addEventListener("keyup", handleSearch);