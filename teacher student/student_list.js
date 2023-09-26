function back(){
    window.location.replace('card.html')
}
function front(){
    window.location.replace('student_content.html')
}
window.onload = () => {
    addtable();
  };
  
  let details = [];
  let edittable;
  let studentValue = {};

  async  function  addtable() {
    let url = "https://65092641f6553137159b005a.mockapi.io/student";
   await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    .then((Result) => Result.json())
    .then((res) => {
      console.log(res);
      details=res;
      console.log(details);
     
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });


    let l = "";
    for (i = 0; i < details.length; i++) {
      l += "<tr>";
      l += "<td>" + details[i].name + "</td>";
      l += "<td>" + details[i].email + "</td>";
      l += "<td>" + details[i].phonenumber + "</td>";
      l += "<td>" + details[i].password + "</td>";
      l += "<td>" + details[i].cpassword + "</td>";
      l += "<td>" + details[i].gender + "</td>";
      l += "<td>" + details[i].language + "</td>";
      l += "<td>" + details[i].dateofbirth + "</td>";
      l +=
        '<td><button type="button" class="btn btn-info me-3" onclick="Edit(' +
        details[i].id +
        ')">Edit</button>  <button type="button" class="btn btn-danger" onclick="Delete(' +
        details[i].id +
        ')">Delete</button></td>';
      l += "</tr>";
    } 
    document.getElementById("studenttable").innerHTML = l;
  }
  
  function Edit(id) {
    window.location.href = "student_content.html?id=" + id;
  }

   async function Delete(id) {
    let url = "https://65092641f6553137159b005a.mockapi.io/student";
    await fetch(url +"/"+id , {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
      addtable();
  }
  
