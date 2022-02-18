// get  function 
function getData(id) {
    const dataText =document.getElementById(id).value;
    const data = parseInt(dataText);
    
    return data;
 }
 // add data to the html file
 function addData(id, data) {
    document.getElementById(id).innerText = data;
 }
 // expense calculate button  
 document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeInput = getData('income-input');
    
    // expense calculate 
    const rentAmount = getData('rent')
    const foodAmount = getData('food')
    const clothAmount = getData('cloth')
    const totalExpense = rentAmount + foodAmount + clothAmount;
 
    //available balance 
    const availableBalance = incomeInput - totalExpense;
 
    if (incomeInput < 0 || rentAmount < 0 || foodAmount < 0 || clothAmount < 0) {
       
     document.getElementById('negativealert').classList.remove('d-none');
    }else if (totalExpense > incomeInput) {
     document.getElementById('alert').classList.remove('d-none');
    } else {
        addData('total-ex', totalExpense);
        addData('balance', availableBalance);
        document.getElementById('alert').classList.add('d-none');
        document.getElementById('negativealert').classList.add('d-none');
    }
 })
    // income to balance end 