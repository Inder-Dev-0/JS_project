const form = document.querySelector('form')
// This usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valild height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valild weight ${weight}`
    }else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // show result
        // result.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            result.innerHTML = `<span>${bmi} (YOU ARE UNDER WEIGHT)</span>`
        }else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `<span>${bmi} (YOU ARE NORMAL RANGE OF BMI)</span>`
        }else {
            result.innerHTML = `<span>${bmi} (YOU ARE OVERWEIGH)</span>`
        }
    }
})