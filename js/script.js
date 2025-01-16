// var | let memungkinkan kita untuk mengubah nilainya setelah kita isi

// function replaceName(){

//     let name = prompt("siapakah anda?", "");
//     document.getElementById("name").innerHTML = name
// }

// // addEventListener dia akan mendengarkan event apapun yang terjadi dalam html. Setiap di click dia akan menjelaskan sebuah function
// document.getElementById("gantinama").addEventListener("click" , function() {
//     replaceName();
// })


// pakai kode baris ini, jika ingin disambut alert dulu baru output web nya
// let name = prompt("siapakah anda?", "");
// document.getElementById("name").innerHTML = name

// let nameinput = document.getElementById('name-input')

// document.getElementById('submit').addEventListener("click" , function() {
//     const nama = nameinput.value

//     document.getElementById('name').innerHTML = nama
// })

// fungsi buat nama
function validateForm() {
    const nama = document.forms['message-form']['name-input'].value
    const angka = 11
    
    if (nama == '') {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong";
        
        return false
    }

    setName(nama);

    return false;

}

function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById('error-name').innerHTML = "";
}

//fungsi buat geser-geser foto
let slideIndex = 0; // Indeks slide dimulai dari 0

const changeSlide = (n) => {
    showDivs((slideIndex += n));
};

const showDivs = (n) => {
    const imgList = document.getElementsByClassName("slideshow");
    if (n >= imgList.length) slideIndex = 0; // Kembali ke awal
    if (n < 0) slideIndex = imgList.length - 1; // Ke akhir
    for (let i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"; // Sembunyikan semua gambar
    }
    imgList[slideIndex].style.display = "block"; // Tampilkan gambar aktif
};

// Inisialisasi untuk menampilkan gambar pertama
document.addEventListener("DOMContentLoaded", () => {
    showDivs(slideIndex);
});

// Slideshow otomatis
setInterval(() => {
    changeSlide(1);
}, 3000); // Ganti setiap 3 detik

// validasi form
function validateForm() {
    const form = document.forms["message-form"];
    const name = form["full-name"].value;
    const birthDate = form["birth-date"].value; // Updated key
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = form["message"].value;

    if (!name || !birthDate || !gender || !message) {
        document.getElementById("error").innerHTML = "Mohon isi semua form";
        return false;
    }

    // Simulasi setSenderUI, karena tidak jelas implementasinya
    console.log(`Name: ${name}, DOB: ${birthDate}, Gender: ${gender.value}, Message: ${message}`);

    return false; // Prevent form submission for testing
}