import { faker } from "@faker-js/faker";
import { expect, test } from "@playwright/test";
import { log } from "console";
let token:any
let inst_url:any
let tokenType:any
let responseId:any
test.describe.serial('Salesforce API',async()=>{
test("Generate a token",async ({request}) => {
 const response=   await request.post("https://login.salesforce.com/services/oauth2/token",
        {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            form:{
                "grant_type":"password",
                "client_id":"3MVG9dAEux2v1sLurCmVZTxRoLtJ1GGvfRlwkG92nDIUqph2w0KUGWlftRoxPbwaxBz6ML1EjdIKFTqjAWaZM",
                "client_secret":"F9019F8C19F3423A8350C363A41F68864CE25C7411DCE6A3CF41AEAF8DAACA7E",
                "username":"srinithi26022001738@agentforce.com",
                "password":"Srinithi@2602"
            }
        }
    )
const responseBody= await response.json();
console.log(responseBody);

console.log(response.status());
console.log(response.statusText());
token =responseBody.access_token
inst_url= responseBody.instance_url
tokenType=responseBody.token_type
})
test("Create the opportunity",async ({request}) => {
 const response=   await request.post(`${inst_url}/services/data/v64.0/sobjects/opportunity`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${tokenType} ${token}`
            },
            data:{
                "Name": 'Playwright Test Opportunity',
                "CloseDate": '2025-07-30',
                "StageName": 'Qualification'
            }

        })
        const resBody= await response.json();
        console.log(resBody);

        console.log(response.status());
        console.log(response.statusText());
        responseId=resBody.id
        console.log(responseId);
        expect(response.status()).toBe(201)
        
        
        

})

test("Fetch the opportunity",async ({request}) => {
    const response= await request.get(`${inst_url}/services/data/v64.0/sobjects/opportunity/${responseId}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${tokenType} ${token}`
            }
        }
    )
    const resRead= await response.json();
    console.log(resRead);
    console.log(response.status())
    console.log(response.statusText());
    expect(response.status()).toBe(200)
    
    
    
})
test("Update the opportunity",async ({request}) => {
    const response= await request.patch(`${inst_url}/services/data/v64.0/sobjects/opportunity/${responseId}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${tokenType} ${token}`
            },
            data:{
                "Type": 'New Customer',
                "StageName": 'Prospecting',
            }
        }
    )
   expect(response.status()).toBe(204)
   console.log(response.status());
   console.log((response.statusText()));
   
   
const responseGet = await request.get(`${inst_url}/services/data/v64.0/sobjects/Opportunity/${responseId}`, {
       headers:{
                "Content-Type":"application/json",
                "Authorization":`${tokenType} ${token}`
            },
    });
    const updatedData = await responseGet.json();
    console.log("Updated Opportunity:", updatedData);

    expect(updatedData.Type).toBe("New Customer");
    expect(updatedData.StageName).toBe("Prospecting");
  });

  test("Delete the opportunity",async ({request}) => {
    const response= await request.delete(`${inst_url}/services/data/v64.0/sobjects/Opportunity/${responseId}`, {
        headers:{
                "Content-Type":"application/json",
                "Authorization":`${tokenType} ${token}`
            },
    });
     expect(response.status()).toBe(204);
     const deletedGet = await request.get(`${inst_url}/services/data/v64.0/sobjects/Opportunity/${responseId}`, {
       headers:{
                "Content-Type":"application/json",
                "Authorization":`${tokenType} ${token}`
            },
    });
  expect(deletedGet.status()).toBe(404)
  })

})