//your JS code here. If required.
const targetElement = document.getElementById('level');
// Function to find the DOM level of an element
function findDOMLevel(element) {
    let level = 0;
    let currentNode = element;
    // Traverse upwards until reaching the root html element
    while (currentNode !== document.documentElement) {
        currentNode = currentNode.parentNode;
        level++;
    }
    return level;
}
// Find the DOM level of the target element
const domLevel = findDOMLevel(targetElement);
// Display the result using alert
alert(`The level of the element is: ${domLevel}`);