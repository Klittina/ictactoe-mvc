// 9 üres négyzetünk, mindenre lehet kattintani CSAK egyszer
class NegyzetView {
  // A négyzet tudja magáról hol van, ki a gazdája és mi a szülőeleme (hol jött létre)
  #index;
  #jatekos;
  #szuloElem;
  constructor(index, szuloElem) {
    this.#index = index;
    this.#szuloElem = szuloElem;
    szuloElem.append(`<div class="negyzet"></div>`); // Megy a View-be
    this.sajatElem = szuloElem.children("div:last-child"); // Megy a View-be
    
    
    this.sajatElem.on("click", () => {
      this.lepesTrigger();
    });
  }
  setNegyzet() {
    this.sajatElem.append("X");
  }
  lepesTrigger() {
    let esemeny = new CustomEvent("lepes", { detail: this.#index });
    window.dispatchEvent(esemeny);
  }






    // this.#jatekos = jatekos; // 0: senki, 1: X, 2: O

  // getIndex() {
  //   return this.#index;
  // }
  // getJatekos() {
  //   return this.#jatekos;
  // }
  // setJatekos(tulajdonos) {
  //   this.sajatElem.off("click");
  //   if (tulajdonos) {
  //     this.#jatekos = 1;
  //     this.sajatElem.append("X");  // Megy a View-be
  //   }
  //   if (!tulajdonos) {
  //     this.#jatekos = 2;
  //     this.sajatElem.append("O"); // Megy a View-be
  //   }
  // }
}

export default NegyzetView;
