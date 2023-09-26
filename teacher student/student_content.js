function cancel() {
  window.location.replace("card.html");
}
let details = [];
let edittable;
let studentValue = {};
window.onload = () => {
  Edit();
};
function male() {
  let male = document.getElementById("male").checked;
  if (male === true) {
    document.getElementById("female").checked = false;
  }
}
function female() {
  let female = document.getElementById("female").checked;
  if (female === true) {
    document.getElementById("male").checked = false;
  }
}
function submit() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phonenumber = document.getElementById("phonenumber").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;
  let gender_value = document.querySelector('input[name="gender"]:checked');
  let gender;
  if (gender_value) {
    gender = gender_value.value;
  }
  let language = document.getElementById("language").value;
  let dateofbirth = document.getElementById("dateofbirth").value;
  console.log(name);
  console.log(email);
  console.log(phonenumber);
  console.log(password);
  console.log(cpassword);
  console.log(language);
  console.log(dateofbirth);
  let error = false;
  if (name.length < 3) {
    document.getElementById("name_err").innerHTML = "Name required";
    document.getElementById("name").style.border = "2px solid red";
    error = true;
  } else {
    document.getElementById("name_err").innerHTML = "";
    document.getElementById("name").style.border = "2px solid green";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email_err").innerHTML = "Email required";
    document.getElementById("email").style.border = "2px solid red";
    error = true;
  } else {
    document.getElementById("email_err").innerHTML = "";
    document.getElementById("email").style.border = "2px solid green";
  }
  if (phonenumber.length == 10) {
    document.getElementById("phonenumber_err").innerHTML = "";
    document.getElementById("phonenumber").style.border = "2px solid green";
  } else {
    document.getElementById("phonenumber_err").innerHTML =
      "PhoneNumber required";
    document.getElementById("phonenumber").style.border = "2px solid red";
    error = true;
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("password_err").innerHTML = "Password required";
    document.getElementById("password").style.border = "2px solid red";
    error = true;
  } else {
    document.getElementById("password_err").innerHTML = "";
    document.getElementById("password").style.border = "2px solid green";
  }
  if (password !== cpassword) {
    document.getElementById("cpassword_err").innerHTML = "password not match";
    document.getElementById("cpassword").style.border = "2px solid red";
    error = true;
  } else {
    document.getElementById("cpassword_err").innerHTML = "";
    document.getElementById("cpassword").style.border = "2px solid green";
  }
  if (gender === "" || gender === undefined || gender === null) {
    document.getElementById("gender_err").innerHTML = "Gender required";
    error = true;
  } else {
    document.getElementById("gender_err").innerHTML = "";
  }
  if (language == "Select") {
    document.getElementById("language_err").innerHTML = "language required";
    document.getElementById("language").style.border = "2px solid red";
    error = true;
  } else {
    document.getElementById("language_err").innerHTML = "";
    document.getElementById("language").style.border = "2px solid green";
  }
  if (dateofbirth == "") {
    document.getElementById("dateofbirth_err").innerHTML =
      "dateofbirth required";
    document.getElementById("dateofbirth").style.border = "2px solid red";
    error = true;
  } else {
    document.getElementById("dateofbirth_err").innerHTML = "";
    document.getElementById("dateofbirth").style.border = "2px solid green";
  }

  if (error) {
    return false;
  }

  let studentValue = {
    name,
    email,
    phonenumber,
    password,
    cpassword,
    gender,
    language,
    dateofbirth,
  };
  if (edittable != undefined) {
    let url = "https://65092641f6553137159b005a.mockapi.io/student";

    fetch(url + "/" + edittable, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentValue),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("student_list.html");
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  } else {
    let url = "https://65092641f6553137159b005a.mockapi.io/student";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentValue),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace(`student_list.html`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}
function Edit() {
  var url_string = window.location.href.toLocaleLowerCase();
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  edittable = id;
  console.log(edittable);
  if (id) {
    let url = "https://65092641f6553137159b005a.mockapi.io/student";
    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        details = string;
        console.log(details);
        document.getElementById("name").value = details.name;
        document.getElementById("email").value = details.email;
        document.getElementById("phonenumber").value = details.phonenumber;
        document.getElementById("password").value = details.password;
        document.getElementById("cpassword").value = details.cpassword;
        if (details.gender === "male") {
          document.getElementById("male").checked = true;
        } else if (details.gender === "female") {
          document.getElementById("female").checked = true;
        } else {
          document.getElementById("male").checked = false;
          document.getElementById("female").checked = false;
        }
        document.getElementById("language").value = details.language;
        document.getElementById("dateofbirth").value = details.dateofbirth;
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}
