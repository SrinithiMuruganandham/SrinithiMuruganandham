//for loop
for(let i=1; i<=10;i++){
    console.log(i);
}

// for each

let automationTools=['Playwright','SElenium','Cypress']
automationTools.forEach(function(automation){
    console.log(automation)//automation is the index of automationtool .automation is temporary variable it can be anything
})

//while to print 10 to 1 - 0 not printed because as it would be falsy value which means while(falsy) comes out of loop
let count=10;
while(count){
    console.log(count);
    count--;
}


// do while- you can run atleast one condition without checking the condition
let n=10;
do {
    console.log(n)
    num++;
} while (num<=5);