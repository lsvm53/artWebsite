// script code for wheel functionality

const scrollContainer = document.querySelector('#bulls');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollTop += evt.deltaY;
});

// global var for storing x offset in div upon scrolling
var yChange = 0.0;


// event listener to determine scrollLeft value and store in global variable

bulls.addEventListener('scroll', () => {
    var yShift;
    
    if ($(bulls.scrollLeft)[0] == undefined) {
        yShift = 0.0;
    } else {
        yShift = $(bulls.scrollLeft)[0];
    }
    yChange = yShift;
});


// test function for seeing if xChange stores yShift value

// function printyShift() {
//      console.log(xChange);
// }

window.addEventListener('beforeunload', function(event) {
    this.localStorage.setItem("scrollPosition", yChange)
})

window.addEventListener('DOMContentLoaded', (event) => {  
    $('#bulls').scrollTop(localStorage.getItem("scrollPosition")); 
})