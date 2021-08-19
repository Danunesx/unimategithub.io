let checkbtn = document.querySelector('.checkbtn')
let img = document.querySelector('.menu-icon')
let src_base = './img/icons/'

let i = 0

checkbtn.addEventListener('click', () => {
    if (i % 2 == 0){
        img.setAttribute('src', src_base + 'close-menu-icon.png')
    } else{
        img.setAttribute('src', src_base + 'menu-icon.png')
    }
    i++
})