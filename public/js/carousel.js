const carrousel = (container) => {
    container.addEventListener('click', e => {
        let btn = e.target
        let track = btn.parentElement;
        let containerCa = track.querySelector(".Cards__container");
        let trackWidth = track.offsetWidth;
        let containerCaWidth = containerCa.offsetWidth;
        let leftPosition = containerCa.style.left == "" ? 0 : parseFloat(containerCa.style.left.slice(0, -2) * - 1);

        if(btn.className == 'next') {
            if(leftPosition < (containerCaWidth - trackWidth)) {
                leftPosition += 237 + 16;
               containerCa.style.left = `-${leftPosition}px` 
            } else {
                containerCa.style.left = 0
            }
        } else if(btn.className == 'prev') {
            if(leftPosition > 0) {
                console.log(leftPosition);
                leftPosition -= 237 + 16;
               containerCa.style.left = `-${leftPosition}px` 
            }
        }
    })
    
  }

//   const carrousel = (container) => {
//     let track = container.querySelector('.Cards__track');
//     let containerCa = container.querySelector('.Cards__container');
//     let buttonsContainer = container.querySelector(".Cards__navigate");
//     let leftPosition = 0;


//     buttonsContainer.addEventListener('click', e => {
//         let trackWidth = track.offsetWidth;
//         let containerCaWidth = containerCa.offsetWidth;

//         if(e.target.className == 'next') {
//             if(leftPosition < (containerCaWidth - trackWidth)) {
//                 leftPosition += 235 + 16;
//                containerCa.style.left = `-${leftPosition}px` 
//               }
//         } else if(e.target.className == 'prev') {
//             if(leftPosition > 0) {
//                 console.log(leftPosition);
//                 leftPosition -= 235 + 16;
//                containerCa.style.left = `-${leftPosition}px` 
//               }
//         }
//     })
    
//   }

export default carrousel;