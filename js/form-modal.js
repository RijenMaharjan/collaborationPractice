var loginBtn = document.querySelector(".show-login-form");
      var registerBtn = document.querySelector(".show-register-form");
      var modal = document.querySelector(".modal-container");
      var loginForm = document.querySelector(".login-form");
      var registerForm = document.querySelector(".register-form");
      var lclose = document.querySelector(".lclose");
      var rclose = document.querySelector(".rclose");

      loginBtn.addEventListener("click", function () {
        modal.style.display = "block";
        loginForm.style.display = "block";
        registerForm.style.display = "none";
      });

      registerBtn.addEventListener("click", function () {
        modal.style.display = "block";
        loginForm.style.display = "none";
        registerForm.style.display = "block";
      });

      lclose.addEventListener("click", function () {
        modal.style.display = "none";
      });
      rclose.addEventListener("click", function () {
        modal.style.display = "none";
      });