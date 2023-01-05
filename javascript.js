const boxContainer = document.querySelector('.box-container');
const containerStyle = boxContainer.style;

const body = document.querySelector('body');

for (let i = 1; i <= (16 * 16); i++) {
    const boxDiv = document.createElement('div');
    boxDiv.classList.add('box');
    boxContainer.appendChild(boxDiv);
    boxStyle = boxDiv.style;
    boxStyle.cssText = 'border: 2px solid blue; background-color: yellow; width: 100%; height: 0; padding-top: 100%';
}

containerStyle.cssText = 'width: 500px; display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);'


function randomRgb() {
    return Math.floor(Math.random() * 100);
}
let k = randomRgb();
let newK = k * 10

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    let r = randomRgb();
    let g = randomRgb();
    let b = randomRgb();
    let i = 0;


    function getRgb() {

        let newR = r - (r * (10 / 100) * i);
        let newG = g - (g * (10 / 100) * i);
        let newB = b - (b * (10 / 100) * i);
        ++i
        return `rgb(${newR}%, ${newG}%, ${newB}%)`
    }

    box.addEventListener('mouseenter', (event) => {
        box.style.backgroundColor = getRgb();
    });


})



body.appendChild(boxContainer);
