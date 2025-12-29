console.log("Client side javascript file diproses")

// Contoh fungsi untuk form cuaca
const formCuaca = document.querySelector('form')
const inputLokasi = document.querySelector('input')
const pesan1 = document.querySelector('#pesan-1')
const pesan2 = document.querySelector('#pesan-2')

if (formCuaca) {
    formCuaca.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const lokasi = inputLokasi.value
        
        pesan1.textContent = 'Mencari informasi cuaca untuk: ' + lokasi
        pesan2.textContent = ''
        
        // Simulasi request API (nanti bisa diganti dengan request real)
        setTimeout(() => {
            if (lokasi.toLowerCase().includes('padang')) {
                pesan1.textContent = 'Cuaca di ' + lokasi
                pesan2.textContent = 'Suhu: 26°C, Kelembaban: 75%, Kondisi: Cerah'
            } else {
                pesan1.textContent = 'Lokasi ' + lokasi + ' tidak ditemukan'
                pesan2.textContent = 'Coba cari lokasi lain'
            }
        }, 1000)
    })
}

// Fungsi untuk menampilkan tanggal saat ini
function tampilkanTanggal() {
    const now = new Date()
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }
    const tanggal = now.toLocaleDateString('id-ID', options)
    
    const elemenTanggal = document.createElement('p')
    elemenTanggal.textContent = 'Tanggal: ' + tanggal
    elemenTanggal.style.fontSize = '14px'
    elemenTanggal.style.color = '#666'
    elemenTanggal.style.marginTop = '20px'
    
    const footer = document.querySelector('footer')
    if (footer) {
        footer.appendChild(elemenTanggal)
    }
}

// Jalankan ketika halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    tampilkanTanggal()
    console.log('Aplikasi cek cuaca siap digunakan')
})