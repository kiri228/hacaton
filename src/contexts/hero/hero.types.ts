import { Dispatch, SetStateAction } from "react";

export interface IProduct {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  img: string;
  id?: string;
  skillA: string;
  imageA: string;
  textA: string;
  skillB: string;
  imageB: string;
  textB: string;
  skillC: string;
  imageC: string;
  textC: string;
  ultimate: string;
  imageU: string;
  textU: string;
}

export interface IProductsValues {
  products: IProduct[];
  oneProduct: IProduct | null;
  addProduct: (newProduct: IProduct) => Promise<void>;
  editProduct: (id: string, newProduct: IProduct) => Promise<void>;
  getOneProduct: (id: string) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  getProducts: () => Promise<void>;
  page: number | string;
  setPage: Dispatch<SetStateAction<number | string>>;
  pageTotalCount: number;
}

export type STATE = {
  products: IProduct[];
  oneProduct: IProduct | null;
  pageTotalCount: number;
};

export type ACTION = {
  type: "GET_PRODUCTS" | "GET_ONE_PRODUCT" | "GET_TOTAL_PAGE_COUNT";
  payload: any;
};
