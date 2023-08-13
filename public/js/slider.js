const drawPagination = (container, sliders) => {
  const ContainerButton = document.createElement('div');
  for (let i = 0; i < sliders.length; i++) {
    ContainerButton.innerHTML += `
            <a href="" class="${container.className}__pagina ${i === 0 ? 'active' : ''}"></a>
      `
  }

  ContainerButton.classList.add(`${container.className}__paginacion`)
  container.appendChild(ContainerButton);
}

const onSlide = (container, i, sliders, prevItem, buttons) => {
  document.querySelector(`.${container.className}__paginacion`).addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.tagName === "A") {
      buttons = [...document.querySelectorAll(`.${container.className}__pagina`)];
      const clicked = buttons.indexOf(e.target)
      for (let i = 0; i < sliders.length; i++) {
        // sliders[i].style.display = 'none';
        buttons[i].classList.remove('active');
      }

      let actual = sliders[clicked];
      i = clicked;
      actual.style.display = 'block';
      container.firstElementChild.insertAdjacentElement('beforeend', actual)
      buttons[clicked].classList.add('active');
    }
  })

  // document.querySelectorAll(`.${container.className}__pagina`)[0].click()
  
  setInterval(() => {
    if (i === sliders.length - 1) {
      i = 0;
      prevItem = sliders[sliders.length - 1]
    } else {
      i++;
      prevItem = sliders[i - 1];
    }

    // document.querySelectorAll(`.${container.className}__pagina`)[i].click()
    // sliders[i].style.display = 'block';
    // prevItem.style.display = 'none';
  }, 5000)
};


const slider = (container) => {
  let i = 0;
  const sliders = [...container.firstElementChild.children];
  const prevItem = sliders[sliders.length - 1]
  const buttons = []
  sliders[0].style.display = 'block';
  // prevItem.style.display = 'none';

  drawPagination(container, sliders);
  onSlide(container, i, sliders, prevItem, buttons);
  
}

export default slider;