import { Attribute } from "./attribute.model";
export interface Category{
  "id": number,
  "name": string,
  "status": string,
  "attributes": Attribute[],
}
