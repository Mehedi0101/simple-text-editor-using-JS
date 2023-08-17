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