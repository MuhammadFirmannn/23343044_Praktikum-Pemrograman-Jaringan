const fs = require('fs')

//fs.writeFileSync('catatan.txt', 'Nama Saya Muhammad Firman')
fs.appendFileSync('catatan.txt', ' Saya berasal dari Payakumbuh')

const catatan = require('./catatan.js')
const pesan = catatan()
console.log(pesan)

const validator = require('validator')
const ambilCatatan = require('./catatan.js')
const pesan = ambilCatatan()
console.log(pesan)
console.log(validator.isURL('https://google.com'))