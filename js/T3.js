function tampilanPesan() {
    const namaLengkap = document.getElementById('namaLengkap').value;
    const tanggalLahir = document.getElementById('date').value;
    const jenisKelamin = document.querySelector('input[name="JenisKelamin"]:checked').value;
    const pesan = document.getElementById('catatan').value;

    const hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = `
        <p><strong>Nama Lengkap:</strong> ${namaLengkap}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;
}
