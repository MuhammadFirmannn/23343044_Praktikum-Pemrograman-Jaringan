// app.js - Latihan dasar HTTP Request dengan Weatherstack
const request = require('postman-request')

// ==================== KONFIGURASI ====================
const API_KEY = '33bb8442d140b51bd951e5cdee89ec6a'

// Koordinat untuk Universitas Negeri Padang
const latitude = -0.95
const longitude = 100.35

const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${latitude},${longitude}`

// ==================== LATIHAN BAGIAN B ====================
console.log("=== JOB SHEET 3: HTTP REQUEST & API ===")
console.log("=== LATIHAN BAGIAN B: HTTP REQUEST ===\n")

// Langkah 4: Tampilkan response lengkap
request({ url: url }, (error, response) => {
    if (error) {
        console.log("❌ ERROR: Tidak dapat terhubung ke API")
        console.log(error)
        return
    }
    
    console.log("1. RESPONSE LENGKAP DARI API:")
    console.log("=".repeat(50))
    console.log(response)
    console.log("=".repeat(50) + "\n")
    
    // Langkah 5-6: Parse dan tampilkan data JSON
    console.log("2. DATA DALAM FORMAT JSON:")
    console.log("=".repeat(50))
    const data = JSON.parse(response.body)
    console.log(JSON.stringify(data, null, 2)) // Format JSON rapi
    console.log("=".repeat(50) + "\n")
    
    // Langkah 7: Tampilkan data current saja
    console.log("3. DATA 'CURRENT' SAJA:")
    console.log("=".repeat(50))
    console.log(data.current)
    console.log("=".repeat(50) + "\n")
    
    // Langkah 8: Tampilkan temperature saja
    console.log("4. TEMPERATURE SAJA:")
    console.log("=".repeat(50))
    console.log(`Suhu saat ini: ${data.current.temperature}°C`)
    console.log("=".repeat(50) + "\n")
    
    // Langkah 9-12: Akses data lainnya
    console.log("5. AKSES DATA LAINNYA DARI RESPONSE:")
    console.log("=".repeat(50))
    console.log("📍 LOKASI:")
    console.log(`   Nama: ${data.location.name}`)
    console.log(`   Negara: ${data.location.country}`)
    console.log(`   Region: ${data.location.region}`)
    console.log(`   Zona Waktu: ${data.location.timezone_id}`)
    
    console.log("\n🌤️  CUACA SAAT INI:")
    console.log(`   Suhu: ${data.current.temperature}°C`)
    console.log(`   Terasa seperti: ${data.current.feelslike}°C`)
    console.log(`   Deskripsi: ${data.current.weather_descriptions[0]}`)
    console.log(`   Kode Cuaca: ${data.current.weather_code}`)
    console.log(`   Ikon: ${data.current.weather_icons[0]}`)
    
    console.log("\n💨 KONDISI UDARA:")
    console.log(`   Kecepatan Angin: ${data.current.wind_speed} km/jam`)
    console.log(`   Arah Angin: ${data.current.wind_dir} (${data.current.wind_degree}°)`)
    console.log(`   Tekanan: ${data.current.pressure} hPa`)
    console.log(`   Curah Hujan: ${data.current.precip} mm`)
    console.log(`   Kelembaban: ${data.current.humidity}%`)
    console.log(`   Cloudcover: ${data.current.cloudcover}%`)
    console.log(`   UV Index: ${data.current.uv_index}`)
    console.log(`   Visibilitas: ${data.current.visibility} km`)
    
    console.log("\n🕒 INFORMASI WAKTU:")
    console.log(`   Waktu Observasi: ${data.current.observation_time}`)
    console.log(`   Waktu Lokal: ${data.location.localtime}`)
    console.log(`   Siang/Malam: ${data.current.is_day === "yes" ? "Siang" : "Malam"}`)
    console.log("=".repeat(50))
})