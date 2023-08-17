const textField = document.getElementById('text-field');
const boldButton = document.getElementById('bold-btn');
const italicButton = document.getElementById('italic-btn');
const underlineButton = document.getElementById('underline-btn')

function buttonOn(btn){
    btn.style.fontSize = '1.2rem';
    btn.style.color = 'black';
}

function buttonOff(btn){
    btn.style.fontSize = '1rem';
    boldButton.style.color = '#334155';
}