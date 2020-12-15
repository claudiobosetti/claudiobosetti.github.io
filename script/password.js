function checkPswd() {
    var confirmPassword = "pollomagico";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
      window.location = "../index/db";
    }
  }