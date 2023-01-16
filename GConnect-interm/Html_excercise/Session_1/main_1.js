let LIST_SV = [];

const input_elements = document.querySelectorAll(".input_element");

class SinhVien {
  constructor(MaSv, TenSV, NgaySinh, GioiTinh, MaKhoa) {
    this.MaSv = MaSv;
    this.TenSV = TenSV;
    this.NgaySinh = NgaySinh;
    this.GioiTinh = GioiTinh;
    this.MaKhoa = MaKhoa;
  }
}

class Khoa {
  constructor(MaKhoa, TenKhoa) {
    this.MaKhoa = MaKhoa;
    this.TenKhoa = TenKhoa;
  }
}

const themSinhVien = (sv) => {
  LIST_SV.push(sv);
};

const xoaSinhVien = (maSv) => {
  LIST_SV.map((sv, index) => {
    if (sv.MaSv === maSv) {
      LIST_SV.splice(index, 1);
    }
  });
};

const refresh = () => {
  for (let index = 0; index < input_elements.length; index++) {
    input_elements[index].value = "";
  }
  input_elements[0].focus();
};

const addNew = () => {
  document.getElementById("btn-new").addEventListener("click", () => {
    refresh();
    document.getElementById("masv").focus();
  });
};

const update = (sv, index) => {
  document.getElementById("btn-update").addEventListener("click", () => {
    const input_informations = document.getElementsByClassName("input_element");
    const input_gender = document.querySelector("input[name=gender]:checked");
    const khoa = document.getElementById("khoa");

    const selectedKhoa = khoa[khoa.selectedIndex].text;

    var MaSv = document.getElementById("maSv").value;
    var TenSV = document.getElementById("tenSv").value;
    var NgaySinh = document.getElementById("ngaySinh").value;
    var GioiTinh = document.querySelector("input[name=gender]:checked").value;
    var Khoa = document.getElementById("khoa").value;

    if (MaSv == "") {
      MaSv = "";
      document.getElementById("maSv-error").innerHTML =
        "Vui lòng nhập mã sinh viên";
    } else {
      document.getElementById("maSv-error").innerHTML = "";
    }

    if (TenSV == "") {
      TenSV = "";
      document.getElementById("tenSv-error").innerHTML =
        "Vui lòng nhập tên sinh viên";
    } else {
      document.getElementById("tenSv-error").innerHTML = "";
    }
    if (NgaySinh == "") {
      NgaySinh = "";
      document.getElementById("ngaySinh-error").innerHTML =
        "Vui lòng nhập ngày sinh sinh viên";
    } else {
      document.getElementById("ngaySinh-error").innerHTML = "";
    }
    if (MaSv && TenSV && NgaySinh) {
      const svNew = new SinhVien(
        input_informations[0].value,
        input_informations[1].value,
        input_informations[2].value,
        input_gender.value,
        selectedKhoa
      );

      themSinhVien(svNew);
      displayAll();
    }
  });
};
const displayAll = () => {
  let resultDisplay = "";
  for (let index = 0; index < LIST_SV.length; index++) {
    resultDisplay += `
                  <tr>
                      <td><input type="checkbox" name="" id="" /></td>
                      <td>${LIST_SV[index].MaSv}</td>
                      <td>${LIST_SV[index].TenSV}</td>
                      <td>${LIST_SV[index].NgaySinh}</td>
                      <td>${LIST_SV[index].GioiTinh}</td>
                      <td>${LIST_SV[index].MaKhoa}</td>
                      <td>
                          <a class="edit-btn" href="#" onclick='edit(${index})'>Sửa</a>
                          <a class="delete-btn" href="#" onclick='deleteConfirm(${index})'>Xoá</a>
                      </td>
                  </tr>
                  `;
  }
  document.getElementById("body-table").innerHTML = resultDisplay;
};
const deleteConfirm = (i) => {
  if (confirm("Bạn có muốn xóa sinh viên này") == true) {
    xoaSinhVien(LIST_SV[i].MaSv);
    displayAll();
  } else {
    console.log("không");
  }
};

const edit = (i) => {
  document.getElementById("btn-update").classList.add("mute");
  document.getElementById("btn-sua").classList.remove("mute");
  document.getElementById("btn-sua").classList.add("show");
  input_elements[0].value = LIST_SV[i].MaSv;
  input_elements[0].classList.add("disable");
  input_elements[1].value = LIST_SV[i].TenSV;
  input_elements[2].value = LIST_SV[i].NgaySinh;
  const input_gender = document.querySelector("input[name=gender]:checked");

  const selectedKhoa = khoa[khoa.selectedIndex].text;
  document.getElementById("btn-sua").addEventListener("click", () => {
    console.log("edit");
    const svEdit = new SinhVien(
      input_elements[0].value,
      input_elements[1].value,
      input_elements[2].value,
      input_gender.value,
      selectedKhoa
    );
    LIST_SV[i] = svEdit;
    console.log(LIST_SV);
    displayAll();
    document.getElementById("btn-update").classList.remove("mute");
    document.getElementById("btn-sua").classList.add("mute");
    document.getElementById("btn-sua").classList.remove("show");
    input_elements[0].classList.remove("disable");
    refresh();
  });
};
update();
