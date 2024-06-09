const experience_cards = document.querySelectorAll('.experiencie__box');
console.log(experience_cards);
experience_cards.forEach((card, index) => {
    if (window.innerWidth >= 768 && (index % 2 !== 0)) {
        console.log(card);
        card.classList.add("experiencie__box__invert")
    }
})