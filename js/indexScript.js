let inputelemnt = document.querySelectorAll("input");
for (let i = 0; i < inputelemnt.length; i++) {
  inputelemnt[i].addEventListener("keydown", function () {
    if (inputelemnt[i].value != null) {
      inputelemnt[i].setAttribute("style", " background-color: white  ;");
    }
  });
}

let iconToggle = document.querySelector(".toggle");
if (iconToggle) {
  iconToggle.addEventListener("click", function () {
    let x = document.querySelector(".HomeBody .container");
    x.classList.toggle("open");
  });
}

let userName = document.querySelector(".nameInp_2");
let userEmail = document.querySelector(".emailInp_2");
let userPassword = document.querySelector(".passwordInp_2");
let Users = [];
let user1 = {
  Name: "ahmed",
  Email: "wagih@gmail.com",
  Password: "14522525",
};
Users.unshift(user1);
if (localStorage.getItem("Clints")) {
  Users = JSON.parse(localStorage.getItem("Clints"));
}

function addUser() {
  localStorage.setItem("Clints", JSON.stringify(Users));
  let y = JSON.parse(localStorage.getItem("Clints"));
  let count = 0;
  for (let i = 0; i < y.length; i++) {
    if (y[i].Email.includes(userEmail.value) == true) {
      count++;
    }
  }
  if (count == 0) {
    let userInfo = {
      Name: userName.value,
      Email: userEmail.value,
      Password: userPassword.value,
    };
    Users.push(userInfo);
    localStorage.setItem("Clints", JSON.stringify(Users));
    alert("Account has been successfully registered");
    window.location.href = "index.html";
  } else {
    alert("This account already exists");
  }
}

function clearInput() {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
}

let Q = document.querySelector("#singupB");
if (Q) {
  document.querySelector("#singupB").addEventListener("click", function () {
    if (
      userName.value != "" &&
      userEmail.value != "" &&
      userPassword.value != ""
    ) {
      addUser();
      clearInput();
      document.querySelector(".alert").setAttribute("style", "");
    } else {
      document
        .querySelector(".alert")
        .setAttribute("style", " display: block;");
    }
  });
}

function searchUser() {
  let uEmail = document.querySelector(".emailInp_1");
  let uPassword = document.querySelector(".passwordInp_1");
  let count = 0;
  for (let i = 0; i < Users.length; i++) {
    if (
      Users[i].Email.includes(uEmail.value) == true &&
      Users[i].Password.includes(uPassword.value) == true
    ) {
      count++;
    }
  }
  if (count > 0) {
    window.location.href = "home.html";
  } else {
    alert("not found");
  }
}

let S = document.querySelector("#login1");
if (S) {
  document.querySelector("#login1").addEventListener("click", function () {
    searchUser();
  });
}
