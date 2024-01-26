 export default async function getCountries(){
  const ctryData = await fetch("./data.json");
  return ctryData.json();
};
