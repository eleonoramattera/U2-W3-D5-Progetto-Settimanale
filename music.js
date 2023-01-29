const fetchCanzoniPreferite = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=brucespringsteen"
    );

    let { data: album } = await res.json();
    console.log("data", album);

    const row = document.querySelector("#rowPrimaSezione");
    const albums = [album[2], album[4], album[5]];
    albums.forEach((singoloAlbum) => {
      row.innerHTML += `
<div class="col">
<div class="card" style="width: 18rem;">
  <img src="${singoloAlbum.album.cover_big}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">"${singoloAlbum.album.title}"</h5>
    <p class="card-text"> "${singoloAlbum.artist.name}"</p>

  </div>
</div>
</div>
`;
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchCanzonePreferita = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=nothingelsemattersmetallica"
    );

    let { data: canzone } = await res.json();
    console.log("data", canzone);

    const row = document.querySelector("#rowSecondaSezione");
    const canzonePreferita = [canzone[6]];
    canzonePreferita.forEach((singolaCanzone) => {
      row.innerHTML += `
<div class="col">
<div class="card" style="width: 18rem;">
  <img src="${singolaCanzone.album.cover_big}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">"${singolaCanzone.album.title}"</h5>
    <p class="card-text"> "${singolaCanzone.artist.name}"</p>

  </div>
</div>
</div>
`;
    });
  } catch (error) {
    console.log(error);
  }
};

fetchCanzoniPreferite();
