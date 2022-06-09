// soal 1 ( Membuat 2 Conditional )

var nilaiJohn = 80;
var nilaiDoe = 50;

if(nilaiJohn >= 80)
{
    console.log("A");
}
else if(nilaiJohn >= 70 && nilaiJohn < 80)
{
    console.log("B");
}
else if(nilaiJohn >= 60 && nilaiJohn < 70)
{
    console.log("C");
}
else if(nilaiJohn >= 50 && nilaiJohn < 60)
{
    console.log("D");
}
if(nilaiJohn < 50)
{
    console.log("E");
}

if(nilaiDoe >= 80)
{
    console.log("A");
}
else if(nilaiDoe >= 70 && nilaiDoe < 80)
{
    console.log("B");
}
else if(nilaiDoe >= 60 && nilaiDoe < 70)
{
    console.log("C");
}
else if(nilaiDoe >= 50 && nilaiDoe < 60)
{
    console.log("D");
}
if(nilaiDoe < 50)
{
    console.log("E");
}

// soal 2 ( membuat conditional menggunakan switch case )

var tanggal = 17;
var bulan = 10;
var tahun = 1998;

switch(bulan) 
{
    case 9:
    console.log('17 Oktober 1998'); 
    break;
    
    case 10:
    console.log('17 Oktober 1998'); 
    break;
}

// soal 3 ( 2 Looping  Sederhana )

for(let a = 1; a <= 20; a++)
{
    if(a % 2 === 0)
    {
        console.log(`${a} - I love coding`);
    }
}

for(let b = 1; b >= 20; b++)
{
    if(b % 2 === 0)
    {
        console.log(`${b} - I will become a frontend developer`);
    }
}

// soal 4 ( Looping dengan conditional )

for(let c = 1; c <= 20; c++)
{
    if(c % 3 === 0 &&  c % 2 !== 0)
    {
        console.log(`${c} - I love coding`);
    }
    else if(c % 2 !== 0)
    {
        console.log(`${c} - Santai`);
    }
    else if(c % 2 === 0)
    {
        console.log(`${c} - Berkualitas`);
    }
}

// soal 5 ( Segitita Looping )

var s = '';

for(var i=0; i<7; i++)
{
    for(var j=0; j<=i; j++)
    {
        s += '#';
    }
    s += '\n';
}

console.log(s);