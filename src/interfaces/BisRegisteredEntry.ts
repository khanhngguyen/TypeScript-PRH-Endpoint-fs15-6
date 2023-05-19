enum Register {
    'Trade Register' = 1,
    'Register of Foundations' = 2,
    'Register of Associations' = 3,
    'Tax Administration' = 4,
    'Prepayment Register' = 5,
    'VAT Register' = 6,
    'Employer Register' = 7,
    'Register of bodies liable for tax on insurance premiums' = 8
}

enum Authority {
    'Tax Administration' = 1,
    'Finnish Patent and Registration Office' = 2,
    'Population Register' = 3
}

enum Status {
    'Common entries' = 1,
    'Unregistered' = 2,
    'Registered' = 3
}

interface BisRegisteredEntry {
    authority: Authority
    register: Register
    status: Status
    registrationDate: string
    endDate?: string | null
    statusDate?: string
    language?: string
    description: string
}

export default BisRegisteredEntry