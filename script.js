// selection all buttons

let tipButtons = document.querySelectorAll('span.btn');
let customBtn = document.querySelector('#costum');
let ePrice = document.querySelector('input.eprice');
let peopleNum = document.querySelector('.people')

// ui message
let warnMsg = document.querySelector('.warning');
let tipAmount = document.querySelector('.tip-amount');
let totalAmount = document.querySelector('.total-price')

const resetB = document.querySelector('.reset');

tipButtons.forEach(function(btn){
    btn.addEventListener('click' ,function(event){
        // removing the btn-selected from all the span
        tipButtons.forEach(function(single){
            single.classList.remove('btn-selected');
        })
        // adding it to the clicked span
        btn.classList.add('btn-selected');
        let tipValue = parseInt(event.target.dataset.tip);
        
        if(ePrice.value > 0 && peopleNum.value > 0){
           tipAmount.textContent = "$" + (((tipValue * ePrice.value)/100)/peopleNum.value).toFixed(2)
           totalAmount.textContent = "$" + ((parseInt(ePrice.value) + ((tipValue * ePrice.value)/100))/peopleNum.value).toFixed(2);
        }else{
            alert('fill in all fields')
        }


        
    })
})

// reset functions
resetB.addEventListener('click' , backToDefault)
// function reset
function backToDefault(){
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";

    ePrice.value =  '';
    peopleNum.value = '';
    customBtn.value = 'Custom'
}

customBtn.addEventListener('keyup' , function(){
    if(this.value >=1  && this.value <=100){
        if(ePrice.value > 0 && peopleNum.value > 0){
            tipAmount.textContent = "$" + (((this.value* ePrice.value)/100)/peopleNum.value).toFixed(2)
            totalAmount.textContent = "$" + ((parseInt(ePrice.value) + ((this.value* ePrice.value)/100))/peopleNum.value).toFixed(2);
         }
    }
})


