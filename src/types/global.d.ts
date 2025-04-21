export {}
declare global {
  interface MyGlobalInterface {
    id: number
    name: string
    email: string
  }
  declare function myLib(a: string): string
}

