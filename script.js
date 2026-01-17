const form = document.getElementById('formPendaftaran');
const listPeserta = document.getElementById('listPeserta');
const jumlah = document.getElementById('jumlah');
const pesan = document.getElementById('pesan');


let totalPeserta = 0;
const MAX = 50;


form.addEventListener('submit', function(e) {
e.preventDefault();


const nama = document.getElementById('nama').value.trim();
const email = document.getElementById('email').value.trim();
const hp = document.getElementById('hp').value.trim();
const kategori = document.getElementById('kategori').value;


// Validasi input wajib
if (!nama || !email || !hp || !kategori) {
pesan.textContent = 'Semua input wajib diisi';
pesan.style.color = 'red';
return;
}


// Validasi email
if (!email.includes('@')) {
pesan.textContent = 'Email harus mengandung karakter @';
pesan.style.color = 'red';
return;
}


// Validasi nomor HP
if (isNaN(hp)) {
pesan.textContent = 'Nomor HP hanya boleh angka';
pesan.style.color = 'red';
return;
}


// Validasi kuota
if (totalPeserta >= MAX) {
pesan.textContent = 'Pendaftaran ditutup, kuota sudah penuh';
pesan.style.color = 'red';
return;
}


// Tambah peserta (DOM)
const li = document.createElement('li');
li.textContent = `${nama} - ${kategori}`;
listPeserta.appendChild(li);


totalPeserta++;
jumlah.textContent = totalPeserta;


pesan.textContent = 'Pendaftaran berhasil!';
pesan.style.color = 'green';


form.reset();
});