function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
function showASectionById(id){
    // hide all the section
    document.getElementById('main').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    
    // show the section with the provided is as parameter
    document.getElementById(id).classList.remove('hidden');
}
