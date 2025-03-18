function biodat() {
    let nama          = document.getElementById("nama");
    let usia          = document.getElementById("usia");
    let tempattinggal = document.getElementById("tempattinggal");
    let asalsekolah   = document.getElementById("asalsekolah");

    let inpnama = document.getElementById("inputnama").value;
    let inpusia = document.getElementById("inputusia").value;
    let inptl   = document.getElementById("inputtempattinggal").value;
    let inpask  = document.getElementById("inputasalsekolah").value;

    nama.innerHTML           = `Nama : ${inpnama}`;
    usia.innerHTML           = `Usia : ${inpusia}`;
    tempattinggal.innerHTML  = `Tempat Tinggal : ${inptl}`;
    asalsekolah.innerHTML    = `Asal Sekolah   : ${inpask}`;
}