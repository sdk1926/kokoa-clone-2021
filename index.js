const selElement = [
  document.querySelector(".day-night__btn"),
  document.querySelector("body"),
];

function colorHandler() {
  if (selElement[0].value === "다크모드로 보기") {
    selElement[0].value = "일반모드로 보기";
    selElement[1].style.backgroundColor = "black";
    selElement[1].style.color = "white";
    selElement[0].style.color = "white";
    selElement[0].style.backgroundColor = "gray";
  } else {
    selElement[0].value = "다크모드로 보기";
    selElement[1].style.backgroundColor = "var(--yellow)";
    selElement[1].style.color = "#2e363e";
    selElement[0].style.color = "black";
    selElement[0].style.backgroundColor = "white";
  }
}
