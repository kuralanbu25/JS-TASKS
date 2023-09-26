let arr = [];
let edittable;
let obj={};

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

  table2();
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
  
}
  function table(){
  edittable = undefined;
  let l = "";
  for (i=0; i<arr.length; i++) {
    l += "<tr>";
    l += "<td>" + arr[i].name + "</td>";
    l += "<td>" + arr[i].password + "</td>";
    l += '<td><button type="button" class="btn btn-info" onclick="Edit(' +i +')">Edit</button>  <button type="button" class="btn btn-danger" onclick="Delete('+i+')">Delete</button></td>';
    l += "</tr>";
  }
  document.getElementById("tablevalue").innerHTML = l;
}
function table2() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
 
  let obj = { name, password };
  console.log(obj);
  
  if (edittable != undefined) {
    arr[edittable].name =obj.name;
    arr[edittable].password =obj.password;
    
  } else {
    arr.push(obj);
  }
  table();
}
  function Edit(id) {
    edittable = id;
    console.log(edittable);
    document.getElementById("name").value = arr[id].name;
    document.getElementById("password").value = arr[id].password;
  }

  function Delete(id) {
    arr.splice(id, 1);
    console.log(id);
    table();
   
  }

