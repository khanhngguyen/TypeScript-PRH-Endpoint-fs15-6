import { Source } from "./BisAddress";
import BisCompanyForm from "./BisCompanyForm";

interface BisRegisteredOffice extends BisCompanyForm {
    order: number
    name: string
    type: string
    resgitrationDate: string
    endDate?: string | null
    language?: string
    source?: Source
}

export default BisRegisteredOffice