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