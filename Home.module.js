export class Home{
    constructor(){
    
    
    }
    activeLinke(){
      document.querySelectorAll(".nav-link").forEach(function(link){
        link.addEventListener("click",function(){
             document.querySelector(".nav-item .nav-link.active").classList.remove("active");
             link.classList.add("active")
        })
    })
    }
   static async displayData(gamename = "mmorpg") {
      document.querySelector(".loading").style.display = "block";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "f248faf60cmshd566e93d3d7ef9cp1fd88ejsnd2d368b74e10",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
    
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gamename}`,
        options
      );
      const result = await response.json();
      document.querySelector(".loading").style.display = "none";
      let cartona = "";
      for (let i = 0; i < result.length; i++) {
        cartona += `   <div class="col ">
        <div data-id="${result[i].id}" class="card h-100 bg-transparent" role="button" "="" >
           <div class="card-body text-light">
              <figure class="position-relative">
                 <img class="card-img-top object-fit-cover h-100" src=${result[i].thumbnail}>
              
              </figure>
    
              <figcaption>
    
                 <div class="hstack justify-content-between">
                    <h3 class="h6 small">${result[i].title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                 </div>
    
                 <p class="card-text small text-center opacity-50">${result[i].short_description} </p>
    
              </figcaption>
           </div>
    
           <footer class="card-footer small hstack justify-content-between text-light">
    
              <span class="badge badge-color">${result[i].genre}</span>
              <span class="badge badge-color">${result[i].platform}</span>
    
           </footer>
        </div>
     </div>`;
      }
      document.querySelector("#gameData").innerHTML = cartona;
    }
    
 displayLIList() {
  let liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].addEventListener("click", function () {
      Home.displayData(this.getAttribute("data-category"));
     
    });
  }
}
       
}
