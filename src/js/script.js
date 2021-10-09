'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const cookie = document.querySelector('.push');
    const btn = document.querySelector('.push__btn');

    setTimeout(() => {
        showCookie(cookie);
        btn.addEventListener('click', () => {
            showCookie(cookie);
        });
    }, 2000)


    function showCookie(push) {
        push.classList.toggle('push_hide');
    }

   
    const form = document.querySelector('.feedback-form'),
          formBtn = form.querySelector('.feedback-form__btn'),
          input = document.querySelectorAll('.feedback-form__input');
    
    form.addEventListener('submit', (e) => {

        input.forEach(item => {
            if(!item.value) {
                e.preventDefault();
                showError(item);
            }

            item.addEventListener('input', () => {
                item.classList.remove('error');
            });
        });
    });

    function showError(input){
        input.placeholder = 'FILL IN THE FIELD!';
        input.classList.add('error');
    }

});

