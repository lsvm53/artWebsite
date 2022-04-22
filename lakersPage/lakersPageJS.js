// script code for wheel functionality

const scrollContainer = document.querySelector('#lakersPieces');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft -= evt.deltaY;
});

// global var for storing x offset in div upon scrolling
var xChange = 0.0;


// event listener to determine scrollLeft value and store in global variable

lakersPieces.addEventListener('scroll', () => {
    var xShift;
    
    if ($(lakersPieces.scrollLeft)[0] == undefined) {
        xShift = 0.0;
    } else {
        xShift = $(lakersPieces.scrollLeft)[0];
    }
    xChange = xShift;
});


// test function for seeing if xChange stores xShift value

// function printXShift() {
//     console.log(xChange);
// }