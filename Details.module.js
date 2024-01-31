export class Details{
    constructor(){}
    displayDetails() {
        let cards = document.querySelectorAll(".card");
        cards.forEach(function (card) {
          card.addEventListener("click", function () {
            document.querySelector(".details").style.display = "block";
            document.querySelector(".games").style.display = "none";
          let myId = card.dataset.id;
       
          Details.displayDetalesData(myId)

          });
        });
      }
      
       closeDetails() {
        document.querySelector("#btnClose").addEventListener("click", function () {
          document.querySelector(".details").style.display = "none";
          document.querySelector(".games").style.display = "block";
        });
      }
     static async  displayDetalesData(id) {
        const url = "";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "f248faf60cmshd566e93d3d7ef9cp1fd88ejsnd2d368b74e10",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        };
        let response = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
          options
        );
        response = await response.json();
        let details_container = `  <div class="col-md-4">
       <img src="${response.thumbnail}" class="w-100" alt="image details">
       </div>
      <div class="col-md-8">
      <h3>Title: ${response.title}</h3>
       <p>Category: <span class="badge text-bg-info"> ${response.genre}</span> </p>
       <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${response.status}</span> </p>
      <p class="small">${response.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href=${response.game_url}>Show Game</a>
      </div>
      /`;
        document.querySelector("#detailsContent").innerHTML = details_container;
      }
}
