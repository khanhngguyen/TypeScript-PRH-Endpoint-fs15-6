// console.log("test")
// console.log("hello")

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

const getCompany = async () => {
  const data = await getData <Company> ("http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=2&resultsFrom=0&companyRegistrationFrom=2014-02-28");
  console.log(data);
}

getCompany();
