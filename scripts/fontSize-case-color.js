fontSizeField.addEventListener('keyup',function(event){

    if(event.key === 'Enter'){
        textField.style.fontSize = `${fontSizeField.value}px`;
    }

})

fontSizeField.addEventListener('click',function(event){

    textField.style.fontSize = `${fontSizeField.value}px`;

})

caseButton.addEventListener('click',function(){

    if(textField.style.textTransform !== 'uppercase'){
        textField.style.textTransform = 'uppercase';
        buttonOn(caseButton);
    }
    else{
        textField.style.textTransform = 'lowercase';
        buttonOff(caseButton);
    }

})

colorButton.addEventListener('input',function(){
    
    textField.style.color = colorButton.value;
    
})