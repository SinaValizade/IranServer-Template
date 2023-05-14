// $in@
let btn, menu, profile, flag = 'show', item, divs, flagBlur = 'show';
btn = document.getElementById('btn-menu');
menu = document.querySelector('div.menu');
item = document.querySelectorAll('p.item-menu');
profile = document.querySelector('img.profile');
divs = document.querySelectorAll('div');

btn.addEventListener("click" , icon);
btn.addEventListener("click" , blur);
btn.addEventListener("click" , hamburgerMenu);
function icon() {
    if (!btn.classList.contains('active')){
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}
function blur() {
    if (flagBlur === "show"){
        for (let div of divs) {
            if (!div.classList.contains('crystal')){
                div.style.filter = 'blur(4px)';
                div.style.transition = 'all 500ms';
            }
        }
        flagBlur = 'hidden';
    } else {
        for (let div of divs) {
            if (!div.classList.contains('crystal')){
                div.style.filter = 'none';
            }
        }
        flagBlur = 'show';
    }
}
function hamburgerMenu() {
    if (flag === 'show'){
        menu.style.width = '14rem';
        setTimeout( () => {
            for (let i of item) {
                i.style.display = 'block';
            }
            profile.style.display = 'block';
        },300)
        flag = 'hidden';
    }else {
        menu.style.width = '0';
        for (let i of item) {
            i.style.display = 'none';
        }
        profile.style.display = 'none';
        flag = 'show';
    }
}
