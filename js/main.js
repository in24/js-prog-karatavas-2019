//ES6 tikai šis pieejams
class Karatavas {
  constructor(id) {
    this.konteineris = document.getElementById(id);
    if (this.konteineris) {
      this.konteineris.innerHTML = "Te būs spēle";
    }
    this.statuss = Karatavas.STATUSS_NEINICIALIZETS;
  }
  /*
0 = neinicializēta spēle
1 = ir uzdots uzdevums
2 = spēle beigusies ar uzvaru
3 = spēle beigusies ar zaudējumu
9 - spēle ir novākta no ekrāna
*/
  novakt() { // Statiska funkcija, kas dzīvo zem objekta instances
    
    if (this.konteineris) {
      this.konteineris.innerHTML = "";
    }
    delete this.konteineris;
    this.statuss = Karatavas.STATUSS_NOVAKTA;
  }
}
// Statiskās propertijas
Karatavas.STATUSS_NEINICIALIZETS = 0;
Karatavas.STATUSS_SPELE = 1;
Karatavas.STATUSS_UZVARA = 2;
Karatavas.STATUSS_ZAUDE = 3;
Karatavas.STATUSS_NOVAKTA = 9;
