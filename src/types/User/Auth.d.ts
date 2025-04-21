interface AuthInfo {
  user?: {
    name: string
    Id: string
    role: string
    authentication: string[]
    departmentId: string
  }
  token?: string
}

export { AuthInfo }
