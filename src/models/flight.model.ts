export interface Flightmodel{
    id : number
    type: {
        id: number
        name: string
    }
    flightKey: string
    flightNumber: string
    destination: string
    scheduleAt: string
    estimatedAt: null | string
    connectedType: string
    connectedFlight: string
    plane: string
    gate: null | string
    terminal: string

}