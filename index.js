for (let index = 0; index < document.querySelectorAll("button").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",() => {
        let audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    })
    
}