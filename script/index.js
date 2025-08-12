const services = [
    {
        "title": "Tratamento para Transtornos: Disfunções e Queixas Sexuais",
        "img": "src/image/TCS.png",
        "text": "tratamento de transtornos, disfunções e queixas relacionadas à sexualidade. Focado em compreender e atender as necessidades físicas, emocionais e psicológicas com o uso da terapia, técnicas de intervenção e suporte multidisciplinar para promover uma vida sexual saudável e satisfatória.",
        "url": "psychotherapy.html"
    },
    {
        "title": "Tratamento para Transtorno de Estresse Pós-Traumático",
        "img": "src/image/TEPT.png",
        "text": "O Transtorno de Estresse Pós-Traumático (TEPT) é uma condição psicológica que surge como resposta a eventos traumáticos intensos, como acidentes, violência, desastres naturais ou situações de guerra. Caracterizado por sintomas como revivência do trauma, evasão de situações relacionadas, alterações no humor e hiperalerta, o TEPT pode afetar significativamente a qualidade de vida e as relações interpessoais.",
        "url": "psychotherapy.html"
    },
    {
        "title": "Psicoterapia online3",
        "img": "src/image/about-me.png",
        "text": "A psicoterapia é um processo voltado para promoção de saúde mental, autoconhecimento e tratamento de Transtornos Mentais. Existem diversas abordagens de psicoterapia. Eu atendo através das abordagens: Terapia Cognitivo Comportamental, Terapia Comportamental Dialética e Terapia do Esquema.",
        "url": "psychotherapy.html"
    }
];

const cardList = document.querySelector('#card-list');
const cardContainer = document.querySelector('#card-list');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');


function createCard(service) {
    const card = document.createElement('li');
    card.classList.add('card', 'image-card');
    card.innerHTML = `
        <img id="psychotherapy-image" src="${service.img}" alt="psychotherapy image">
        <div class="card-text-content">
            <div class="card-text">
                <h2>${service.title}</h2>
                <p>${service.text}</p>
            </div>
            <a class="more-button" href="${service.url}">Saiba mais...</a>
        </div>
    `;
    return card;
};

services.forEach(service => {
    cardList.appendChild(createCard(service));
});


let currentIndex = 0;

function updateNavigationVisibility() {
    prevButton.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    nextButton.style.visibility = currentIndex === services.length - 1 ? 'hidden' : 'visible';
}

function updateCarousel() {
    const offset = -(currentIndex * 100);
    cardContainer.style.transform = `translateX(${offset}%)`;
    updateNavigationVisibility();
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

const throttledResizeHandler = throttle(() => {
    currentIndex = 0;
    updateCarousel();
}, 200);

window.addEventListener('resize', throttledResizeHandler);

updateNavigationVisibility();