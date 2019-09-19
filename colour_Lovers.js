//TIME UPDATE
function timeUpdate() {
    
  const today = new Date();
    
  const hrs = today.getHours();
  const mins = (today.getMinutes()<10?'0':'') + today.getMinutes();
  const lastUpdated = `Last Updated at ${hrs} : ${mins}`;
  $('#timeupdate').text(lastUpdated);
}

timeUpdate();


//Data Fetching using API URL
let URL = 'https://cors-anywhere.herokuapp.com/http://www.colourlovers.com/api/palettes/new?format=json';

fetch(URL)
  .then(response => {
    return response.json();
  })
 .then((data)=> {
  for (let i = 0; i < data.length; i++) {
    createPalette(data[i]);
  }
})
.catch(error => console.log(error));
      

//CREATE COLOR PALETTES ON APPLICATION
function createPalette(pallet) {
    let list = document.querySelector('.container');
  const markup = `
     <li>
       <div class="results_main" >
            <div class="results_data">
                <h4 class="results_name">${pallet.title}</h4>
                    
                <p class="results_author"> by ${pallet.userName} </p>

                <p><span class="visits">  ${pallet.numViews}  views\u00A0 ${pallet.numVotes}  votes </span></p>
            </div>
                <figure class="results_fig">
                    <img src="${pallet.imageUrl}" alt="${pallet.title}">
                </figure>
        </div>
    </li>
`;
    list.insertAdjacentHTML('beforeend',markup);    
}


console.log($(window).width());