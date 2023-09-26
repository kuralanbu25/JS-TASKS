
let arr = [];
let edittable;
let obj={};
window.onload = () => {
  Edit();
};

function submit() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;

   
  if (name == "") {
    document.getElementById("name_err").innerHTML = "Name required!";
  } else {
    document.getElementById("name_err").innerHTML = "";
  }
  if (password == "") {
    document.getElementById("pswd_err").innerHTML = "Password required!";
  } else {
    document.getElementById("pswd_err").innerHTML = "";
  }

  if (
    name == "" || 
    password == "" ) {
    return false;
  }
  
  let obj = { name, password };
  if(edittable!=undefined){
    console.log(edittable);
    arr[edittable].name=document.getElementById("name").value;
    arr[edittable].password=document.getElementById("password").value ;
    
  }
  else{
    arr.push(obj);
  }
  
  localStorage.setItem("arr", JSON.stringify(arr));
  window.location.replace(`list.html`);
  
}

  function Edit() {
    
    var url_string=window.location.href.toLocaleLowerCase();
    var url=new URL(url_string)
    var id=url.searchParams.get("id")
    edittable = id;
    console.log(edittable);
    arr = JSON.parse(localStorage.getItem('arr')) || [];
   if(id){
     document.getElementById("name").value = arr[id].name;
    document.getElementById("password").value = arr[id].password;
   }
  }
