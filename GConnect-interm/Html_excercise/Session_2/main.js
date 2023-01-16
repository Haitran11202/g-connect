document.getElementById("b1").value = "";
document.getElementById("b2").value = "";
document.getElementById("b3").value = "";
document.getElementById("b4").value = "";
document.getElementById("b5").value = "";
document.getElementById("b6").value = "";
document.getElementById("b7").value = "";
document.getElementById("b8").value = "";
document.getElementById("b9").value = "";
var cout = 0;
const kich_ban_thang = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
document.getElementById("luot_choi").innerHTML = "X";
const cells = document.getElementsByClassName("box");
var flag = true;
const run = (id) => {
  document.getElementById(id).onclick = () => {
    cout++;

    if (flag) {
      cells[id].value = "X";
      cells[id].disabled = true;
      flag = !flag;
      document.getElementById("luot_choi").innerHTML = "0";
    } else {
      cells[id].value = "0";
      cells[id].disabled = true;
      flag = !flag;
      document.getElementById("luot_choi").innerHTML = "X";
    }
    result();
    if (cout === 9) {
    }
  };
};

const result = () => {
  kich_ban_thang.map((list) => {
    const x_value =
      cells[list[0]].value == "X" &&
      cells[list[1]].value == "X" &&
      cells[list[2]].value == "X";
    const o_value =
      cells[list[0]].value == "0" &&
      cells[list[1]].value == "0" &&
      cells[list[2]].value == "0";
    if (x_value) {
      for (let index = 0; index < cells.length; index++) {
        cells[index].disabled = true;
      }
      document.getElementById("status").innerHTML = "X chiến thắng";
      document.getElementById("wrapper").classList.add("result");
      document.getElementById("status").classList.add("win");
    } else if (o_value) {
      for (let index = 0; index < cells.length; index++) {
        cells[index].disabled = true;
      }
      document.getElementById("status").innerHTML = "O chiến thắng";
      document.getElementById("wrapper").classList.add("result");
      document.getElementById("status").classList.add("win");
    }
  });
};

run("b1");
run("b2");
run("b3");
run("b4");
run("b5");
run("b6");
run("b7");
run("b8");
run("b9");
