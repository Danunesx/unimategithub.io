let back = document.getElementById('back');
let behind = document.getElementById('behind');
let textbg = document.getElementById('textbg');
let front = document.getElementById('front');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 900){
        console.log('acessado');
        let value = window.scrollY;
        back.style.left = value * 0.25 + 'px'
        behind.style.left = value * -0.25 + 'px'
        textbg.style.marginLeft = value * 0.15 + 'px'
        front.style.marginLeft = value * 0.25 + 'px'
    }
})

