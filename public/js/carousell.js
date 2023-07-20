
// buttonPrev.onClick = () => moveBy(1);

const Carousell = () => {
    // const buttonPrev = document.getElementById('button-prev')
    // const buttonNext = document.getElementById('button-next')
    const track = document.querySelector('.track')
    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
}

export default carousell;