export type Tuser = {
    name: string,
    email: string,
    password: string,
    phone: string,
    role: "user" | "admin",
    address: string,
    isDeleted:boolean
}