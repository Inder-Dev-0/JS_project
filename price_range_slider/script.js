const rangeValue = document.querySelector('.slider-container .price-slider');
const rangeInputValue = document.querySelectorAll('.range-input input');
const priceInputValue = document.querySelectorAll(".price-input input");

const priceGap = 500;

// Update slider positions and inputs
function updateSlider(minVal, maxVal) {
    rangeInputValue[0].value = minVal;
    rangeInputValue[1].value = maxVal;
    priceInputValue[0].value = minVal;
    priceInputValue[1].value = maxVal;

    const maxRange = parseInt(rangeInputValue[0].max);
    rangeValue.style.left = `${(minVal / maxRange) * 100}%`;
    rangeValue.style.right = `${100 - (maxVal / maxRange) * 100}%`;
}

// Validate input values
function validateInputs(minVal, maxVal) {
    if (minVal < 0) minVal = 0;
    if (maxVal > 10000) maxVal = 10000;
    if (maxVal - minVal < priceGap) {
        if (minVal === parseInt(priceInputValue[0].value)) {
            minVal = maxVal - priceGap;
        } else {
            maxVal = minVal + priceGap;
        }
    }
    return [minVal, maxVal];
}

// Handle price input changes
priceInputValue.forEach((input, index) => {
    input.addEventListener('input', () => {
        let minVal = parseInt(priceInputValue[0].value);
        let maxVal = parseInt(priceInputValue[1].value);

        [minVal, maxVal] = validateInputs(minVal, maxVal);
        updateSlider(minVal, maxVal);
    });
});

// Handle range input changes
rangeInputValue.forEach((input) => {
    input.addEventListener('input', () => {
        let minVal = parseInt(rangeInputValue[0].value);
        let maxVal = parseInt(rangeInputValue[1].value);

        if (maxVal - minVal < priceGap) {
            if (input.className.includes("min-range")) {
                minVal = maxVal - priceGap;
            } else {
                maxVal = minVal + priceGap;
            }
        }
        updateSlider(minVal, maxVal);
    });
});
