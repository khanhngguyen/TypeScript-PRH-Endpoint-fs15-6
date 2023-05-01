import Business from "./interfaces/Business";
import Company from "./interfaces/Company";

//generic function
const getData = async <T> (endpoint: string) => {
  try {
    const data = await fetch(endpoint);
    const response = await data.json();
    const result: T[] = response.results;
    return result;
  } catch (e) {
    console.log(e);
  }
}

//GET /BIS/V1
const getCompany = async () => {
  const data = await getData <Company> ("http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=2&resultsFrom=0&companyRegistrationFrom=2014-02-28");
  //console.log(data);
  return data;
}

//getCompany();

// GET /BIS/V1/{BUSINESSID}
const getBusiness = async (id: string) => {
  const data = await getData <Business> (`https://avoindata.prh.fi/bis/v1/${id}`);
  // const util = require('util');
  // console.log(util.inspect(data, false, null, true));
  console.log(data);
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
