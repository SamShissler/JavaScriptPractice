// Sets up variables for buttons and body in order to change style
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const span = document.querySelectorAll('span.button');

console.log(buttons);

// Sets text for Heading and Body
document.getElementById("myH1").textContent = "Background Switching Website";
document.getElementById("myP").textContent = "Try changing the background color of the website by clicking on the buttons.";

// Checks all buttons for clicks
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e.target);
        // If any button besides black is pressed, changes the background to the coler of the button and the borders and text to black
        if(e.target.id != "Black"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "black";
            span.forEach(span => {
                span.style.border = "solid black 3px"
            })
        }
        // If the black button is pressed, changes the background to black and the borders and text to white
        else{
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
            span.forEach(span => {
                span.style.border = "solid white 3px"
            })
        }
    })
})

