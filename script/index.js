const services = [
    {
        "title": "Psicoterapia online",
        "img": "src/image/Placeholder.png",
        "text": "A psicoterapia é um processo voltado para promoção de saúde mental, autoconhecimento e tratamento de Transtornos Mentais. Existem diversas abordagens de psicoterapia. Eu atendo através das abordagens: Terapia Cognitivo Comportamental, Terapia Comportamental Dialética e Terapia do Esquema.",
        "url": "Psychotherapy.com"
    },
    {
        "title": "Psicoterapia online2",
        "img": "src/image/Placeholder.png",
        "text": "A psicoterapia é um processo voltado para promoção de saúde mental, autoconhecimento e tratamento de Transtornos Mentais. Existem diversas abordagens de psicoterapia. Eu atendo através das abordagens: Terapia Cognitivo Comportamental, Terapia Comportamental Dialética e Terapia do Esquema.",
        "url": "Psychotherapy.com"
    },
    {
        "title": "Psicoterapia online3",
        "img": "src/image/Placeholder.png",
        "text": "A psicoterapia é um processo voltado para promoção de saúde mental, autoconhecimento e tratamento de Transtornos Mentais. Existem diversas abordagens de psicoterapia. Eu atendo através das abordagens: Terapia Cognitivo Comportamental, Terapia Comportamental Dialética e Terapia do Esquema.",
        "url": "Psychotherapy.com"
    }
];

const cardContainer = document.querySelector('#card-list');
const nextButton = document.createElement('button');
const prevButton = document.createElement('button');

nextButton.classList.add('next');
nextButton.innerHTML = `<img src="src/icon/right-arrow.svg" alt="right button icon">`;
prevButton.classList.add('prev');
prevButton.innerHTML = `<img src="src/icon/left-arrow.svg" alt="left button icon">`;

document.querySelector('#services').append(prevButton, nextButton);

services.forEach((service) => {
    const card = document.createElement('li');
    card.classList.add('card', 'image-card');
    card.innerHTML = `
        <img id="psychotherapy-image" src="${service.img}" alt="psychotherapy image">
        <div class="card-text-content">
            <div class="card-text">
                <h2>${service.title}</h2>
                <p>${service.text}</p>
            </div>
            <a class="more-button" href="${service.url}">Saiba mais <img src="src/icon/right-arrow.svg" alt="right arrow icon"></a>
        </div>
    `;
    cardContainer.append(card);
});

let currentIndex = 0;

function arrowDisplay() {
    prevButton.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    nextButton.style.visibility = currentIndex === services.length - 1 ? 'hidden' : 'visible';
}

function updateCarousel() {
    const offset = -(currentIndex * 100);
    cardContainer.style.transform = `translateX(${offset}%)`;
    arrowDisplay();
}

nextButton.addEventListener('click', () => {
    if (currentIndex < services.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    currentIndex = 0;
    updateCarousel();
});

arrowDisplay();
