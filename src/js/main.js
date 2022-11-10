'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const   content = document.querySelector('.content'),
            body    = document.querySelector('body'),
            width   = window.innerWidth;
    console.log(width);

    // header burger
    const   header       = document.querySelector('.header'),
            headerBurger = document.querySelector('.header__burger');

    headerBurger.addEventListener('click', () => {
        header.classList.toggle('active');
        body.classList.toggle('lock');
    });

    // work hover
    const works = document.querySelector('.works');
    works.addEventListener('mousemove', (e) => {
        let clientX = e.pageX;
        let clientY = e.pageY;

        let request = requestAnimationFrame(updateMe);

        function updateMe() {
            const   item1 = document.querySelector('.works__item_1').children,
                    item2 = document.querySelector('.works__item_2').children,
                    item3 = document.querySelector('.works__item_3').children,
                    item4 = document.querySelector('.works__item_4').children;

            let moveX = clientX / 300;
            let moveY = clientY / 300;

            item1[0].style = `
                transform: translate(${moveX * 4}px, ${moveY}px);
            `
            item1[1].style = `
                transform: translate(${moveX * 2}px, ${moveY * 4}px);
            `
            item1[2].style = `
                transform: translate(${moveX * 4}px, ${moveY}px);
            `
            item2[0].style = `
                transform: translate(${moveX * 4}px, ${moveY}px);
            `
            item2[1].style = `
                transform: translate(${moveX * 2}px, ${moveY * 4}px);
            `
            item2[2].style = `
                transform: translate(${moveX * 3}px, ${moveY * 4}px);
            `
            item3[0].style = `
                transform: translate(${(moveX * 4) - 10}px, calc(${moveY}px + 50%));
            `
            item3[1].style = `
                transform: translate(calc(${moveX * 4}px - 5%), calc(${moveY}px + 42%));
            `
            item4[0].style = `
                transform: translate(${moveX * 4}px, ${moveY}px);
            `
            item4[1].style = `
                transform: translate(${moveX / 2}px, ${moveY * 2}px);
            `
            item4[2].style = `
                transform: translate(${moveX * 4}px, ${moveY}px);
            `
        }
    });

    // gsap
    
});