// When we click any .picture-frame
// A const is a "constant" variable
// which means that it cannot be reassigned.
const targetElements = document.querySelectorAll("[data-target]");
const outputElement = document.querySelector("[data-output]");
const menuElement = document.querySelector("[data-menu]")

// We see an enlarged version of image that is 
// inside that .picture-frame

function respondToClick(event) {
    // console.log('hello');
    // console.log('how are you?');
    // console.log('i am fine because i am a hamster.');

    // console.log(event.target.parentElement);
    // Add the 'big' class to the thing that got clicked
    // event.target.parentElement.classList.toggle('big');
    // event.target.parentElement.classList.add('big');
    event.target.parentElement.classList.toggle('big');
    event.target.parentElement.classList.toggle('small')
    outputElement.setAttribute('src', event.target.getAttribute('src'));
    outputElement.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function menu(event) {
    event.target.classList.toggle('small');
}

function attachClickHandler(oneElement) {
    // This is how we handle one element.
    oneElement.addEventListener("click", respondToClick);   
}

function bigHidden(event) {
    event.target.classList.toggle('hidden');
}

menuElement.addEventListener('click', menu);
targetElements.forEach(attachClickHandler);
outputElement.addEventListener('click', bigHidden);
