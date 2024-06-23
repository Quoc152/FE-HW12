document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('studentForm').addEventListener('submit', (event) => {
        event.preventDefault();

        let ten = document.getElementById('ten').value;
        let mssv = document.getElementById('mssv').value;
        let email = document.getElementById('email').value;
        let khoa = document.getElementById('khoa').value;
        let gioitinh = document.getElementById('gioitinh').value;
        let ngaysinh = document.getElementById('ngaysinh').value;

        let sinhvien = {
            Ten: ten,
            MSSV: mssv,
            Email: email,
            Khoa: khoa,
            Gioitinh: gioitinh,
            Ngaysinh: ngaysinh
        }

        if (!ten || !mssv || !email || !khoa || !gioitinh || !ngaysinh) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return false; 
        }

        console.log(sinhvien);
        alert("Biểu mẫu đã được gửi thành công!");

        return true; 
    });
});
