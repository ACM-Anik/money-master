function getTotalExp(){
    const foodElement = document.getElementById('food');
    const foodString = foodElement.value;
    const food = parseFloat(foodString);

    const rentElement = document.getElementById('rent');
    const rentString = rentElement.value;
    const rent = parseFloat(rentString);

    const clothesElement = document.getElementById('clothes');
    const clothesString = clothesElement.value;
    const clothes = parseFloat(clothesString);
   
    const totalExpenses = food + rent + clothes;
    return totalExpenses;
}

document.getElementById('calculate').addEventListener('click', function(){
    const newTotalExpenses = getTotalExp();
    if(isNaN(newTotalExpenses)){
        alert('Please provide cost of all expenses(only numbers)');
        return;
    }
    const previousTotalExpElement = document.getElementById('total-exp');
    previousTotalExpElement.innerText =  newTotalExpenses;

    const incomeElement = document.getElementById('income');
    const incomeString = incomeElement.value;
    const income = parseFloat(incomeString);
    if(isNaN(income)){
        alert('Please provide the amount of income first');
        return;
    }

    const newBalance = income - newTotalExpenses;
    if(newBalance < 0){
        alert("Balance can't be negative, please cut some expenses");
        return;
    }
    const previousBalance = document.getElementById('balance');
    previousBalance.innerText= newBalance.toFixed(2);


    document.getElementById('save').addEventListener('click', function(){
        const percentageField  = document.getElementById('percentage');
        const percentageString = percentageField.value;
        const percentage = parseFloat(percentageString);
        if(isNaN(percentage)){
            alert('Please provide percentage number');
            return;
        }
        else if(percentage > 100){
            alert("You can't provide more than 100!");
            percentageField.value = '';
        }

        const newSavings = (income * (percentage / 100)).toFixed(2);           
         
        if(newSavings > newBalance){
            alert("The savings can't exceed the balance");
            percentageField.value = '';
            return;
        }
       
        const previousSavings = document.getElementById('saving-amount');
        previousSavings.innerText = newSavings;
        
        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = (newBalance - newSavings).toFixed(2);
         // console.log(newSavings);
    });
});




