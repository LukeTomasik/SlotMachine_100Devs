const dom = {
    
    innerIcons: document.querySelectorAll('.innerIcons'),
    leftIcons: document.querySelector('.leftIcons'),
    midIcons: document.querySelector('.midIcons'),
    rightIcons: document.querySelector('.rightIcons'),
    myMoney: document.querySelector('#myMoney'),
    valueWon: document.querySelector('#valueWon'),
    spinResults: document.querySelector('#spinResults'),
    spinResultsContainer: document.querySelector('#spinResultsContainer'),
    numInput: document.querySelector('numInput'),

    changeMoney: function() {
        this.numInput.addEventListener('')
    }

}

class SlotValues {
    constructor(leftValue,midValue,rightValue) {
        this.leftValue = leftValue
        this.midValue = midValue
        this.rightValue = rightValue
    }

    slotMachineLogic() {
        if (this.leftValue !== this.midValue && this.leftValue !== this.rightvalue ) {
            this.moneyLogic(0)
            dom.valueWon.innerHTML = 0
            console.log(`You lost`)
        } else if (this.leftValue === this.rightValue) {
            this.moneyLogic(20)
            console.log(`you win +20`)
        } else if (this.leftValue === this.midValue || this.midValue === this.rightValue) {
            this.moneyLogic(40)
            console.log(`you win +40`)
        } else if (this.leftValue === this.midValue && this.midValue === this.rightValue) {
            this.moneyLogic(100)
            console.log(`JACKPOT!`)
        }
    }
    moneyLogic(value) {
        if( value === 0 ) {
            dom.spinResults.innerHTML = `You Lost!`
            dom.valueWon.classList.add('hidden')
            dom.spinResultsContainer.classList.add('lost')
            dom.spinResultsContainer.classList.remove('won')
            dom.myMoney.innerHTML =  +dom.myMoney.innerHTML - 10
        } else if (value > 0) {
            dom.spinResults.innerHTML = `You Won!`
            dom.valueWon.classList.remove('hidden')
            dom.spinResultsContainer.classList.add('won')
            dom.myMoney.innerHTML =  +dom.myMoney.innerHTML + value
            dom.valueWon.innerHTML = `${value}`

        }

    }

}
// add random number to the indexes of the array. display that index as inner HTML
const slotIcons = ['A','B','C','D','E','F','G','H','I','J']

// spins slot Machine
document.querySelector('#spinBabySpin').addEventListener('click', offToTheRaces)
let slotMachineValues


function offToTheRaces(){
    dom.leftIcons.innerHTML = slotIcons[randomNumber(slotIcons.length)]
    dom.midIcons.innerHTML = slotIcons[randomNumber(slotIcons.length)]
    dom.rightIcons.innerHTML = slotIcons[randomNumber(slotIcons.length)]
    slotMachineValues = new SlotValues(dom.leftIcons.innerHTML,dom.midIcons.innerHTML,dom.rightIcons.innerHTML)
    slotMachineValues.slotMachineLogic()
  
    // console.log(slotIcons[randomNum1],slotIcons[randomNum2],slotIcons[randomNum3])
    // console.log(randomNumber(slotIcons.length))
}


// create a random nUmber generetar
function randomNumber(num) {
    return Math.trunc(Math.random() * num)
}

