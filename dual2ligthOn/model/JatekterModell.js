class JatekterModell {
  #jatekterTomb = [];
  constructor(meret) {
    for (let i = 0; i < meret * meret; i++) {
      this.#jatekterTomb.push(false);
    }
  }
  getJatekterTomb() {
    return this.#jatekterTomb;
  }
  szomszedokSzinenekValtoztatasa(id) {
    // az ID az az elem amire rákattintottunk
    this.#jatekterTomb[id] = !this.#jatekterTomb[id];

    if (id % this.meret != 0) {
      this.#jatekterTomb[id - 1] = !this.#jatekterTomb[id - 1];
    }
    if (id % this.meret != this.meret - 1) {
      this.#jatekterTomb[id + 1] = !this.#jatekterTomb[id + 1];
    }
    if (id < this.meret * this.meret - this.meret) {
      this.#jatekterTomb[id + this.meret] =
        !this.#jatekterTomb[id + this.meret];
    }
    if (id > this.meret) {
      this.#jatekterTomb[id - this.meret] =
        !this.#jatekterTomb[id - this.meret];
    }
  }
}

export default JatekterModell;
