function handleSubmit() {
    let ten = document.getElementById("ten").value;
    let mssv = document.getElementById("mssv").value;
    let email = document.getElementById("email").value;
    let khoa = document.getElementById("khoa").value;
    let gioitinh = document.getElementById("gioitinh").value;
    let ngaysinh = document.getElementById("ngaysinh").value;

    let sinhvien =   {
        Ten: ten,
        MSSV: mssv,
        Email: email,
        Khoa: khoa,
        GioiTinh: gioitinh,
        NgaySinh: ngaysinh
    };

    console.log(sinhvien);
}