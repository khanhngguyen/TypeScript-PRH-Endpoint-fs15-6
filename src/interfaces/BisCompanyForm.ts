interface BisCompanyForm {
    version: number
    name: string
    type: string
    resgitrationDate: string
    endDate?: string | null
    language?: string
    source?: number 
}

export default BisCompanyForm