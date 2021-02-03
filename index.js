// Function that take key when clicking, or when pressing keyboard as a input, and return the sound
// coresponding to the button 
function checkButton(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
    
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "l":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        default:
            break;
    }
}

//Function that create sound when clicking at buttons
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function() {
        checkButton(this.innerHTML);
        buttonAnimation(this.innerHTML);
        // this.style.color="white";
    })
    
}

//Function that create sound when pressing the corresponding keyboard
document.addEventListener("keydown", function(event) {
    //console.log(event);
    checkButton(event.key);
    buttonAnimation(event.key);
})

//Add animation to buttons
function buttonAnimation(key) {
    let button = document.querySelector("."+key);
    button.classList.add("pressed");
    setTimeout(() => {
       button.classList.remove("pressed"); 
    }, 100);
}