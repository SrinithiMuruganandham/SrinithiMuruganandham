import {test } from "@playwright/test";
import credentials from "../../Data/login.json";


for(let data of credentials){


test(`Learn to read data from JSON ${data.TCaseId}`,async () => {


   console.log(data.Username);
    console.log(data.Password);     
    
})
}