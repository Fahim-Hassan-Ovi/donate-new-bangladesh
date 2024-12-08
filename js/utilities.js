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


// blog section test
// function colorChange(id){
//     document.getElementById('donation-section-btn').classList.add('bg-white');
//     document.getElementById('history-section-btn').classList.add('bg-white');

//     document.getElementById(id).classList.remove('bg-white');
//     document.getElementById(id).classList.add('bg-primary');
// }

// function showABlogSectionById(id){
//     // hide all the section
//     document.getElementById('main-blog').classList.add('hidden');
//     document.getElementById('history-section-blog').classList.add('hidden');
    
//     // show the section with the provided is as parameter
//     document.getElementById(id).classList.remove('hidden');
// }