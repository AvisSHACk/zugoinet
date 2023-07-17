const nextSlide = (container, i, sliders, prevItem) => {
  const ContainerButton = document.createElement('div');
  for (let i = 0; i < sliders.length; i++) {
    ContainerButton.innerHTML += `
            <a href="" class="${container.className}__pagina"></a>
      `
  }

  ContainerButton.classList.add(`${container.className}__paginacion`)
  container.appendChild(ContainerButton);

  document.querySelector(`.${container.className}__paginacion`).addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.tagName === "A") {
      const buttons = [...document.querySelectorAll(`.${container.className}__pagina`)];
      const clicked = buttons.indexOf(e.target)
      for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = 'none';
        buttons[i].classList.remove('active');
      }

      let actual = sliders[clicked];
      i = clicked;
      actual.style.display = 'block';
      buttons[clicked].classList.add('active');
    }
  })


  setInterval(() => {
    if (i === sliders.length - 1) {
      i = 0;
      prevItem = sliders[sliders.length - 1]
    } else {
      i++;
      prevItem = sliders[i - 1];
    }

    sliders[i].style.display = 'block';
    prevItem.style.display = 'none';
  }, 5000)
};


const slider = (container) => {
  let i = 0;
  const sliders = container.firstElementChild.children;
  const prevItem = sliders[sliders.length - 1]
  // if(sliders.className.contains())
  sliders[0].style.display = 'block';
  prevItem.style.display = 'none';

  console.log(sliders);
  nextSlide(container, i, sliders, prevItem);
}

export default slider;