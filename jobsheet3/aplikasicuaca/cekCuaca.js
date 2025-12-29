// cekCuaca.js
const request = require('postman-request')

// ==================== KONFIGURASI ====================
const API_KEY = '33bb8442d140b51bd951e5cdee89ec6a'

// ==================== FUNGSI BANTU ====================
const tampilkanPemisah = (judul) => {
    console.log("\n" + "=".repeat(60))
    console.log(`📌 ${judul}`)
    console.log("=".repeat(60))
}

// ==================== LATIHAN 1 ====================
const latihan1 = () => {
    tampilkanPemisah("LATIHAN 1: API ACCESS WEATHERSTACK")
    
    // Koordinat untuk berbagai lokasi
    const lokasi = [
        { nama: "Universitas Negeri Padang", lat: -0.95, lon: 100.35 },
        { nama: "Jakarta", lat: -6.2, lon: 106.8 },
        { nama: "Bali", lat: -8.4, lon: 115.2 }
    ]
    
    lokasi.forEach((loc, index) => {
        const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${loc.lat},${loc.lon}&units=m`
        
        request({ url: url, json: true }, (error, response) => {
            if (error) {
                console.log(`❌ ERROR untuk ${loc.nama}:`, error)
                return
            }
            
            if (response.body.error) {
                console.log(`⚠️  API Error untuk ${loc.nama}:`, response.body.error.info)
                return
            }
            
            console.log(`\n📍 ${loc.nama.toUpperCase()}`)
            console.log(`   Koordinat: ${loc.lat}, ${loc.lon}`)
            console.log(`   🌡️  Suhu: ${response.body.current.temperature}°C`)
            console.log(`   🌤️  Cuaca: ${response.body.current.weather_descriptions[0]}`)
            console.log(`   💧 Kelembaban: ${response.body.current.humidity}%`)
            console.log(`   🌧️  Hujan: ${response.body.current.precip}%`)
            console.log(`   💨 Angin: ${response.body.current.wind_speed} km/jam`)
            
            // Mengakses weather_descriptions sebagai array
            console.log(`   📋 Deskripsi lengkap:`, response.body.current.weather_descriptions)
        })
    })
}

// ==================== LATIHAN 2 ====================
const latihan2 = () => {
    tampilkanPemisah("LATIHAN 2: PARAMETER TAMBAHAN")
    
    // Menggunakan parameter tambahan: units dan language
    const contohURL = [
        {
            nama: "Default (Metric)",
            url: `http://api.weatherstack.com/current?access_key=${API_KEY}&query=-0.95,100.35&units=m`
        },
        {
            nama: "Fahrenheit",
            url: `http://api.weatherstack.com/current?access_key=${API_KEY}&query=-0.95,100.35&units=f`
        },
        {
            nama: "Bahasa Indonesia",
            url: `http://api.weatherstack.com/current?access_key=${API_KEY}&query=-0.95,100.35&units=m&language=id`
        },
        {
            nama: "Bahasa Inggris",
            url: `http://api.weatherstack.com/current?access_key=${API_KEY}&query=-0.95,100.35&units=m&language=en`
        }
    ]
    
    contohURL.forEach((item, index) => {
        request({ url: item.url, json: true }, (error, response) => {
            if (error) {
                console.log(`❌ ERROR untuk ${item.nama}:`, error)
                return
            }
            
            console.log(`\n🔧 KONFIGURASI: ${item.nama}`)
            console.log(`   URL: ${item.url}`)
            
            if (response.body.current) {
                console.log(`   Suhu: ${response.body.current.temperature}°`)
                console.log(`   Deskripsi: ${response.body.current.weather_descriptions[0]}`)
                console.log(`   Unit: ${response.body.request.unit}`)
                console.log(`   Bahasa: ${response.body.request.language}`)
            }
        })
    })
}

// ==================== LATIHAN 3 ====================
const latihan3 = () => {
    tampilkanPemisah("LATIHAN 3: APLIKASI CUACA LENGKAP")
    
    console.log("🎯 APLIKASI CEK CUACA BERDASARKAN KOORDINAT")
    console.log("   (Tanpa Mapbox, langsung input koordinat)\n")
    
    // Contoh koordinat untuk beberapa kota
    const kota = [
        { nama: "Padang", lat: -0.95, lon: 100.35 },
        { nama: "Bandung", lat: -6.9, lon: 107.6 },
        { nama: "Surabaya", lat: -7.25, lon: 112.75 }
    ]
    
    kota.forEach((kota, index) => {
        const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${kota.lat},${kota.lon}&units=m&language=id`
        
        request({ url: url, json: true }, (error, response) => {
            if (error) {
                console.log(`❌ Gagal mendapatkan data untuk ${kota.nama}`)
                return
            }
            
            if (response.body.error) {
                console.log(`⚠️  ${kota.nama}: ${response.body.error.info}`)
                return
            }
            
            const data = response.body
            
            console.log(`\n🏙️  ${kota.nama.toUpperCase()}`)
            console.log(`   📍 Lokasi: ${data.location.name}, ${data.location.region}, ${data.location.country}`)
            console.log(`   🗺️  Koordinat: ${kota.lat}, ${kota.lon}`)
            console.log(`   🕒 Waktu Lokal: ${data.location.localtime}`)
            console.log(`   ⏰ Waktu Observasi: ${data.current.observation_time} UTC`)
            
            console.log(`\n   🌡️  SUHU: ${data.current.temperature}°C`)
            console.log(`      Terasa seperti: ${data.current.feelslike}°C`)
            
            console.log(`\n   🌤️  KONDISI CUACA:`)
            console.log(`      ${data.current.weather_descriptions[0]}`)
            console.log(`      Kelembaban: ${data.current.humidity}%`)
            console.log(`      Tekanan: ${data.current.pressure} hPa`)
            console.log(`      UV Index: ${data.current.uv_index}`)
            
            console.log(`\n   💨 ANGIN:`)
            console.log(`      Kecepatan: ${data.current.wind_speed} km/jam`)
            console.log(`      Arah: ${data.current.wind_dir} (${data.current.wind_degree}°)`)
            
            console.log(`\n   👁️  VISIBILITAS: ${data.current.visibility} km`)
            console.log(`   ☁️  CLOUDCOVER: ${data.current.cloudcover}%`)
            console.log(`   🌧️  CURAH HUJAN: ${data.current.precip} mm`)
            
            // Indikator visual
            const suhu = data.current.temperature
            let indikator = "❄️ "
            if (suhu > 30) indikator = "🔥"
            else if (suhu > 25) indikator = "☀️"
            else if (suhu > 20) indikator = "⛅"
            else if (suhu > 15) indikator = "🌥️"
            
            console.log(`\n   ${indikator} KESIMPULAN: ${indikator}`)
            console.log(`      Suhu ${suhu}°C termasuk ${suhu > 28 ? 'PANAS' : suhu < 22 ? 'DINGIN' : 'NYAMAN'}`)
        })
    })
}

// ==================== PROGRAM UTAMA ====================
console.log("\n" + "✨".repeat(30))
console.log("   JOB SHEET 3: HTTP REQUEST & API")
console.log("   MENGGUNAKAN WEATHERSTACK API SAJA")
console.log("✨".repeat(30))

// Jalankan semua latihan dengan delay
setTimeout(latihan1, 1000)
setTimeout(latihan2, 4000)
setTimeout(latihan3, 7000)

console.log("\n⏳ Menjalankan latihan... Tunggu beberapa detik!")