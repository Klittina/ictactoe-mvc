import JatekterModell from "../model/JatekterModell.js";
import JatekTer from "../view/jatekter.js";
class JatekTerController {
  constructor() {
    const meret = 5;

    // péld viewt
    const jatekter = new JatekTer(meret);

    // péld modellt
    const jatekterModell = new JatekterModell();

    $(window).on("lampaKapcsolas", (event) => {
      // Modell végezze el a változtatásokat
      JatekterModell.szomszedokSzinenekValtoztatasa(event.detail);
      // Modell adja vissza az adatokat
      const tomb = jatekterModell.getJatekterTomb();
      jatekter.setLampakAllapota(tomb);
    });
  }
}
export default JatekTerController;
