import { test } from "@playwright/test";
let id: any
test.describe.serial('ServiceNow',async()=>{
test("Create Change_Request in servicenow",async ({request}) => {
const response =   await request.post("https://dev281454.service-now.com//api/now/table/change_request",
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Basic YWRtaW46NHhVNkBaZ0drcEBX"
            },
            data:{
                
                    "category":"Hardware",
                    "description":"Hardware_issue"

                }
            
        }
    )
    const responseBody= await response.json()
    console.log(responseBody);
    console.log(response.status())
    console.log(response.statusText());
    id= responseBody.result.sys_id
    console.log(responseBody.result.sys_id);
    
    
    
    
})
test("Fetch the Change request", async({request})=>{

 const response=   await request.get( `https://dev281454.service-now.com//api/now/table/change_request/${id}`,
        {
             headers:{
                "Content-Type":"application/json",
                "Authorization":"Basic YWRtaW46NHhVNkBaZ0drcEBX"
            }
        }
    )
    const getBody= await response.json()
    console.log(getBody)
    console.log(response.status())
    console.log(response.statusText());
    
})
test("Update the Change request", async({request})=>{

 const response=   await request.patch( `https://dev281454.service-now.com//api/now/table/change_request/${id}`,
        {
             headers:{
                "Content-Type":"application/json",
                "Authorization":"Basic YWRtaW46NHhVNkBaZ0drcEBX"
            },
            data:{
                "short_description":"Laptop is not working"
            }
        }
    )
    const updateBody= await response.json()
    console.log(updateBody)
    console.log(response.status())
    console.log(response.statusText());
    
})
test("Delete the Change request", async({request})=>{

 const response=   await request.delete( `https://dev281454.service-now.com//api/now/table/change_request/${id}`,
        {
             headers:{
                "Content-Type":"application/json",
                "Authorization":"Basic YWRtaW46NHhVNkBaZ0drcEBX"
            }
        }
    )

    console.log(response.status())
    console.log(response.statusText());
    
})
})