import JatekterView from "../view/JatekterView.js"
import JatekterModel from "../model/JatekterModel.js";
class JatekTerController {
    constructor() {
  
      // péld viewt Viewban: Minden megjelenítássel kapcsolatos
        const jatekterModel = new JatekterModel();

        const jatekterView = new JatekterView();
      // péld modelt: Minden logakai, itt hozzuk létre JatékterModelt
      $(window).on("lepes", (event) => {
        // console.log("LÉPÉs")
        // Modell végezze el a változtatásokat
        jatekterModel.setJatekterElem(event.detail); //megkapja az indexet a viewból AMIVEL tud dolgozni majd a model
        // Modell adja vissza az adatokat
        const tomb = jatekterModel.getJatekterTomb;
        jatekterView.setNegyzetekkAllapota(tomb);
      });
  
    }
  }
  export default JatekTerController;
  