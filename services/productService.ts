import axios from "axios";
import { Product } from "~/types/productModel";
import { Shop } from "~/types/shopModel";

export const getSampleShop = async (): Promise<Shop | null> => {
  var allShop = await axios.get<Shop[]>(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/shops"
  );
  return allShop.data[0];
};

export const getAllProduct = async (id: string): Promise<Product[] | null> => {
  var products = await axios.get<Product[]>(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/api/v1/shops/${id}/products`
  );
  return products.data;
};

export const getProductByID = async (id: string): Promise<Product | null> => {
  var products = await axios.get<Product>(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/api/v1/products/${id}`
  );
  return products.data;
};
