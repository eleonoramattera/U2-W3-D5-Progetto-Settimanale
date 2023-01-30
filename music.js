let canzoniGenerale = [];

//SEZIONE 1//
const canzoniPreferite = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=shakira"
    );

    if (res.ok) {
      let data = await res.json();
      let i = 0;
      let row1 = document.querySelector("#rowPrimasezione");
      for (i = 0; i < 3; i++) {
        let album = data.data[i];
        canzoniGenerale.push(album);
        row1.innerHTML += `
        <div class="col">
          <div class="card me-4" style="width: 18rem; height: 30rem ">
            <img src="${album.album.cover_medium}" class="card-img-top" alt="">
              <div class="card-body"><h5>${album.title}</h5>
                  <p class="card-text">${album.artist.name}</p>
         
               </div>
          </div>
        </div>`;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
canzoniPreferite();

//SEZIONE 2//
const CanzonePreferitaa = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=flowersmileycyrus"
    );

    if (res.ok) {
      let data = await res.json();

      let row2 = document.querySelector("#rowSecondasezione");
      let canzonePreferita = data.data[0];
      canzoniGenerale.push(canzonePreferita);
      row2.innerHTML += `
      <div class="col">
      <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${canzonePreferita.album.cover_big}"class="img-fluid rounded-start" alt="cover album">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${canzonePreferita.title}</h5>
                      <p class="card-text"> ${canzonePreferita.artist.name}</p>
                  
                    </div>
                  </div>
                </div>
              </div>
              </div>`;
    }
  } catch (error) {
    console.log(error);
  }
};
CanzonePreferitaa();

//SEZIONE 3 CAROSELLO//

const Carosello = async function (canzoni) {
  try {
    let res = await fetch(canzoni);
    if (res.ok) {
      let data = await res.json();
      let carouselReference = document.getElementById("carosello");
      let canzoniCarosello = data.data[0];
      canzoniGenerale.push(canzoniCarosello);
      carouselReference.innerHTML += `
               <div class="carousel-item active">
              <img src="${canzoniCarosello.album.cover_big}" class="d-block w-100" alt="cover album">
            </div>`;
    } else {
      console.log("errore");
    }
  } catch (error) {
    console.log(error);
  }
};

Carosello("https://striveschool-api.herokuapp.com/api/deezer/search?q=thewall");
Carosello(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=disumano"
);
Carosello(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=agirllikeme"
);

function rank() {
  canzoniGenerale.rank.sort((a, b) => {
    return a - b;
  });

  canzoniGenerale.map((canzone) => canzone.rank + " - " + canzone.title);
}

const modale = function () {
  const modaleReference = document.querySelector(".modaleClasse");
  let canzoniCiclate = "";
  for (let i = 0; i < canzoniGenerale.length; i++) {
    canzoniCiclate = canzoniGenerale[i].title;
    modaleReference.innerHTML += `
  <div class="modal-body">
 
  <div>
   </div>
  </div>`;
  }
};
