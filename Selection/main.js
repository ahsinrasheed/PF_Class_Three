const bioData = {
  Pakistan: {
    Punjab: ["Lahore", "Faisalabad", "Rawalpindi"],
    Sindh: ["Karachi", "Hyderabad"],
    KPK: ["Peshawar", "Abbottabad", "Mardan"],
  },
  India: {
    Delhi: ["New Delhi", "Noida"],
    Maharashtra: ["Mumbai", "Pune"],
  },
  China: {
    Bejing: ["Bejing City", "Haidian"],
    Shanghai: ["Shanghai City", "Pudong"],
  },
};

const countrySelection = document.querySelector("#country");
const stateSelection = document.querySelector("#state");
const citySelection = document.querySelector("#city");

stateSelection.disabled = true;
citySelection.disabled = true;

stateSelection.length = 1;
citySelection.length = 1;

for (country in bioData) {
  countrySelection.options[countrySelection.options.length] = new Option(
    country,
    country
  );
}

countrySelection.onchange = ()=>{
    stateSelection.disabled = false;
    stateSelection.length = 1;
    for (state in bioData[countrySelection.value]) {
        console.log(state)
        stateSelection.options[stateSelection.options.length] = new Option(
          state,
          state
        );
      }

}

stateSelection.onchange = ()=>{
    citySelection.disabled = false;
    citySelection.length = 1;
    
    console.log(bioData[countrySelection.value][stateSelection.value])


    for (city of bioData[countrySelection.value][stateSelection.value]) {
        console.log(city);
        citySelection.options[citySelection.options.length] = new Option(
          city,
          city
        );
      }
}

