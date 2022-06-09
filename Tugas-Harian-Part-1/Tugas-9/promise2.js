// Soal 3 ( menjalankan promise menggunakan async & await )

function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
        var books=[
            {name: "shinchan", totalPage: 50, isColorful: true},
            {name: "Kalkulus", totalPage: 250, isColorful: false},
            {name: "doraemon", totalPage: 40, isColorful: true},
            {name: "algoritma", totalPage: 250, isColorful: false},
        ]
        if (amountOfPage >= 40) {
            resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            var reason= new Error("Maaf buku di bawah 40 halaman tidak tersedia")
            reject(reason);
        }
    });
}
  
const filterBookPromise = (books) =>{
    return new Promise( (resolve, reject) => {
        resolve(books = 4)
    })
}

const afterAsync = async (param) => {
    let output = await filterBookPromise(param)
    console.log(output)
}

afterAsync(books)
console.log(books)