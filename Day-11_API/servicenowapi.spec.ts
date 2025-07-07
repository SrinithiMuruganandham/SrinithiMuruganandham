//endpont
// headers
    //authorization
    //content-type
    // Request body for post
    // Resonse body

import { test } from "@playwright/test";
let id:any// Global data
test.describe.serial('ServiceNow',async()=>{
test("Creating instance ysing Playwright with API", async ({request}) => {
const response=await request.post(`https://dev281454.service-now.com/api/now/table/incident`,
    {
    headers:{
        "Content-Type":"application/json",
        "Authorization":"Basic YWRtaW46NHhVNkBaZ0drcEBX"// encoded username and password using base64encode web app username:password format.
    },
    data:{
        "description":"Creating issue thru Playwright"
    }// body is the data
}

) 
const responseBody= await response.json();
console.log(responseBody);
console.log(response.status());
console.log(response.statusText());
console.log(responseBody.result.sys_id);

id= responseBody.result.sys_id;

})





test("Fetch instance using Playwright with API", async ({request}) => {
const response=await request.get(`https://dev281454.service-now.com/api/now/table/incident/${id}`,
    {
    headers:{
        "Content-Type":"application/json",
        "Authorization":"Basic YWRtaW46NHhVNkBaZ0drcEBX"
    },
    
}

) 
const respons= await response.json();
console.log(respons);
console.log(response.status());
console.log(response.statusText());




})
test("Update instance using Playwright with API", async ({request}) => {
const response=await request.patch(`https://dev281454.service-now.com/api/now/table/incident/${id}`,
    {
    headers:{
        "Content-Type":"application/json",
        "Authorization":"Basic YWRtaW46NHhVNkBaZ0drcEBX"
    },

    data:{
        "short_description":"Network_issue for Playwright",
        "location":"Chennai"
    }
    
}

) 
const resBody= await response.json();
console.log(resBody);
console.log(response.status());
console.log(response.statusText());




})

test("Delete instance using Playwright with API", async ({request}) => {
const response=await request.delete(`https://dev281454.service-now.com/api/now/table/incident/${id}`,
    {
    headers:{
        "Content-Type":"application/json",
        "Authorization":"Basic YWRtaW46NHhVNkBaZ0drcEBX"
    },


    
}

) 
console.log(response.status());
console.log(response.statusText());




})
})



