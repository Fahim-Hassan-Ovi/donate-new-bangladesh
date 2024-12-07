// document.getElementById('btn-donate-1').addEventListener('click', function(event){
//     event.preventDefault();
// })

// function addMoney(event){
//     event.preventDefault();
//     const donateMoney1 = getInputValueById()
// }

document.getElementById('btn-donate-1').addEventListener('click', function (event) {
    event.preventDefault();
    // const donateMoney = getInputValueById('donate-amount-1');
    // const initialTotalAmount = document.getElementById('initial-total-amount').innerText;
    // const initialDonateAmount = document.getElementById('initial-amount-1').innerText;
    // const remainingAmount = initialTotalAmount - donateMoney;
    // const increaseMoney = donateMoney + initialDonateAmount;
    // console.log(remainingAmount);
    // console.log(increaseMoney);
    const initialTotalAmount = getTextFieldValueById('initial-total-amount');
    const initialDonateAmount = getTextFieldValueById('initial-amount-1');
    const donateMoney = getInputValueById('donate-amount-1');
    const remainingAmount = initialTotalAmount - donateMoney;
    const increaseMoney = donateMoney + initialDonateAmount;


    document.getElementById('initial-amount-1').innerText = increaseMoney;
    document.getElementById('initial-total-amount').innerText = remainingAmount;
})

function handleDonate() {
    const donateMoney = getInputValueById('donate-amount-1');

    if (isNaN(donateMoney) || donateMoney <= 0) {
        return alert('Please enter a valid amount to donate.');
    }
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}