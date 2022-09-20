//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rasgele bir sayi tut.
const randomNumber = Math.floor(Math.random() * 100);
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
    document.querySelector(".check-btn").disabled = true;
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `DECRASE <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`)
        : (msg.innerHTML = `INCREASE <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`);
    } else {
      msg.innerHTML = `You lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

//? localStorage'deki topScore degiskenini guncelle

//? DOM'daki top-score degerini guncelle

//! eger rasgele!= input.value

//* again basildiginda oyunu baslangic dgerlerin kur
document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  const randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = "?";
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
 document.querySelector("body").classList.remove("bg-success", "bg-danger");
 document.querySelector(".guess-input").value = ""
 document.querySelector(".msg").innerText= `Starting...`
});

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
