interface BisAddress {
    careOf?: null
    street?: string
    postCode?: string
    type?: number
    version: number
    city?: string
    registrationDate: string
    endDate? : string | null
    language?: string
    source?: number
}

export default BisAddress