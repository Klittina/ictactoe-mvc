//a jatektér osztály feladata kezelni a lámpákat,
//létrehozni a jétkteret
// kapcsolgatni a szomszédokat,
import Lampa from "../lampa.js";

class JatekTer {
    #LampaLista = [];
    constructor(meret) {
        this.meret=meret;
        $(":root").css("--palyaMeret",this.meret)
        let szuloElem = $("article");
        for (let index = 0; index < meret*meret; index++) {
            const lampa = new Lampa(index, false, szuloElem);
            this.#LampaLista.push(lampa);
        }
        //console.log(this.#LampaLista);
        $(window).on("lampaKapcsolas", (event) => {
            this.szomszedokSzinenekValtoztatasa(event.detail);
        });
    }

    szomszedokSzinenekValtoztatasa(id) {
        console.log(id);
        if ( id % this.meret != 0) {
            this.#LampaLista[id - 1].setAllapot();
        }
        if ( id % this.meret != this.meret-1) {
            this.#LampaLista[id + 1].setAllapot();
        }
        if (id < this.meret*this.meret - this.meret) {
            this.#LampaLista[id + this.meret].setAllapot();
        }
        if (id > this.meret ) {
            this.#LampaLista[id - this.meret].setAllapot();
        }
    }
}

export default JatekTer;
