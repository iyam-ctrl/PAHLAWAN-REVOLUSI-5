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


function openLogin() {

  loginModal.classList.remove("hidden");

  passwordInput.value = "";

  loginError.classList.add("hidden");

  setTimeout(() => {

    passwordInput.focus();

  }, 50);

}


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
