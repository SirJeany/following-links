'use strict';

const triggers = document.querySelectorAll('a');
// Make the highlight: Since the actual highlight is a element that will be seperate from all the links - so it's not a background or border.
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

// Code to show highlight through function and event:
function highlightLink() {
    // Now to get the width, height and position of the hovered element on the page..
    // getBoundingClientRect -> Bottom, Height, left, right, top, width, x and y
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    // coords to help with window scroll:
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    
    // So we sorted the width and height of the elements dynamically and set them in css via our js
    // But now we want to set the element at the correct top and left using transform
    // I mean... it seems to work...
    // highlight.style.left = `${linkCoords.left}px`;
    // highlight.style.top = `${linkCoords.top}px`;

    // .. but Wes does it like this:
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

    // And then the other problem we run into is when the user decides to scroll....
    // We need to update the left and top dynamically for those as well

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));