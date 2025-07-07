
//Numeric enum // default
/* 
enum TestResult {
Pass,
Fail,
Skip
}

function LogTestResult(testCaseName:string,result:TestResult) {

    return `Test : ${testCaseName} Result Code:${result}`
    
}

LogTestResult("LoginPage",TestResult.Pass)
LogTestResult("SignUp",TestResult.Fail)
LogTestResult("HomePage",TestResult.Skip)

//string enum

/* enum Environment {
DEV = 'https://dev.example.com',
QA = 'https://qa.example.com',
PROD = 'https://prod.example.com'
}

await page.goto(Environment.PROD); // Testcase 1
await page.goto(Environment.QA); // testcase2 */ 

enum BrowserType {
Chrome="chrome",
Firefox="firefox",
Edge = "edge"
}

function launchBrowser(browserType:BrowserType) {

    console.log(`Launch Browser using ${browserType}`);   
    
}
launchBrowser(BrowserType.Chrome)
launchBrowser(BrowserType.Edge)

//heterogenous enum

enum BrowserStatus {
    Open="Open",
    Incognito=1,
    Crash="crashed",
    Close=2,
}

function reportBrowserStatus(status:BrowserStatus) {

    return `Current Status of browser is ${status}`
    
}

console.log(reportBrowserStatus(BrowserStatus.Open));
console.log(reportBrowserStatus(BrowserStatus.Crash));
console.log(reportBrowserStatus(BrowserStatus.Close));
