interface BisRegisteredEntry {
    authority: number
    register: number
    status: number
    registrationDate: string
    endDate?: string | null
    statusDate?: string
    language?: string
    description: string
}

export default BisRegisteredEntry