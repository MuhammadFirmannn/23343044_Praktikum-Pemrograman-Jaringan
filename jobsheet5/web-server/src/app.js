const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Mendefinisikan jalur/path untuk konfigurasi Express
const direktoriPublic = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

// Setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)

// Setup direktori
app.use(express.static(direktoriPublic))

// ========== ROUTES ==========

// Halaman utama
app.get('', (req, res) => {
    res.render('index', {
        title: 'Aplikasi Cek Cuaca',
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Muhammad Firman'
    })
})

// Halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        title: 'Tentang Saya',
        judul: 'Tentang Saya',
        nama: 'Muhammad Firman'
    })
})

// Halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        title: 'Bantuan',
        judul: 'Bantuan',
        nama: 'Muhammad Firman',
        teksBantuan: 'Ini adalah teks bantuan untuk aplikasi cek cuaca.'
    })
})

// Halaman infoCuaca (tetap JSON)
app.get('/infoCuaca', (req, res) => {
    res.send({
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang',
        suhu: '26°C',
        kelembaban: '75%'
    })
})

// Wildcard untuk halaman bantuan yang tidak ditemukan
app.get('/bantuan/*', (req, res) => {
    res.render('404', {
        title: '404',
        judul: '404',
        nama: 'Muhammad Firman',
        pesankesalahan: 'Artikel bantuan yang dicari tidak ditemukan.'
    })
})

// Wildcard untuk halaman apapun yang tidak ditemukan
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        judul: '404',
        nama: 'Muhammad Firman',
        pesankesalahan: 'Halaman tidak ditemukan.'
    })
})

// Start server
const port = 4000
app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}.`)
    console.log(`Akses aplikasi di: http://localhost:${port}`)
})