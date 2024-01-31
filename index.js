import { Home } from "./Home.module.js";
import { Details } from "./Details.module.js";
const home = new Home();
const details =new Details();




async function displayFun() {
  await Home.displayData();
  home.activeLinke();
 home.displayLIList();
details.displayDetails();
details.closeDetails();

}
displayFun();
