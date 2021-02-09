let angka = 11;
temp = ''
for(var i = angka; i > 0; i--){
    temp += angka.substring(i - 1, i)
} if (angka === temp){
    console.log(true)
} else {
    console.log(false)
}