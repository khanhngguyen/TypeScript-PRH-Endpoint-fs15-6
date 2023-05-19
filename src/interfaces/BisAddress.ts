export enum Source {
    'Common' = 0,
    'Finnish Patent and Registration Office' = 1,
    'Tax Administration or three for Business Information' = 2
}

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
    source?: Source
}

export default BisAddress