window.onload = () => {
    table();
  };
  
  let arr = [];
  let edittable;
  let obj = {};
//   function gatData(){
//     let url="https://65092641f6553137159b005a.mockapi.io/student";
//     fetch(url, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       })
//         .then((Result) => Result.json())
//         .then((res) => {
//           console.log(res);
//           arr=res;
//           console.log(arr);
//           table()
//         //   window.location.replace(`list.html`);
//         })
//         .catch((errorMsg) => {
//           console.log(errorMsg);
//         });
//   }
  async  function  table() {
    let url = "https://65092641f6553137159b005a.mockapi.io/student";
   await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    .then((Result) => Result.json())
    .then((res) => {
      console.log(res);
      arr=res;
      console.log(arr);
     
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });


    let l = "";
    for (i = 0; i < arr.length; i++) {
      l += "<tr>";
      l += "<td>" + arr[i].name + "</td>";
      l += "<td>" + arr[i].age + "</td>";
      l += "<td>" + arr[i].mail + "</td>";
      l += "<td>" + arr[i].phone + "</td>";
      l += "<td>" + arr[i].gender + "</td>";
      l +=
        '<td><button type="button" class="btn btn-info me-3" onclick="Edit(' +
        arr[i].id +
        ')">Edit</button>  <button type="button" class="btn btn-danger" onclick="Delete(' +
        arr[i].id +
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
   async function Delete(id) {
    // localStorage.setItem("arr", JSON.stringify(arr));
    // table();
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
      table();
  }
  