const carousel = (container) => {
    const buttonnext = container.querySelector('.next');
    const buttonprev = container.querySelector('.prev');

    const cardsContainer = container.querySelector('.Cards__container');
    const cards = container.querySelectorAll('.Card');
    const cardswidth = cards[0].offsetWidth;
    const cardsContainerwidth = cardsContainer.offsetWidth;

    buttonnext.addEventListener('click', e => {
        
    })

    
    
}

export default carousel;