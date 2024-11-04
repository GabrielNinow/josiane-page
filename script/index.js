const services = [
    {
        "title": "Psicoterapia online",
        "img": "src/image/Placeholder.png",
        "text": "A psicoterapia é um processo voltado para promoção de saúde mental, autoconhecimento e tratamento de Transtornos Mentais. Existem diversas abordagens de psicoterapia. Eu atendo através das abordagens: Terapia Cognitivo Comportamental, Terapia Comportamental Dialética e Terapia do Esquema. ",
        "url": "Psychotherapy.com"
    },
    {
        "title": "Psicoterapia online2",
        "img": "src/image/Placeholder.png",
        "text": "A psicoterapia é um processo voltado para promoção de saúde mental, autoconhecimento e tratamento de Transtornos Mentais. Existem diversas abordagens de psicoterapia. Eu atendo através das abordagens: Terapia Cognitivo Comportamental, Terapia Comportamental Dialética e Terapia do Esquema. ",
        "url": "Psychotherapy.com"
    },
    {
        "title": "Psicoterapia online3",
        "img": "src/image/Placeholder.png",
        "text": "A psicoterapia é um processo voltado para promoção de saúde mental, autoconhecimento e tratamento de Transtornos Mentais. Existem diversas abordagens de psicoterapia. Eu atendo através das abordagens: Terapia Cognitivo Comportamental, Terapia Comportamental Dialética e Terapia do Esquema. ",
        "url": "Psychotherapy.com"
    }
]

services.forEach((service) => {
    const card = document.createElement('li')
    card.classList = 'card image-card'
    card.innerHTML = `
            <img id="psychotherapy-image" src="${service.img}" alt="psychotherapy image">
            <div class="card-text-content">
                <div class="card-text">
                    <h2>${service.title}</h2>
                    <p>${service.text}</p>
                </div>
                <a class="more-button" href="${service.url}">Saiba mais <img src="src/icon/right-arrow.svg"
                        alt="right arrow icon"></a>
                
                <button class="prev"> 
                    <img src="src/icon/left-arrow.svg" alt="left button icon">
                </button>

                <button class="next"> 
                    <img src="src/icon/right-arrow.svg" alt="right button icon">
                </button>
            </div>    
        `

    document.querySelector('#card-list').append(card)
})

document.querySelectorAll('.image-card').forEach(card => {
        const cardContainer = document.querySelector('#card-list');
        const items = document.querySelectorAll('.image-card');
        const nextButton = card.querySelector('.next');
        const prevButton = card.querySelector('.prev');

        let currentIndex = 0;
    
        function arrowDisplay() {
            if (currentIndex === 0) {
                prevButton.style.visibility = 'hidden'
            } else {
                prevButton.style.visibility = 'visible'
            }
    
            if (currentIndex == items.length - 1) {
                nextButton.style.visibility = 'hidden'
            } else {
                nextButton.style.visibility = 'visible'
            }
        }
    
        function updateCarousel() {
            const offset = -(currentIndex * 100);
            cardContainer.style.transform = `translateX(${offset}%)`;

            arrowDisplay();
        }
    
        nextButton.addEventListener('click', () => {
                currentIndex++;
                console.log('aumentou' + currentIndex)
                updateCarousel();    
        });
    
        prevButton.addEventListener('click', () => {
                currentIndex--;
                console.log('diminuiu' + currentIndex)
                updateCarousel();
        });
    
        window.addEventListener('resize', () => {
            currentIndex = 0;
            updateCarousel();
            arrowDisplay();
        });
    
        arrowDisplay();
    })
