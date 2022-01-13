import "./styles.css";

const onClickAdd = () => {
  // テキストボックス
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);
};

document
  .getElementById("add-button") // イベントを付与
  .addEventListener("click", () => onClickAdd()); // クリックされるとこの関数を呼ぶ
