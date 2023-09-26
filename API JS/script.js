
let arr = [];
let edittable;
let obj={};
window.onload = () => {
  Edit();
};

function submit() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let mail = document.getElementById("mail").value;
  let gender = document.getElementById("gender").value;
  let phone = document.getElementById("phone").value;
    
  if (name == " ") {
    document.getElementById("name_err").innerHTML = "Name required!";
  } else {
    document.getElementById("name_err").innerHTML = "";
  }
  if (age == "") {
    document.getElementById("age_err").innerHTML = "Password required!";
  } else {
    document.getElementById("age_err").innerHTML = "";
  }
  if (mail == "") {
    document.getElementById("mail_err").innerHTML = " required!";
  } else {
    document.getElementById("mail_err").innerHTML = "";
  }
  if (gender == "") {
    document.getElementById("gender_err").innerHTML = " required!";
  } else {
    document.getElementById("gender_err").innerHTML = "";
  }
  if (phone == "") {
    document.getElementById("phone_err").innerHTML = "phonenumber required!";
  } else {
    document.getElementById("phone_err").innerHTML = "";
  }


  if (
    name == ""||
    age == ""||
    mail == ""||
    gender == "" || 
    phone == "" ) {
    return false;
  }
  
  let obj = { name, age, gender,mail,phone };
  if (edittable != undefined) {
    let url =  "https://65092641f6553137159b005a.mockapi.io/student";

    fetch(url + "/" + edittable, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("list.html");
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
  // if(edittable!=undefined){
  //   console.log(edittable);
  //   arr[edittable].name=document.getElementById("name").value;
  //   arr[edittable].age=document.getElementById("age").value ;
  //   arr[edittable].gender=document.getElementById("gender").value;
  //   arr[edittable].mail=document.getElementById("mail").value ;
  //   arr[edittable].phone=document.getElementById("phone").value;
    
  // }
 
  else{
    let url="https://65092641f6553137159b005a.mockapi.io/student";
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then((Result) => Result.json())
        .then((string) => {
          console.log(string);
          window.location.replace(`list.html`);
        })
        .catch((errorMsg) => {
          console.log(errorMsg);
        });
  }
  
//   localStorage.setItem("arr", JSON.stringify(arr));
//   window.location.replace(`list.html`);
  
}
  function Edit() {
    
    var url_string=window.location.href.toLocaleLowerCase();
    var url=new URL(url_string)
    var id=url.searchParams.get("id")
    edittable = id;
    console.log(edittable);
    // arr = JSON.parse(localStorage.getItem('arr')) || [];
    if(id){
    let url = "https://65092641f6553137159b005a.mockapi.io/student";
    fetch(url +"/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        // console.log(string);
        // window.location.replace("list.html");
       arr=string;
       console.log(arr);
        document.getElementById("name").value = arr.name;
        document.getElementById("age").value = arr.age;
        document.getElementById("mail").value = arr.mail;
        document.getElementById("phone").value = arr.phone;
        document.getElementById("gender").value = arr.gender;
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
   }
  }
