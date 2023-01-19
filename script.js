function showText(id) {
    const box = document.getElementById("text" + id)
    box.style.opacity = 1;
}

function hideText(id) {
    const box = document.getElementById("text" + id)
    box.style.opacity = 0;
}

// function showText() {
//     const boxes = document.getElementsByClassName("textbox")
    
//     for (b of boxes) {
//         b.style.opacity = 1;
//     }
// }

// function hideText() {
//     const boxes = document.getElementsByClassName("textbox");
    
//     for (b of boxes) {
        
//         b.style.opacity = 0;
//     }
// }