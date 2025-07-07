import { faker } from "@faker-js/faker";
import { test } from "@playwright/test";
let token: any
let inst_url: any
let tokenType: any
let tokenId: any
test.describe.serial('Salesforce API', async () => {
    test("Generate a token", async ({ request }) => {
        const response = await request.post("https://login.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "grant_type": "password",
                    "client_id": "3MVG9dAEux2v1sLurCmVZTxRoLtJ1GGvfRlwkG92nDIUqph2w0KUGWlftRoxPbwaxBz6ML1EjdIKFTqjAWaZM",
                    "client_secret": "F9019F8C19F3423A8350C363A41F68864CE25C7411DCE6A3CF41AEAF8DAACA7E",
                    "username": "srinithi26022001738@agentforce.com",
                    "password": "Srinithi@2602"
                }
            }
        )
        const responseBody = await response.json();
        console.log(responseBody);

        console.log(response.status());
        console.log(response.statusText());
        token = responseBody.access_token
        inst_url = responseBody.instance_url
        tokenType = responseBody.token_type
    })
    test("Create a lead", async ({ request }) => {
        const response = await request.post(`${inst_url}/services/data/v64.0/sobjects/Lead`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${token}`
                },
                data: {
                    "lastname": faker.person.firstName(),
                    "company": faker.company.buzzNoun()
                }
            }
        )
        const resBody = await response.json();
        console.log(resBody);

        console.log(response.status());
        console.log(response.statusText());
        tokenId = resBody.id
        console.log(tokenId);

    })
    test("To fetch a specific lead lead", async ({ request }) => {
        const response = await request.get(`${inst_url}/services/data/v64.0/sobjects/Lead/${tokenId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${token}`
                }

            }
        )
        const rBody = await response.json();
        console.log(rBody);

        console.log(response.status());
        console.log(response.statusText());

    })
    test("Update a specific lead", async ({ request }) => {
        const response = await request.patch(`${inst_url}/services/data/v64.0/sobjects/Lead`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${tokenType} ${token}`
                },
                data: {
                    "first_name": faker.person.firstName(),

                }
            }
        )
        const resBody1 = await response.json();
        console.log(resBody1);

        console.log(response.status());
        console.log(response.statusText());

    })

})
