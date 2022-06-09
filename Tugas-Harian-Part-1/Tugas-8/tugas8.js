// soal 1 ( Membuat Function dengan rumus )

const luasPersegiPanjang = (p, l) => {
    return p * l;
}

const kelilingPersegiPanjang = (p, l) => {
    return 2 * p + l;
}

const volumeBalok = (p, l, t) => {
    return p * l * t;
}
 
let panjang= 12
let lebar= 4
let tinggi = 8
 
let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(HasilluasPersegiPanjang ) 
console.log(HasilkelilingPersegiPanjang )
console.log(HasilvolumeBalok )

// Soal 2 ( Membuat Function return String + rest parameter )

const introduce = (...params) => {
    let = [nama, umur, gender, hobi] = params;

    if(gender === "Laki-Laki")
    {
        gender = "Pak";
    }
    else
    {
        gender = "Bu";
    }

    return `${gender} ${nama} adalah seorang penulis yang berusia 30 tahun`;
}
 
//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

// soal 3 ( mengubah array menjadi object )

let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]

let objDaftarPeserta = {
    namaPeserta: "John Doe",
    genderPeserta: "laki-laki",
    hobiPeserta: "baca buku",
    tahunPeserta: 1992
};

console.log(objDaftarPeserta)

// soal 4 ( Membuat sebuah array of object dan melakukan filter )

var buah = [
    {nama: "Nanas", warna: "Kuning", adaBijinya: "Tidak", harga: "9000"}, 
    {nama: "Jeruk", warna: "Oranye", adaBijinya: "Ada", harga: "8000"},  
    {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "Ada", harga: "10000"},
    {nama: "Pisang", warna: "Kuning", adaBijinya: "Tidak", harga: "5000"}
]

let output = buah.filter((e) => {
    return e.adaBijinya === "Tidak";
});

console.log(output)

// Soal 5 ( Destructuring pada Object )

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali
 
let { brand : phoneName, brand} = phone
let { name : phoneBrand, name} = phone
let { year : year} = phone
let { colors : colorBlack, colorBronze, colors} = phone

// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 

// soal 6 ( Spred Operator pada Object )

let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

buku = {
    ...dataBukuTambahan,
    ...buku,
    warnaSampul : [...buku.warnaSampul, warna]
}

console.log(buku)

// soal 7 (  membuat function yang mengisi data kedalam array kosong )

function tambahDataFilm(...params) {
    let [nama, durasi, genre, tahun] = params;
    console.log(nama, durasi, genre, tahun);

    let obj = {
        nama, durasi, genre, tahun
    }

    return dataFilm.push(obj);
}

let dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log(dataFilm)