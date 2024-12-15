let output = document.querySelector(".output");
let i1 = document.querySelector("#todo-name");
let i2 = document.querySelector("#todo-date");
let add = document.querySelector("#add");
let outDiv = document.querySelector(".output");

let arr = [];
let x = document.createElement("h1");
x.innerText = "Add Todo To The list!".toUpperCase();
arr.length === 0 && outDiv.append(x);
add.addEventListener("click", () => {
  let obj = {
    name: i1.value,
    date: i2.value,
    delete: "Delete",
  };
  arr = [...arr, obj];
  outDiv.innerHTML = "";
  arr.forEach((item) => {
    let oName = document.createElement("p");
    oName.innerText = item.name;

    let oDate = document.createElement("p");
    oDate.innerText = item.date;

    let del = document.createElement("button");
    del.innerText = item.delete;
    del.addEventListener("click", () => {
      arr = arr.filter((i) => i !== item);
      oName.remove();
      oDate.remove();
      del.remove();
    });

    outDiv.appendChild(oName);
    outDiv.appendChild(oDate);
    outDiv.appendChild(del);
  });
});
