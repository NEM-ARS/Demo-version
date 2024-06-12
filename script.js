let btn = document.querySelector('.secton__button');
let modal = document.querySelector('.modal');
let close = document.querySelector('.form__close__btn');
btn.onclick = ()=> modal.classList.add('show')
close.onclick = ()=> modal.classList.remove('show')