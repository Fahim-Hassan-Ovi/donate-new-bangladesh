
document.getElementById('btn-donate-1').addEventListener('click', function (event) {
    event.preventDefault();
    const initialTotalAmount = getTextFieldValueById('initial-total-amount');
    const initialDonateAmount = getTextFieldValueById('initial-amount-1');
    const donateMoney = getInputValueById('donate-amount-1');
    const remainingAmount = initialTotalAmount - donateMoney;
    const increaseMoney = donateMoney + initialDonateAmount;


    document.getElementById('initial-amount-1').innerText = increaseMoney;
    document.getElementById('initial-total-amount').innerText = remainingAmount;
    // add to history section
    // const time = date(); <p>Date: ${time}</p>
    // const div = document.createElement('div');
    // div.innerHTML = `<p class="text-black"> ${donateMoney} is donated for Donate for Flood at Noakhli, bangladesh.</p>
    //         `
    // document.getElementById('history-container').appendChild(div);

    document.getElementById('history-container').innerHTML = `<p class="text-black"> ${donateMoney} is donated for Donate for Flood at Noakhli, bangladesh.</p> `;

})

function handleDonate() {
    const donateMoney = getInputValueById('donate-amount-1');

    if (isNaN(donateMoney) || donateMoney <= 0) {
        return alert('Please enter a valid amount to donate.');
    }
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}