import BisAddress from "./BisAddress";
import BisCompanyForm from "./BisCompanyForm";
import BisCompanyName from "./BisCompanyName";
import BisRegisteredEntry from "./BisRegisteredEntry";
import BisRegisteredOffice from "./BisRegisteredOffice";
import Company from "./Company";

interface Business extends Company {
    name?: string
    registrationDate: string
    companyForm?: string
    detailsUri?: string 
    liquidations?: []
    names: BisCompanyName[]
    auxiliaryNames?: BisCompanyName[]
    addresses?: BisAddress[]
    companyForms?: BisCompanyForm[]
    businessLines?: []
    language?: []
    registedOffices?: BisRegisteredOffice[]
    contactDetails?: []
    registeredEntries?: BisRegisteredEntry[]
    businessIdChanges?: []
}

export default Business