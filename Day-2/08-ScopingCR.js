

const browserVersion = "Chrome";  // Global constant override's the hoisting //reference let

function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        let browserVersion = "Firefox"; // Block-scoped variable (shadowing the global variable)
        console.log("Inside block with let:", browserVersion); // Expected Output: "Firefox"
    }
    console.log("Inside function with let:", browserVersion); // Expected Output: "Chrome" (Global variable)
}

getBrowserVersion();
console.log("Outside function:", browserVersion); // Expected Output: "Chrome" (Global remains unchanged)


