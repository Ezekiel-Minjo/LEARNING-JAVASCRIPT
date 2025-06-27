const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const currentBill = bills[i]; // Gets the current bill (bills[i] gives us the bill at position i)
    const currentTip = calcTip(currentBill);
    const currentTotal = currentBill + currentTip;

    tips.push(currentTip);
    totals.push(currentTotal);
}
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

// BONUS: functions to calculate average of an array
const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    const average = sum / arr.length;
    return average;
}
const averageTotals = calcAverage(totals);
console.log('Average Totals:', averageTotals);