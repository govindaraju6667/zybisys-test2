const submit = document.getElementById("saveButton");
const text = document.getElementById("text");
const listData = document.getElementById("list");
const title = document.getElementById("title1");

submit.addEventListener("click", () => {
  alert("save");
  //   title.style.display = "block";

  let res = text.value;

  let Datas = document.createElement("list");
  Datas.innerText = res;
  console.log(Datas);
  listData.append(Datas);
  console.log(listData);
});
