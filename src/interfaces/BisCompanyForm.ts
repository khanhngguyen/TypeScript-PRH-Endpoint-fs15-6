import { Source } from "./BisAddress"

interface BisCompanyForm {
    version: number
    name: string
    type: string
    resgitrationDate: string
    endDate?: string | null
    language?: string
    source?: Source
}

export default BisCompanyForm