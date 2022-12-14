class Negyzet {
  // A négyzet tudja magáról hol van, ki a gazdája és mi a szülőeleme (hol jött létre)
  #index;
  #jatekos;
  #szuloElem;
  constructor(index, jatekos, szuloElem) {
    this.#index = index;
    this.#jatekos = jatekos; // 0: senki, 1: X, 2: O
    this.#szuloElem = szuloElem;
    szuloElem.append(`<div class="negyzet"></div>`); // Megy a View-be
    this.sajatElem = szuloElem.children("div:last-child"); // Megy a View-be
    this.sajatElem.on("click", () => {
      this.lepesTrigger();
    });
  }

  getIndex() {
    return this.#index;
  }
  getJatekos() {
    return this.#jatekos;
  }
  setJatekos(tulajdonos) {
    this.sajatElem.off("click");
    if (tulajdonos) {
      this.#jatekos = 1;
      this.sajatElem.append("X");  // Megy a View-be
    }
    if (!tulajdonos) {
      this.#jatekos = 2;
      this.sajatElem.append("O"); // Megy a View-be
    }
  }
  lepesTrigger() {
    let esemeny = new CustomEvent("lepes", { detail: this.#index });
    window.dispatchEvent(esemeny);
  }
}

export default Negyzet;
