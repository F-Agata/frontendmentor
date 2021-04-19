import '../scss/main.scss';
console.log('index')


import rangesliderJs from 'rangeslider-js'



rangesliderJs.create(document.getElementById('slider1'), {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    // callbacks
    onInit: (value, percent, position) => {console.log("onInit",value, percent, position)},
    onSlideStart: (value, percent, position) => {console.log("onInit2",value, percent, position)},
    onSlide: (value, percent, position) => {console.log("onInit3",value, percent, position)},
    onSlideEnd: (value, percent, position) => {console.log("onInit4",value, percent, position)}
})





// rangesliderJs.create(document.querySelectorAll('input[type="range"]'))


