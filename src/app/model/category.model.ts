export interface Attribute{
  "id": number,
  "name": string,
  "value": string,
  "status": string,
}
export interface Category{
  "id": number,
  "name": string,
  "status": string,
  "attributes": Attribute[],
}
