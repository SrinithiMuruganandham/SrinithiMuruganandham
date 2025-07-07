import { faker } from "@faker-js/faker";
import { APIRequestContext } from "@playwright/test";


let tokenURL = "https://login.salesforce.com/services/oauth2/token"


let grant_type="password"
let client_id="3MVG9dAEux2v1sLurCmVZTxRoLtJ1GGvfRlwkG92nDIUqph2w0KUGWlftRoxPbwaxBz6ML1EjdIKFTqjAWaZM"
let client_secret="F9019F8C19F3423A8350C363A41F68864CE25C7411DCE6A3CF41AEAF8DAACA7E"
let username="srinithi26022001738@agentforce.com"
let password="Srinithi@2602"


let token:any
let inst_url:any
let tokenType:any
let resourceId:any
        


async function generateToken(request:APIRequestContext){



    const response = await request.post(tokenURL,
        {
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
            },
             form:{
                "grant_type":grant_type,
                "client_id":client_id,
                "client_secret":client_secret,
                "username":username,
                "password":password
            }
        }
    )


    const responseBody =await response.json(); 
        token=responseBody.access_token
        inst_url=responseBody.instance_url
        tokenType=responseBody.token_type 
}


export async function createResource(request:APIRequestContext){
    await generateToken(request)
    const response = await request.post(`${inst_url}/services/data/v64.0/sobjects/Lead/`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${tokenType} ${token}`
            },
            data:{
                "lastname":faker.person.firstName(),
                "company":faker.company.buzzNoun()


            }
        })


        const res= await response.json()
        resourceId=res.id
    }



export async function fetchResource(request:APIRequestContext){


    const response = await request.get(`${inst_url}/services/data/v64.0/sobjects/Lead/${resourceId}`,
            {
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`${tokenType} ${token}`
                }
            })
    
        const res =await response.json();
        console.log(res);
        return res.LastName
           


        }