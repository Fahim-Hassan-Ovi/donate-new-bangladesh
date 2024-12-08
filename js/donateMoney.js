
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


    // <p>Date: ${time}</p> <p> ${new Date().toLocalDateString()} </p>
    const div = document.createElement('div');
    const time = new Date(); 
    div.classList.add('border-2');
    div.classList.add('border-gray-400');
    div.classList.add('mb-4');
    div.innerHTML = `<p class="text-black font-bold"> ${donateMoney} is donated for Donate for Flood at Noakhli, bangladesh.</p> <p class="border border-gray-300 p-2">Date: ${time}</p> `
    console.log(div);
    document.getElementById('history-container').appendChild(div);


    // document.getElementById('date').innerHTML = `<p> ${new Date().toLocalString()} </p>`;
    // document.getElementById('history-container').appendChild(div);
    
    // document.getElementById('history-container').innerHTML = `<p class="text-black"> ${donateMoney} is donated for Donate for Flood at Noakhli, bangladesh.</p> `;

})

function handleDonate() {
    const donateMoney = getInputValueById('donate-amount-1');

    if (isNaN(donateMoney) || donateMoney <= 0) {
        return alert('Please enter a valid amount to donate.');
    }
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}