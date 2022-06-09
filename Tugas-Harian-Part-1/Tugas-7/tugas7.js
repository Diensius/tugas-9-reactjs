// Soal 1 ( Destructuring Array )

let dataPeserta = ["john", "laki-laki", "programmer", "30"];

let [nama, gender, job, umur] = dataPeserta;

let output = `Halo, nama saya ${nama}. saya ${gender} berumur ${umur} bekerja sebagai seorang ${job}`

console.log(output);

// Soal 2 ( Mengeluarkan element array )

let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]

for(var i = 0; i < array1.length; i++) 
{
    console.log(array1[i]);
}

// Soal 3 ( Mengeluarkan element array dan dengan kondisi )

let array2 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]

for(var j = 0; j < array2.length; j++) 
{
    if(array2[j] % 2 === 0)
    {
        console.log(array2[j]);
    }
}

// Soal 4 ( Menghilangkan element dan menggabungkan element menjadi string )

let kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"];

let slug = kalimat.join(" ")

console.log(slug);

// soal 5 ( Menambahkan, Mengurutkan dan mengeluarkan element array )

var sayuran=[]

sayuran.push('kangkung', 'bayam', 'buncis', 'kubis', 'timun', 'seledri', 'tauge');

sayuran.sort();
var j=1;

for(var i = 0; i < sayuran.length; i++)
{
    console.log( i+1 + ' ' + sayuran[i]);
    j++;
}