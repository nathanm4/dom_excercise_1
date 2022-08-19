const firstDomParagraph = document.createElement('p');
firstDomParagraph.textContent = 'Hey I\'m red!'
firstDomParagraph.style.cssText = 'color: red';

document.querySelector('.content').appendChild(firstDomParagraph);


const firstDomHeading = document.createElement('h3');
firstDomHeading.textContent = 'I\'m a blue h3!';
firstDomHeading.style.cssText = 'color: blue';

document.querySelector('.content').appendChild(firstDomHeading);

const firstDomDiv = document.createElement('div');
firstDomDiv.setAttribute('style', 'border: 1px solid black; background: pink');
const h1 = document.createElement('h1');
    h1.textContent = 'I\'m in a div'
const p2 = document.createElement('p');
    p2.textContent = 'ME TOO!'

firstDomDiv.appendChild(h1);
firstDomDiv.appendChild(p2);

document.querySelector('.content').appendChild(firstDomDiv);

function alertFunction() {
    alert('YAY! YOU DID IT!');
}
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
btn.onclick = alertFunction;
btn2.addEventListener('click', alertFunction);



