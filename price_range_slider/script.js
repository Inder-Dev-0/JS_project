const rangeValue = document.querySelector('.slider-container .price-slider')
const rangeInputValue = document.querySelectorAll('.range-input input')

let priceGap = 500

const priceInputValue = document.querySelectorAll(".price-input input")

for(let i = 0; i < priceInputValue.length; i++){
    priceInputValue[i].addEventListener('input', function(e){
        let minp = parseInt(priceInputValue[0].value)
        let maxp = parseInt(priceInputValue[1].value)
        let diff = maxp - minp

        if(minp < 0){
            alert('Minimum price cannot be less than 0')
            priceInputValue[0].value = 0
            minp = 0
        }

        if(maxp > 10000){
            alert('Maximum price cannot be greater than 10000')
            priceInputValue[1].value = 10000
            maxp = 10000
        }

        if(minp > maxp - priceGap){

            priceInputValue[0].value = maxp - priceGap
            minp = maxp - priceGap

            if(minp < 0){
                priceInputValue[0].value = 0
                minp = 0
            }
        }

        if(diff >= priceGap && maxp <= rangeInputValue[1].max){
            if(e.target.className === 'min-input'){
                rangeInputValue[0].value = minp
                let value1 = rangeInputValue[0].max
                rangeValue.style.left = `${(minp / value1) * 100}%`
            } else {
                rangeInputValue[1].value = minp
                let value2 = rangeInputValue[1].max
                rangeValue.style.right = `${100 - (maxp / value2) * 100}%`
            }
        }
    })
}

for (let i = 0; i < rangeInputValue.length; i++){
    rangeInputValue[i].addEventListener('input', e => {
        let minVal = parseInt(rangeInputValue[0].value)
        let maxVal = parseInt(rangeInputValue[1].value)

        let diff = maxVal - minVal

        if(diff < priceGap){
            if(e.target.className === "min-range"){
                rangeInputValue[0].value = maxVal - priceGap
            }
            else {
                rangeInputValue[1].value = minVal + priceGap
            }
        } else {
            priceInputValue[0].value = minVal
            priceInputValue[1].value = maxVal
            rangeValue.style.left = `${(minVal / rangeInputValue[0].max) * 100}%`
            rangeValue.style.left = `${100 - (maxVal / rangeInputValue[1].max) * 100}%`
        }
    })
}