// script code for wheel functionality

const scrollContainer = document.querySelector('#pistonsPieces');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft -= evt.deltaY;
});

// global var for storing x offset in div upon scrolling
var xChange = 0.0;


// event listener to determine scrollLeft value and store in global variable

pistonsPieces.addEventListener('scroll', () => {
    var xShift;
    
    if ($(pistonsPieces.scrollLeft)[0] == undefined) {
        xShift = 0.0;
    } else {
        xShift = $(pistonsPieces.scrollLeft)[0];
    }
    xChange = xShift;
});


// test function for seeing if xChange stores xShift value

// function printXShift() {
//      console.log(xChange);
// }

window.addEventListener('beforeunload', function(event) {
    this.localStorage.setItem("scrollPosition", xChange)
})

window.addEventListener('DOMContentLoaded', (event) => {  
    $('#pistonsPieces').scrollLeft(localStorage.getItem("scrollPosition")); 
})