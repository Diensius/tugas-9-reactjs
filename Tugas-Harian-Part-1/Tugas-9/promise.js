// Soal 2 ( menjalankan promise menggunakan then&catch)

// di file promise.js
function readBooksPromise (time, book) {
    console.log("saya mulai membaca " + book.name )
    return new Promise( function (resolve, reject){
        setTimeout(function(){
        let sisaWaktu = time - book.timeSpent
        if(sisaWaktu >= 0 ){
            console.log("saya sudah selesai membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
            resolve(sisaWaktu)
        } else {
            console.log("saya sudah tidak punya waktu untuk baca "+ book.name)
            reject(sisaWaktu)
        }
        }, book.timeSpent)
    })
}

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function readBooksPromise(nomorIdBuku) {
return new Promise( function (resolve, reject){
    var buku = books.find(x=> x.id === nomorIdBuku)
    if (buku === undefined){
      reject("data buku tidak ada")
    }else{
      resolve(buku)
    }
  })
}

readBooksPromise(3).then(function(data) {
    console.log(data)
}).catch(function(err){
    console.log(err)
})