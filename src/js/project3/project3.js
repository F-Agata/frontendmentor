import '../../scss/project3/project3.scss'
import rangesliderJs from 'rangeslider-js'
import '../../scss/project3/slider.scss'

console.log('project3')



const spanValue = document.querySelector(".slider__value-month");

function setText(text){
    let newText = text.toFixed(2);
    spanValue.textContent = `$ ${newText}`;
}



rangesliderJs.create(document.getElementById('slider1'),
  {
    min:0,
    max: 100,
    value: 1,
    step: 1,
    onInit: (value, percent, position) => {
        // console.log('1', value, percent, position)
        setText(value)

    },
    onSlideStart: (value, percent, position) => {
        // console.log('2', value, percent, position)
    },
    onSlide: (value, percent, position) => {
        // console.log('3', value, percent, position)
        setText(value)
    },
    onSlideEnd: (value, percent, position) => {
        // console.log('4', value, percent, position)
        setText(value)
    }
  });


const panelSlider = document.querySelector(".slider__input1").value;
console.log(panelSlider)







