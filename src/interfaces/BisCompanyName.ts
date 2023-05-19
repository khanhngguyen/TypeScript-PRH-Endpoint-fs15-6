import { Source } from "./BisAddress"

interface BisCompanyName {
    order: number
    version: number
    name: string
    registrationDate: string
    endDate: null
    source: Source
}

export default BisCompanyName