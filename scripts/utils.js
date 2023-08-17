const textField = document.getElementById('text-field');
const boldButton = document.getElementById('bold-btn');
const italicButton = document.getElementById('italic-btn');
const underlineButton = document.getElementById('underline-btn');
const leftAlignButton = document.getElementById('left-align-button');
const centerAlignButton = document.getElementById('center-align-button');
const rightAlignButton = document.getElementById('right-align-button');
const justifyAlignButton = document.getElementById('justify-align-button');
const allAlignmentButtons = [leftAlignButton, centerAlignButton, rightAlignButton, justifyAlignButton];
const fontSizeField = document.getElementById('font-size-field');
const caseButton = document.getElementById('case-button');
const colorButton = document.getElementById('color-button');

fontSizeField.value = 16;

function buttonOn(btn){
    btn.style.fontSize = '1.2rem';
    btn.style.color = 'black';
}

function buttonOff(btn){
    btn.style.fontSize = '1rem';
    btn.style.color = '#334155';
}

function aligner(btn,alignType){
    textField.style.textAlign = alignType;
    for(item of allAlignmentButtons){
            buttonOff(item);
    }
    buttonOn(btn);
}
