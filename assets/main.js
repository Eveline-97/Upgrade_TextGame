/*ACTION LINES*/
let action = document.getElementById('action');
let actionCount = 0;

let actionDots = () => {
    setInterval(function() {
        if (actionCount < 5) {
            action.innerHTML = '.';
            for (let i = 0; i < actionCount; i++) {
                action.innerHTML += '.';
            }
            actionCount++;
        } else if (actionCount == 5) {
            action.innerHTML = '......';
            actionCount = 0;
        }
    }, 1000)
}

if (action != null) {
    actionDots();
}

/*SHOW AND HIDE LINES*/
const lines = document.getElementsByClassName('text-line');
let count = 0;
let interval = 4000;

//Show and hide lines automatically
setInterval(function() {
    //Show next line
    if (count < lines.length) {
        let line = lines[count];
        //Get last element
        let lastEl;
        if (count == 0) {
            lastEl = lines[0]
        } else {
            lastEl = lines[count-1];
        }

        //Only automatic if last line is not an action
        if (lastEl.id == 'action') {
            console.log('Waiting for arrow interaction from performers');
        } else {
            line.style.display = 'inline';
            count++;
        }
        window.scrollTo(0, document.body.scrollHeight);
    }
}, interval)

//Event listeners for left and right arrow (only used for actions, but can also be used in between, if necessary)
document.addEventListener('keydown', (e) => {
    if (e.code == 'ArrowRight') {
        //Show next line
        if (count < lines.length) {
            let line = lines[count];
            //Check last element
            let lastEl;
            if (count == 0) {
                lastEl = lines[0]
            } else {
                lastEl = lines[count-1];
            }

            line.style.display = 'inline';
            //If last element was an action, remove it from the document
            if (lastEl.id == 'action') {
                lastEl.remove();
            }
            //Recheck the document for another action object
            action = document.getElementById('action');
            count++;
        }
        window.scrollTo(0, document.body.scrollHeight);
    } else if (e.code == 'ArrowLeft') {
        //Hide previous line
        if (count != 0) {
            count--;
        }
        if (count < lines.length) {
            let line = lines[count];
            line.style.display = 'none';
        }
        window.scrollTo(0, document.body.scrollHeight);
    }
})

/*OPEN NEXT STORY*/
const stories = {
    upgrade: 'circle.html',
    circle: 'metallic.html',
    metallic: 'radio.html',
    radio: 'pong.html',
    pong: 'funk.html',
    funk: 'water.html',
    water: 'ticking.html',
    ticking: 'violin.html',
    violin: 'flood.html',
    flood: 'index.html'
}

let next = document.getElementById('next-story');
next.addEventListener('click', () => {
    let current = document.title.toLowerCase();
    let nextPage = stories[current];
    location.replace(nextPage);
})