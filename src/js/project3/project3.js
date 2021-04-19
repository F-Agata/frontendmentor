import '../../scss/project3/project3.scss'
import rangesliderJs from 'rangeslider-js'
import 'rangeslider-js/src/styles.css'

console.log('project3')

rangesliderJs.create(document.getElementById('slider1'),
  {
    min:0,
    max: 1,
    value: 0.5,
    step: 0.1,
    onInit: (value, percent, position) => {console.log('1', value, percent, position)},
    onSlideStart: (value, percent, position) => {console.log('2', value, percent, position)},
    onSlide: (value, percent, position) => {console.log('3', value, percent, position)},
    onSlideEnd: (value, percent, position) => {console.log('4', value, percent, position)}
  })