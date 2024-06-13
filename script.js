const btn = document.querySelector('.secton__button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.form__close__btn');
const form = document.getElementById('form');

btn.onclick = () => modal.classList.add('show');

close.onclick = () => formReset();

form.onsubmit = (e) => {
    e.preventDefault();

    const values = new FormData(form);

    for (let value of values) {
        console.log(value);
    }

    formReset()
};

function formReset() {
    form.reset();
    modal.classList.remove('show');
}