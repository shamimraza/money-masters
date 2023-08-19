let incomeValue = 0;
function calculateWithButton(){
    const income = textField('income')
    const food = textField('food')
    const rent = textField('rent')
    const clothes = textField('clothes')
    if(isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)){
        alert('please provide a valid number')
        return;
    }
    incomeValue=income;
    const allExpense = food + rent + clothes;
    const tBalance = income - allExpense;
    textInnerSet('expenses', allExpense )
    innerTextSet('balance', tBalance)
    
}


function textField(foodId){
    const foodField = document.getElementById(foodId);
    const food = foodField.value;
    const foodPrice = parseFloat(food);
    foodField.value = "";
    return foodPrice;
}

function textInnerSet(valueId,allExpense){
    const setInner = document.getElementById(valueId)
    setInner.innerText = allExpense;
}
function innerTextSet(idValid, tBalance){
    const innerSet = document.getElementById(idValid)
    innerSet.innerText = tBalance;
}

function savingButton(){
    const savingInput = textField('saving-amount');
    // const incomeValue = document.getElementById('income').value;
    const result = parseFloat(incomeValue) * .20;

    const valueSet = document.getElementById('saving-amountt');
    valueSet.innerText = result;

    const totalExpanses = document.getElementById('balance').innerText;
    const expenses = parseFloat(totalExpanses);
    const sum = expenses - result;
    innerTextSet('remaining-balance', sum);
 }



























// (income balance * save amount) / 100 --> for percentage.
// total income থেকে করবেন ! আর remaining balance বের করবেন expense বাদ দিয়ে যে balance আছে তার থেকে!