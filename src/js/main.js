'use strict';


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const   content = document.querySelector('.content'),
            body    = document.querySelector('body'),
            width   = window.innerWidth;

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
        };
    });
    // why hover
    const why = document.querySelector('.why');
    why.addEventListener('mousemove', (e) => {
        let clientX = e.pageX;
        let clientY = e.pageY;

        let request = requestAnimationFrame(updateMe);

        function updateMe() {
            const   item1 = document.querySelector('.why__background_3'),
                    item2 = document.querySelector('.why__background_2');

            let moveX = clientX / 200;
            let moveY = clientY / 200;

            item1.style = `
                transform: translate(${moveX * 4}px, ${moveY}px);
            `
            item2.style = `
                transform: translate(${moveX * 2}px, ${moveY * 4}px);
            `
        }
    });
    // reviews hover
    const reviews = document.querySelector('.reviews');
    const reviewsModule = document.querySelector('.reviews__module');
    const reviewsImg = document.querySelectorAll('.reviews__item > img');
    reviews.addEventListener('mousemove', (e) => {
        let clientX = e.pageX;
        let clientY = e.pageY;

        let request = requestAnimationFrame(updateMe);

        function updateMe() {
            let moveX = clientX + 100;
            let moveY = clientY;

            reviewsModule.style = `
                transform: translate(${moveX}px, ${moveY}px);
            `
        };
    });
    for (const iterator of reviewsImg) {
        iterator.addEventListener('mouseover', () => {
            reviewsModule.classList.add('active')
        });
        iterator.addEventListener('mouseout', () => {
            reviewsModule.classList.remove('active')
        });
    };

    // gsap
    // concept
    const tlConcept = gsap.timeline({
        scrollTrigger: {
            trigger: '.concept',
            // pin: true,
            toggleActions: 'restart none none restart'
        }
    });
    tlConcept.from('.concept__uptext', {y: 300, opacity: 0, scale: 5, duration: 2 });
    tlConcept.from('.concept__heading', {y: 100, opacity: 0, duration: 1 });
    tlConcept.from('.concept__button', {y: 100, opacity: 0, duration: 1 }, "-=0.5");

    // works
    const tlWorks = gsap.timeline({
        scrollTrigger: {
            trigger: '.concept',
            start: 'top top'
        }
    });
    tlWorks.from('.works >.wrapper', { y: 200, opacity: 0, duration: 1 });

    // why 
    const tlWhy = gsap.timeline({
        scrollTrigger: {
            trigger: '.why__text',
        }
    });
    tlWhy.from('.why__text > .heading_2', { y: 200, opacity: 0, duration: 1.5});
    tlWhy.from('.why__text > div', { y: 100, opacity: 0, duration: 1.5}, '-=1.2');
    tlWhy.from('.why__text > .text', { y: 100, opacity: 0, duration: 1.5}, '-=1.2');

    // cards
    const tlCards = gsap.timeline({
        scrollTrigger: {
            trigger: '.cards',
            // start: '-120px -120px'
        }
    });
    tlCards.from('.cards__item_card', { y: 200, opacity: 0, duration: 1});
    tlCards.from('.cards__item', { opacity: 0, duration: 1}, '-=1');

    // reviews

    const tlReviews = gsap.timeline({
        scrollTrigger: {
            trigger: '.reviews__text',
        }
    });
    tlReviews.from('.reviews__text', { y: 100, opacity: 0, duration: 1});
    tlReviews.from('.reviews__row', { y: 100, opacity: 0, duration: 1});

    // about 

    const tlAbout = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'center center'
        }
    });

    tlAbout.from('.about__item_1 > .text_mini', { y: 100, opacity: 0, duration: 1});
    tlAbout.from('.about__item_1 > .heading_4', { y: 200, opacity: 0, duration: 2}, '-=1');
    tlAbout.from('.about__item_1 > .text', { y: 100, opacity: 0, duration: 2}, '-=1.5');
    tlAbout.from('.about__item_1 > img', { opacity: 0, duration: 1}, '-=2');

    tlAbout.from('.about__item_2', { x: 400, opacity: 0, duration: 2}, '-=2');
    
});