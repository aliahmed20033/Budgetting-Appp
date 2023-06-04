// var budget;
// var finalBudget ;
// var amount;
// var totalExpense;
// function Budget(){
//      budget = document.getElementById("Budget");
//      finalBudget = document.getElementById("finalBudget");
//      finalBudget.innerText = budget.value;
//      console.log(budget.value);
// }

// function addExpence(){
//      amount = document.getElementById("amount");
//      totalExpense = document.getElementById("totalExpense");
//           if(totalExpense.value == undefined){
//                totalExpense.innerText = amount.value;
//                console.log(amount.value);
//                // console.log(value);
//           }
//           else{
//                var value = parseInt(totalExpense.value) + parseInt(amount.value);
//                totalExpense.innerText = value;
//                console.log(totalExpence.value);
//                console.log(amount.value);
//                console.log(value);
//           }
//           // var value = parseInt(totalExpense.value) + parseInt(amount.value);
//           // totalExpense.innerText = value;
//           // console.log(amount.value);
//           // console.log(value);
    
// }

// function lessExpense(){
//      amount = document.getElementById("amount");
//      totalExpense = document.getElementById("totalExpense");
//         if(totalExpense.value == undefined){
//           totalExpense.innerText = value;
//           console.log(amount.value);
//         }
//         else{
//           var value = parseInt(totalExpense.value);
//           totalExpense.innerText = value;
//           console.log(totalExpense.value);
//           console.log(amount.value);
//           console.log(value);
//         }
// }

var budget;
var  totalAmount;
var finalBudget;
var totalBalance;
function Budget(){
          budget = document.getElementById("Budget");
          totalBalance = document.getElementById("totalBalance");
          finalBudget = document.getElementById("finalBudget");
          finalBudget.innerText = budget.value;
          totalBalance.innerText = budget.value;
}
var expenseAmount;
var totalExpense;
var price;
var list;
var listli;
var li;
function expence(){
     expenseAmount = document.getElementById("expenseAmount");
     totalExpense = document.getElementById("totalExpense");
     // console.log(totalExpense.innerText);
     // console.log(+expenseAmount.value);

     if(totalExpense.innerText != ""){
          price = price + +expenseAmount.value;
          totalExpense.innerText = price.toString();
          
          listli=`
               <div>
                    <h3>${document.getElementById("description").value}</h3>
                    <h4>${document.getElementById("date").value}</h4>
               </div>
               <div>
                    <h2>${expenseAmount.value}</h2>
               </div>
          `;
          list = document.getElementById("expenceList");
          li = document.createElement("li");
          li.innerHTML = listli;
          list.appendChild(li);
          // console.log(list.innerHTML);
          // console.log(li.innerHTML);
          console.log(list);
          totalBalance.innerText = (+finalBudget.innerText - +totalExpense.innerText).toString();
          
     }
     else{
          price = +expenseAmount.value;          
          totalExpense.innerText = price.toString();
          
          
          listli=`
               <div>
                    <h3>${document.getElementById("description").value}</h3>
                    <h4>${document.getElementById("date").value}</h4>
               </div>
               <div>
                    <h2>${expenseAmount.value}</h2>
               </div>
          `
          list = document.getElementById("expenceList");
          li = document.createElement("li");
          li.innerHTML = listli;
          list.appendChild(li);
          // console.log(list.innerHTML);
          // console.log(li.innerHTML);
          console.log(list);
          totalBalance.innerText = (+finalBudget.innerText - +totalExpense.innerText).toString();
     }
}
var listRemove;
function removeList(){
     listRemove = document.querySelector("li");
     list.removeChild(listRemove);
     price = price - +expenseAmount.value ; 
     totalExpense.innerText = price;
     totalBalance.innerText = (+totalBalance.innerText + +expenseAmount.value).toString();
}