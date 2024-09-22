let isBlue = true;

function alertMe() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        alert(`Hi ${name}!`);
    } else {
        alert('Please enter your name.');
    }
}

function changeColor() {
    document.body.style.backgroundColor = isBlue ? 'green' : 'blue';
    isBlue = !isBlue;
}

function validateText() {
    const text = document.getElementById('textInput').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert('Special characters are not allowed!');
    } else {
        alert('This is indeed valid text!');
    }
}

function addText() {
    const heading = document.getElementById('mainHeading');
    heading.innerHTML += ' Add Text';
}
