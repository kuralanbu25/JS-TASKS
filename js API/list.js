
window.onload = () => {
  table();
};

let arr = [];
let edittable;
let obj = {};
function table() {
  arr = JSON.parse(localStorage.getItem("arr")) || [];
  let l = "";
  for (i = 0; i < arr.length; i++) {
    l += "<tr>";
    l += "<td>" + arr[i].name + "</td>";
    l += "<td>" + arr[i].password + "</td>";
    l +=
      '<td><button type="button" class="btn btn-info me-3" onclick="Edit(' +
      i +
      ')">Edit</button>  <button type="button" class="btn btn-danger" onclick="Delete(' +
      i +
      ')">Delete</button></td>';
    l += "</tr>";
  }
  document.getElementById("tablevalue").innerHTML = l;
}

function Edit(id) {
  window.location.href = "index.html?id=" + id;
}
function back() {
  window.location.replace('index.html');
}
function Delete(id) {
  arr.splice(id, 1);
  localStorage.setItem("arr", JSON.stringify(arr));
  table();
}
