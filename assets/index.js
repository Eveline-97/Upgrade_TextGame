/*TYPING TEXT*/
let started = false;
let textCount = 0;

let countingText = () => {
    let textElements = document.getElementsByTagName('h1');
    for (let i = 0; i < textElements.length; i++) {
        let text = textElements[i];
        setInterval(function() {
            console.log(text);
            text.style.visibility = 'visible';
            textCount++;
        }, 1000)
    }
    console.log(text.length);
}

//Start the typing, but only once
document.addEventListener('keydown', (e) => {
    if (e.code == 'Space') {
        if (started == false) {
            countingText();
            started = true;
        }
    }
})