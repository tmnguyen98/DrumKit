for (let index = 0; index < document.querySelectorAll("button").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",() => {
        alert("I got clicked");
    })
    
}