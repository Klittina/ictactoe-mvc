//lampa csak saját magáról tud.
//tudja az állapotát
//az állapotának megfelelően be tudja állítani a tulajdonságait (színét)
//meg tudja mondani magáról , hogy ő kicsoda

class Lampa {
    #allapot;
    #index;
    constructor(index, allapot, szuloElem) {
        //html tageket az osztályon belül határozzuk meg
        //konstruktor beállítja az adattagokat
        this.#index = index;
        this.#allapot = allapot; // true/false
        //állapottól függ a szín!

        //hozzuk létre az objektumhoz tartozó HTML elemet a megfelelő helyre
        szuloElem.append(`<div class="lampa"></div>`);
        //minden egyes HTML elemhez érdemes készíteni egy nevet, változót.
        this.lampaElem = szuloElem.children("div:last-child");

        this.setSzin();

        //eseménykezelők
        this.lampaElem.on("click", () => {
           
            this.setAllapot();
            this.kattintasTrigger();
        });
    }

    setAllapot() {
        this.#allapot = !this.#allapot;
        this.setSzin();
    }

    setSzin() {
        if (this.#allapot) {
            this.lampaElem.addClass("off");
        } else {
            this.lampaElem.removeClass("off");
        }
    }

    //az a cél, hogy a Lámpe objektum meg tudja mondani a játéktérnek, hoyg ő kicsoda, hányadik elem
    // letrehozunk egy saját eseményt.
    kattintasTrigger() {
        let esemeny=new CustomEvent("lampaKapcsolas",{detail:this.#index})
        window.dispatchEvent(esemeny);
    }
}

export default Lampa;
