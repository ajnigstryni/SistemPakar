function diagnose() {
    // Ambil gejala yang dipilih
    var selectedSymptoms = [];
    var selectBox = document.getElementById('symptoms');
    for (var i = 0; i < selectBox.options.length; i++) {
        if (selectBox.options[i].selected) {
            selectedSymptoms.push(selectBox.options[i].value);
        }
    }

    // Lakukan diagnosa kekurangan unsur hara dan saran penggunaan pupuk
    var result = "Hasil Diagnosa: ";
    var treatment = "Penyakit Pada Burug Puyuh: ";
    if (selectedSymptoms.length === 0) {
        result += "Pilih setidaknya satu gejala.";
    } else {
        // Logika diagnosa kekurangan unsur hara
        if (selectedSymptoms.includes("1")) {
            result += "Lesu, bulu kusam, mata terkatup";
            treatment += "Radang Usus";
        } else if (selectedSymptoms.includes("2")) {
            result += "Bersin, mendengkur, kotoran encer kehijauan";
            treatment += "Tetelo.";
        } else if (selectedSymptoms.includes("3")) {
            result += "Lesu , bersin, kurus, air mata sering keluar";
            treatment += "Pilek dan Snot";
        } else if (selectedSymptoms.includes("4")) {
            result += "nafsu makan berkurang , Mencret , menggigil ";
            treatment += "Berak Darah";
        } else if (selectedSymptoms.includes("5")) {
            result += "Timbul keropeng pada bulu (G12), bila dilepas keluar darah";
            treatment += "Cacar Unggas";
        } else if (selectedSymptoms.includes("6")) {
            result += "Lesu , nafsu makan berkurang , mencret ";
            treatment += "Kolera";
        } else if (selectedSymptoms.includes("7")) {
            result += "Lesu , kurus , lemah";
            treatment += "Cacingan";
        } else if (selectedSymptoms.includes("8")) {
            result += "Lesu, bulu kusam, mata dan hidung keluar lendir";
            treatment += "Quail Bronchitis";
        }
    }
  // Tampilkan hasil diagnosa dan saran penggunaan pupuk
  document.getElementById('result').innerText = result;
  document.getElementById('treatment').innerText = treatment;
}
