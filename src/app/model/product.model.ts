export interface Product {
  id?: number;
  name: string;
  desc: string;
  brand: string;
  price: number;
  discount: number;
  urlImg: string;
  status?: number;
}
export interface ProductAdd {
  name: string;
  longDescription: string;
  price: number;
  quantity: number;
  discount: number;
}
