import axios, { AxiosError } from 'axios';

import Business from "./interfaces/Business";
import Company from "./interfaces/Company";

//generic function
const getData = async <T> (endpoint: string) => {
  try {
    const response = await axios.get(endpoint);
    //console.log(response);
    return response.data.results;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error.response.status);
      console.log(error.response.statusText);
      console.log(error.response.data.results);
      console.log('from response');
    } else if (error.request) {
      console.log('Bad request')
    } else {
      console.log('Error', error.message);
    }
  }
}


//GET /BIS/V1
// const getCompany = async () => {
//   const data = await getData <Company> ("http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=2&resultsFrom=0&companyRegistrationFrom=2014-02-28");
//   //console.log(data);
//   return data;
// }

//getCompany();

// GET /BIS/V1/{BUSINESSID}
const getBusiness = async (id: string) => {
  const data = await getData <Business> (`https://avoindata.prh.fi/bis/v1/${id}`);
  const util = require('util');
  console.log(util.inspect(data, false, null, true));
  //console.log(data);
  //console.log(JSON.stringify(data, null, 4));
  return data;
}

//getBusiness("3355613-6");

//custom function
const findCompanies = async (
  maxResults: number, 
  resultsFrom: number, 
  postalCode: string
  ) => {
  const companies = await getData <Company> (`http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResults}&resultsFrom=${resultsFrom}&streetAddressPostCode=${postalCode}&companyRegistrationFrom=2014-02-28`);
  if (companies != undefined) {
    for (const company of companies) {
      const details = await getBusiness(company.businessId);
    }
  }
  return;
}

findCompanies(3, 2, "00100");
