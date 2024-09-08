//creating variable bill and variable tip that is based on the value of bill
let bill= 75
let tip= bill>300||bill<50? bill*0.2: bill*0.15// here the bill is multiplied by 0.2 to get the tip if the amount is above 300 or less than 50, if not it will be multiplied by 0.15
console.log ('The bill was',bill,'the tip was', tip, 'and the total value is', bill+tip);
// line 4 allows me to display the amount, tip and the final bill in a presentable manner
function calculateTip(bill) {
    return bill> 300|| bill< 50? bill*0.2: bill*0.15;
} // the tip is calculated according to the bill in the same way as earlier, however a function is created that allows users to inpit the bill amount
let billValue= 100;
let tipAmount= calculateTip(billValue);// this assigns the function to the variable

console.log ('The tip is',tipAmount)

let bills = [275,40,430];
let bills2 = [125,555,44];
let tips= bills.map(calculateTip);
let tips2= bills2.map(calculateTip);// constructed arrays bills, bills2, tips and tips2 based on the provided data
let totals= bills.map((bill,i)=> bill+tips [i]);
let totals2= bills2.map((bill,i)=> bill+tips2 [i]);//creating arrays totals and totals that adds the values of bills and tips. Using i is what allows us to move from the first value to the next and so on.

console.log ('The total amounts from the first data set are:'totals)
console.log ('The total amounts from the second data set are:'totals2)

