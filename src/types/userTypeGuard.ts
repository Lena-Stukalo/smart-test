import { Options, UserType } from "./UserType";

export function isUserType(obj: any): obj is UserType {
    return (
      typeof obj === "object" &&
      typeof obj.id === "number" &&
      typeof obj.name === "string" &&
      typeof obj.username === "string" &&
      typeof obj.email === "string" &&
      typeof obj.address === "object" &&
      typeof obj.address.street === "string" &&
      typeof obj.address.suite === "string" &&
      typeof obj.address.city === "string" &&
      typeof obj.address.zipcode === "string" &&
      typeof obj.address.geo === "object" &&
      typeof obj.address.geo.lat === "string" &&
      typeof obj.address.geo.lng === "string" &&
      typeof obj.phone === "string" &&
      typeof obj.website === "string" &&
      typeof obj.company === "object" &&
      typeof obj.company.name === "string" &&
      typeof obj.company.catchPhrase === "string" &&
      typeof obj.company.bs === "string"
    );
  }
  
  // Функція для фільтрації масиву
  export function filterUserTypes(arr: any[]): UserType[] {
    return arr.filter(isUserType);
  }
  export function isOptions(value: any): value is Options {
    return ['name', 'username', 'email', 'phone'].includes(value);
}
