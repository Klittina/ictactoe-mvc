//a jatektér osztály feladata kezelni a lámpákat,
//létrehozni a jétkteret
// kapcsolgatni a szomszédokat,
import Lampa from "../view/lampa.js";

class JatekTer {
  #LampaLista = [];
  constructor(meret) {
    this.meret = meret;
    $(":root").css("--palyaMeret", this.meret);
    let szuloElem = $("article");
    for (let index = 0; index < meret * meret; index++) {
      const lampa = new Lampa(index, false, szuloElem);
      this.#LampaLista.push(lampa);
    }
    //console.log(this.#LampaLista);
    // $(window).on("lampaKapcsolas", (event) => {
    //   this.szomszedokSzinenekValtoztatasa(event.detail);
    // });
  }
  setLampakAllapota(tomb) {
    // a tombot a modell állítja be ffffttftf
    console.log(tomb);

    tomb.forEach((element, index) => {
      this.#LampaLista[index].setAllapot(element);
    });
  }
}

export default JatekTer;
