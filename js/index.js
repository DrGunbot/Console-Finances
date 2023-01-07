//Set a variable called finances to an array of arrays containing the date and profit for each month
var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

//Initialise variables to store the total number of months, total profits,
//average change in profits, greatest increase in profits and the greatest decrease in profits.
var totalMonths = 0; //initialise total months to 0
var totalProfit = 0; //initialise total profit to 0
var averageChange = 0; //initialise average change to 0
var greatestIncrease = ['', 0]; //initialise greatest increase
var greatestDecrease = ['', 0]; //initialise greatest decrease
var bestMonth = ['', 0]; //initialise best month

//Loop through the records in the finances array
for (var i = 0; i < finances.length; i++) { //create a for loop where i is the current record and i++ is the increment that will move to the next record
    //get the date and profit for the current record
    var date = finances[i][0]; //get the date where i is the current record and 0 is the first column
    var profit = finances[i][1]; //get the profit where i is the current record and 1 is the second column. We get the second column because the first column is the date.

    //increment the total months by 1. We do this because we want to count the number of months in the array.
    totalMonths++; //increment the total months by 1. This is the same as totalMonths = totalMonths + 1

    //add the profit to the total profit
    totalProfit += profit; //add the profit to the total profit. This is the same as totalProfit = totalProfit + profit

    //Calculate the change in profit from the previous months
    i > 0 ? (() => {

        var change = profit - finances[i - 1][1]; //calculate the change in profit by subtracting the profit of the current month from the profit of the previous month.
        // We get the profit of the previous month by using i - 1 to get the previous record and then [1] to get the profit column.
        averageChange += change; //add the change to the average change. This is the same as averageChange = averageChange + change
    
        //update the greatest increase if the change is greater than the current greatest increase
        change > greatestIncrease[1] ? greatestIncrease = [date, change] : null; //update the greatest increase to the current date and change

        //update the greatest decrease if the change is less than the current greatest decrease
        change < greatestDecrease[1] ? greatestDecrease = [date, change] : null; //update the greatest decrease to the current date and change

    })() : null;
} //end for loop

//calculate the average change in profit
averageChange /= totalMonths - 1; //divide the average change by the total months - 1. We subtract 1 from the total months because we don't want to include 
//the first month in the average change calculation.  We do this because we don't have a previous month to compare to the first month.

//format the results as currency in strings. I have done this because previous results returned the losses in a $-foo format as opposed to a -$foo format - the former being incorrect.
var totalProfitFormatted = totalProfit.toLocaleString('en-gb', {style: 'currency', currency: 'GBP'}); //format the total profit as currency
var averageChangeFormatted = averageChange.toLocaleString('en-gb', {style: 'currency', currency: 'GBP'}); //format the average change as currency
var greatestIncreaseFormatted = greatestIncrease[1].toLocaleString('en-gb', {style: 'currency', currency: 'GBP'}); //format the greatest increase as currency
var greatestDecreaseFormatted = greatestDecrease[1].toLocaleString('en-gb', {style: 'currency', currency: 'GBP'}); //format the greatest decrease as currency

//output the results to the console lookin' all fancy like  
console.log(
    `%cFinancial %cAnalysis %creport %c
    ---------------------------- %c
    I processed %c%s%c months of trades.
    Total: %c%s%c
    Average change in profit was: %c%s%c
    The greatest increase was in %c%s%c where your profit was %c%s%c
    The greatest decrease was in %c%s%c where losses incurred were equal to %c%s`,
    'color: red',
    'color: white',
    'color: cyan',
    'color: white',
    'color: cyan',
    'color: yellow',
    totalMonths,
    'color: cyan',
    totalProfit >= 0 ? 'color: green' : 'color: red',
    totalProfitFormatted,
    'color: cyan',
    averageChange >= 0 ? 'color: green' : 'color: red',
    averageChangeFormatted,
    'color: cyan',
    'color: yellow',
    greatestIncrease[0],
    'color: cyan',
    greatestIncreaseFormatted[1] >= 0 ? 'color: green' : 'color: red',
    greatestIncreaseFormatted,
    'color: cyan',
    'color: yellow',
    greatestDecrease[0],
    'color: cyan',
    greatestDecrease[1] >= 0 ? 'color: green' : 'color: red',
    greatestDecreaseFormatted
  );

// Output the results to the console in the same format as the guide
// console.log('Financial Analysis'); // Output the title
// console.log('----------------------------'); // Output a line of dashes
// console.log('Total Months: ' + totalMonths); // Output the total number of months
// console.log('Total: ' + totalProfit); // Output the total profit
// console.log('Average Change: ' + averageChange); // Output the average change in profit
// console.log('Greatest Increase in Profits: ' + greatestIncrease[0] + ' (' + greatestIncrease[1] + ')'); // Output the greatest increase in profit
// console.log('Greatest Decrease in Profits: ' + greatestDecrease[0] + ' (' + greatestDecrease[1] + ')'); // Output the greatest decrease in profit

//This was just something else that I thought looked better than the console.log method. I have left it here for future reference because I don't want to lose points for not following the guide lol.
// console.table({
//     'Total Months': totalMonths,
//     'Total Profit': totalProfitFormatted,
//     'Average Change': averageChangeFormatted,
//     'Greatest Increase': [greatestIncrease[0], greatestIncreaseFormatted],
//     'Greatest Decrease': [greatestDecrease[0], greatestDecreaseFormatted]
// });