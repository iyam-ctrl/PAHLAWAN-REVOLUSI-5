/*
=========================================
STEP 1 - SISTEM AKSES
=========================================

PASSWORD ROSTATI:

pusingbanget

*/

const ROSTATI_PASSWORD = "pusingbanget";


const openAdmin =
  document.getElementById("openAdmin");


const closeAdmin =
  document.getElementById("closeAdmin");


const enterViewer =
  document.getElementById("enterViewer");


const loginModal =
  document.getElementById("loginModal");


const loginBtn =
  document.getElementById("loginBtn");


const passwordInput =
  document.getElementById("password");


const loginError =
  document.getElementById("loginError");


const togglePassword =
  document.getElementById("togglePassword");


/*
=========================================
BUKA LOGIN ROSTATI
=========================================
*/

function openLogin() {

  loginModal.classList.remove("hidden");

  passwordInput.value = "";

  loginError.classList.add("hidden");

  setTimeout(() => {

    passwordInput.focus();

  }, 50);

}


/*
=========================================
TUTUP LOGIN
=========================================
*/

function closeLogin() {

  loginModal.classList.add("hidden");

}


openAdmin.addEventListener(
  "click",
  openLogin
);


closeAdmin.addEventListener(
  "click",
  closeLogin
);


/*
=========================================
KLIK DI LUAR MODAL
=========================================
*/

loginModal.addEventListener(
  "click",
  (event) => {

    if (
      event.target === loginModal
    ) {

      closeLogin();

    }

  }
);


/*
=========================================
SHOW / HIDE PASSWORD
=========================================
*/

togglePassword.addEventListener(
  "click",
  () => {

    const isPassword =
      passwordInput.type === "password";


    passwordInput.type =
      isPassword
        ? "text"
        : "password";


    togglePassword.textContent =
      isPassword
        ? "SEMBUNYIKAN"
        : "LIHAT";

  }
);


/*
=========================================
LOGIN ROSTATI
=========================================
*/

function loginAsRostati() {

  if (
    passwordInput.value ===
    ROSTATI_PASSWORD
  ) {

    sessionStorage.setItem(
      "cashKasRole",
      "admin"
    );


    sessionStorage.setItem(
      "cashKasUser",
      "ROSTATI"
    );


    window.location.href =
      "dashboard.html";

  } else {

    loginError.textContent =
      "PASSWORD SALAH.";

    loginError.classList.remove(
      "hidden"
    );

    passwordInput.select();

  }

}


loginBtn.addEventListener(
  "click",
  loginAsRostati
);


/*
=========================================
ENTER DENGAN TOMBOL ENTER
=========================================
*/

passwordInput.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Enter"
    ) {

      loginAsRostati();

    }

  }
);


/*
=========================================
MASUK SEBAGAI VIEWER
=========================================
*/

enterViewer.addEventListener(
  "click",
  () => {

    sessionStorage.setItem(
      "cashKasRole",
      "viewer"
    );


    sessionStorage.setItem(
      "cashKasUser",
      "VIEWER"
    );


    window.location.href =
      "dashboard.html";

  }
);
