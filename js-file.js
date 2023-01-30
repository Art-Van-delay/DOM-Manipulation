const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
// 

//create element
const para = document.createElement('p');
//style element
para.style.color = 'red';
//add text to element
para.textContent = "Hi I'm red!";
//append element
content.appendChild(para);

const headThree = document.createElement('h3');
headThree.style.color = 'blue';
headThree.textContent = "I'm a blue h3";
content.appendChild(headThree);

const divTwo = document.createElement('div');
divTwo.style.border = 'black';
divTwo.style.background = 'pink';
content.appendChild(divTwo);

const headOne = document.createElement('h1');
headOne.textContent = 'I am in a div';
divTwo.appendChild(headOne);

const paraTwo = document.createElement('p');
paraTwo.textContent = 'ME TOO!';

divTwo.appendChild(paraTwo);


