function showBreweries(breweries) {
  const breweryList = breweries.map(function (currentBrewery) {
    return `    <div class="brewery col-4 ">
    <div class="card h-100 shadow-lg mx-4 p-3 mb-5 bg-body rounded" style="">
      <div class="card-body">
        <h5 class="card-title">${currentBrewery.name}</h5>
        <p class="card-text">${
          currentBrewery.street ?? ""
        } ${currentBrewery.city}, ${currentBrewery.state} ${currentBrewery.postal_code}</p>
         ${
           currentBrewery.phone
             ? `<p class="card-text">Phone: ${currentBrewery.phone}</p>`
             : ""
         }
        <p class="card-text">${currentBrewery.website_url ?? ""}</p>
        <a href="#" class="btn btn-secondary">Add</a>
      </div>
    </div>
  </div>`;
  });
  const results = document.querySelector("#brewery-result");
  results.innerHTML = breweryList.join("");
}

const myForm = document.querySelector(".search-form");
console.log(myForm);
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchString = document.querySelector(".search-bar").value;
  const urlEncodedSearchString = encodeURIComponent(searchString);

  fetch(
    `https://api.openbrewerydb.org/breweries?by_city=${urlEncodedSearchString}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showBreweries(data);
    });
});
