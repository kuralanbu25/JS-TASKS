let arr = [];
let edittable;
let obj={};

function submit() {
  let task = document.getElementById("task").value;

   
  if (task == "") {
    document.getElementById("text_err").innerHTML = "task required!";
  } else {
    document.getElementById("text_err").innerHTML = "";
  }
  
  if (
    task == "" ) {
    return false;
  }

  table2();
  document.getElementById("task").value = "";
  
}
  function table(){
  edittable = undefined;
  let l = "";
  for (i=0; i<arr.length; i++) {
    l += "<ul>";
    l += "<li>" +arr[i].task +
    ' <button type="button" class="btn btn-info" onclick="Edit(' +
    i +
    ')">Edit</button>  <button type="button" class="btn btn-danger" onclick="Delete(' +
    i +
    ')">Delete</button>' +
    "</li>";
    l += "</ul>";
  }
  document.getElementById("taskList").innerHTML = l;


}
function table2() {
  let task = document.getElementById("task").value;
 
  let obj = { task };
  console.log(obj);
  
  if (edittable != undefined) {
    arr[edittable].task =obj.task;
    
  } else {
    arr.push(obj);
  }
  table();
}
  function Edit(id) {
    edittable = id;
    console.log(edittable);
    document.getElementById("task").value = arr[id].task;
  }

  function Delete(id) {
    arr.splice(id, 1);
    console.log(id);
    table();
   
  }

