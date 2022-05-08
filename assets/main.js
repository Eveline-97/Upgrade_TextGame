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
let interval = 1000;

//Show and hide lines automatically
let nextLine = () => {
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
        changeInterval();                
    }
    window.scrollTo(0, document.body.scrollHeight);
}

//Change interval length depending on last line's length
let changeInterval = () => {
    let line = lines[count];
    let strLength = line.innerHTML.length;
    let newInterval = strLength * 100;
    clearInterval(interval);
    interval = setInterval(nextLine(), newInterval);
}

changeInterval();

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
    upgrade: 'metallic.html',
    metallic: 'violin.html',
    violin: 'index.html'
}

let next = document.getElementById('next-story');
next.addEventListener('click', () => {
    let current = document.title.toLowerCase();
    let nextPage = stories[current];
    location.replace(nextPage);
})