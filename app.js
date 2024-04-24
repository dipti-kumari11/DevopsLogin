document.addEventListener('DOMContentLoaded', function () {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  const signInForm = document.querySelector('.sign-in-form');

  signInForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Replace this with your actual login logic
    const username = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Check if the entered credentials are valid
    if (username === 'kavita' && password === '12345') {
      alert('Login Successful!');
    }
    else if(username== 'dipti' && password=='23232'){
      alert("Login Successful!");
    } else {
      alert('Login Failed. Please check your username and password.');
    }
  });
});
