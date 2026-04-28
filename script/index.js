const services = [
    {
        title: "Tratamento para transtornos, disfunções e queixas sexuais",
        img: "src/image/TCS.png",
        text: "Atendimento voltado à compreensão de dificuldades relacionadas à sexualidade, integrando escuta clínica, intervenção terapêutica e cuidado com os impactos emocionais e relacionais.",
        url: "psychotherapy.html"
    },
    {
        title: "Tratamento para transtorno de estresse pós-traumático",
        img: "src/image/TEPT.png",
        text: "Acompanhamento psicoterapêutico para pessoas que vivenciaram experiências traumáticas e buscam reduzir sintomas, recuperar segurança emocional e reorganizar a vida cotidiana.",
        url: "psychotherapy.html"
    },
    {
        title: "Psicoterapia online",
        img: "src/image/about-me.png",
        text: "Processo terapêutico online para promoção de saúde mental, autoconhecimento e cuidado contínuo, com base em abordagens alinhadas à necessidade de cada paciente.",
        url: "psychotherapy.html"
    }
];

const cardList = document.querySelector("#card-list");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const indicatorsContainer = document.querySelector(".carousel-indicators");
const servicesMenu = document.querySelector("#services-menu");
const servicesMenuTrigger = document.querySelector(".nav-dropdown-trigger");

if (servicesMenu && servicesMenuTrigger) {
    services.forEach((service) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = service.url;
        link.textContent = service.title;
        item.appendChild(link);
        servicesMenu.appendChild(item);
    });

    servicesMenuTrigger.addEventListener("click", () => {
        const isExpanded = servicesMenuTrigger.getAttribute("aria-expanded") === "true";
        servicesMenuTrigger.setAttribute("aria-expanded", String(!isExpanded));
    });

    document.addEventListener("click", (event) => {
        if (!servicesMenuTrigger.parentElement?.contains(event.target)) {
            servicesMenuTrigger.setAttribute("aria-expanded", "false");
        }
    });
}

if (cardList && nextButton && prevButton && indicatorsContainer) {
    const autoPlayDelay = 4500;

    const createCard = (service) => {
        const card = document.createElement("li");
        card.classList.add("card", "image-card");
        card.innerHTML = `
            <img src="${service.img}" alt="${service.title}">
            <div class="card-text-content">
                <div class="card-text">
                    <h2>${service.title}</h2>
                    <p>${service.text}</p>
                </div>
                <a class="more-button" href="${service.url}">Saiba mais</a>
            </div>
        `;
        return card;
    };

    const createIndicator = (index) => {
        const indicator = document.createElement("button");
        indicator.type = "button";
        indicator.classList.add("carousel-indicator");
        indicator.setAttribute("aria-label", `Ir para o serviço ${index + 1}`);
        indicator.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
            restartAutoPlay();
        });
        return indicator;
    };

    services.forEach((service) => {
        cardList.appendChild(createCard(service));
    });

    let currentIndex = 0;
    const indicators = services.map((_, index) => {
        const indicator = createIndicator(index);
        indicatorsContainer.appendChild(indicator);
        return indicator;
    });

    const updateIndicators = () => {
        indicators.forEach((indicator, index) => {
            const isActive = index === currentIndex;
            indicator.classList.toggle("is-active", isActive);
            indicator.setAttribute("aria-current", isActive ? "true" : "false");
        });
    };

    const updateCarousel = () => {
        const offset = -(currentIndex * 100);
        cardList.style.transform = `translateX(${offset}%)`;
        updateIndicators();
    };

    const goToNextCard = () => {
        currentIndex = (currentIndex + 1) % services.length;
        updateCarousel();
    };

    let autoPlayIntervalId;

    const startAutoPlay = () => {
        autoPlayIntervalId = window.setInterval(() => {
            goToNextCard();
        }, autoPlayDelay);
    };

    const stopAutoPlay = () => {
        window.clearInterval(autoPlayIntervalId);
    };

    const restartAutoPlay = () => {
        stopAutoPlay();
        startAutoPlay();
    };

    nextButton.addEventListener("click", () => {
        goToNextCard();
        restartAutoPlay();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + services.length) % services.length;
        updateCarousel();
        restartAutoPlay();
    });

    let resizeTimeoutId;

    window.addEventListener("resize", () => {
        window.clearTimeout(resizeTimeoutId);
        resizeTimeoutId = window.setTimeout(() => {
            updateCarousel();
        }, 200);
    });

    cardList.addEventListener("mouseenter", stopAutoPlay);
    cardList.addEventListener("mouseleave", startAutoPlay);

    updateCarousel();
    startAutoPlay();
}
