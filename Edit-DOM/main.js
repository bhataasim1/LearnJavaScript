// Add New Fruits

function addNewFruits(fruits) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(fruits));
    document.querySelector('.fruits').append(li);
}
// addNewFruits('Orange');

//create list of Fruits;
const Fruits = ['Orange', 'Peach', 'Grapes', 'pineApple'];
Fruits.forEach( (item) =>{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    document.querySelector('.fruits').appendChild(li);
});

// Replace the Existing Fruits

function ReplaceFruits(fruit) {
    const change = document.querySelector('li:first-child'); //use li:nth-child(1), li:last-child
    const li = document.createElement('li');
    li.innerHTML = fruit;
    change.replaceWith(li);
}
ReplaceFruits('Test');


//Remove 
function removeFruits() {
    const li = document.querySelector('li:last-child');
    li.remove();
}
removeFruits();