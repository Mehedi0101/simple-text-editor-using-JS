italicButton.addEventListener('click',function(){
    
    if(textField.style.fontStyle !== 'italic')
    {
        textField.style.fontStyle = 'italic';
        buttonOn(italicButton);
    }
    else
    {
        textField.style.fontStyle = 'normal';
        buttonOff(italicButton);
    }
    
})