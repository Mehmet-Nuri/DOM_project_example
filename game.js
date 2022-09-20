//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rasgele bir sayi tut.
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
let topScore = 0;
//? localStorage'de topScore adiyla bir degisken olustur.

//? DOM'daki top-score degerini localStorage'den okuyarak guncelle.

//* CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");
  //? eger input girilmediyse Kullaniciya uyari ver.
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
    body.className = "bg-success";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score --;
    guessInput > randomNumber ? msg.innerText= "DECRASE" : msg.innerText = "INCREASE"
  }
});

//? localStorage'deki topScore degiskenini guncelle

//? DOM'daki top-score degerini guncelle

//! eger rasgele!= input.value

//* again basildiginda oyunu baslangic dgerlerin kur

//! LOCALSTORAGE- SESSIONSTORAGE

//* PUSEDUO
//? eger score > topScore
//?     topScore = score
//? secret_number = gorunur.

//! değilse
//! eger score > 0
//!   score = score -1
//?   eğer rasgele < input.value
//?     AZALT
//?   degilse
//?     ARTTIR
//! degise
//? Uzgunuz kaybetiniz.

//* againBtn basildiginda kontrolleri yap
