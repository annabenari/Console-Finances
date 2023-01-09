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


    let totalMonths = finances.length;

    let netProfits = 0;

// i = index, this is like x in algebra maths
// i = 0 says that the index is = to 0
// i < finances.length says that the index has to be less than the finances.length
// i++ means that it is index + 1 the ++ is a shorcut for +1
// This means the index starts at 0, it has to finish at the length of  finances.length  ( which is the amount of months there are in the list)

    for (let i = 0; i < finances.length; i++) { 
// sums up the total in the amount of net profit/loss
// netProfits += is a shortcut of netProfits = netProfits + finances
     netProfits += finances[i][1]; 
 }


 //  To find the average change i need to first work out the total change then divide it by the number of months.
    let totalChange = 0; 

// Create a vairbale for both the greatest and lowest profit/loss. Need to do this for both dates and amount.
    let greatestIncreaseMonth = finances[0][0];
    let greatestIncreaseAmount = 0;
    let greatestDecreaseMonth = finances[0][0];
    let greatestDecreaseAmount = 0;


// iterate through the list of finances, startting at the second month (since there is no cahnge in profit for the first month)
    for (let i = 1; i < finances.length; i++) {
// get the current month's proffit, using an array to get to the secon string or value in the array. The i is the index therefore referring to every array and 1 is to get to the second part of the array.
// current month's profit
     let currentProfit = finances[i][1]; 
// previous month's profit, this is done by the -1 in the index
     let previousProfit = finances[i-1][1];
// calculate the change in profit between the current month and previous month
     let changeInProfit = currentProfit - previousProfit;
// add the change in profit to the total change
     totalChange += changeInProfit; 

// if the change in profit is greater than the previous greatest amount,  this will update it.
     if (changeInProfit > greatestIncreaseAmount) {
         greatestIncreaseDate = finances[i][0];
         greatestIncreaseAmount = changeInProfit;

// if the change in profit is less than the previous lower amount,  this will update it.
     } else if (changeInProfit < greatestDecreaseAmount) {
         greatestDecreaseDate = finances[i-1][0];
         greatestDecreaseAmount = changeInProfit;
     }
     
 }
 // divide the total change in profits by the number of changes in profits to get the average
 let averageChange = totalChange / (finances.length - 1);

 

 console.table('Financial Analysis');
 console.table('----------------------------');
 console.table(`Total Months: ${totalMonths};`);
 console.table(`Total: $${netProfits.toFixed(2)};`);
 console.table(`Average Change: $${averageChange.toFixed(2)};`);
 console.table(`Greatest increase in profits in ${greatestIncreaseDate}: was ($${greatestIncreaseAmount});`);
 console.table(`Greatest decrease in profits in ${greatestDecreaseDate}: was ($${greatestDecreaseAmount});`);