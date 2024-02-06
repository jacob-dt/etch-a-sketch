const gridContainer = document.querySelector('.gridContainer');
const pixelRange = document.querySelector('#pixelRange');
const selectedColor = document.querySelector('#selectedColor');
const resetButton = document.querySelector('#reset-button');

//grid creation
function createGrid(size) {
    gridContainer.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = `${100 / size}%`;
        pixel.style.height = `${100 / size}%`;
        gridContainer.appendChild(pixel);
    }
}

createGrid(pixelRange.value);

gridContainer.addEventListener('mouseover', (event) => {
    // Check if the mouseover event happened on a pixel
    if (event.target.classList.contains('pixel')) {
        // Change the background color of the pixel
        event.target.style.backgroundColor = selectedColor.value;
    }
});

pixelRange.addEventListener('input', (e) => {
    createGrid(e.target.value);
});

resetButton.addEventListener('click', () => {
    selectedColor.value = (0, 0, 0);
    pixelRange.value = 16;
    createGrid(pixelRange.value);

    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = 'white';
    });
});
