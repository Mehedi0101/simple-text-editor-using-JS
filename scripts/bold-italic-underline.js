boldButton.addEventListener('click',function(){

    if(textField.style.fontWeight !== '600')
    {
        textField.style.fontWeight = '600';
        buttonOn(boldButton);
    }
    else
    {
        textField.style.fontWeight = 'normal';
        buttonOff(boldButton);
    }
   
})

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

underlineButton.addEventListener('click',function(){

    if( textField.style.textDecoration !== 'underline' )
    {
        textField.style.textDecoration = 'underline';
        buttonOn(underlineButton);
    }
    else
    {
        textField.style.textDecoration = 'none';
        buttonOff(underlineButton);
    }
    
})