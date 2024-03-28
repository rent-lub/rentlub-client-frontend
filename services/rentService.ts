import axios from "axios";
import { Product } from "~/types/productModel";
import { getProductByID } from "./productService";
import { RentingStatus } from "~/types/rentingEnum";

export interface CreateRentingPayload {
  userLineId: string;
  productId: string;
  startDate: string;
  endDate: string;
}

export interface Renting {
  _id: string;
  user: string;
  product: string;
  productId: string;
  startDate: string;
  endDate: string;
  status: RentingStatus;
  checkoutLink: string;
  createdAt: string;
  updatedAt: string;
  lineOrderId: string;
  verify: {
    images: string[];
  };
  price: {
    rent: number;
    deposit: number;
  };
}

export const createRenting = async (
  payload: CreateRentingPayload
): Promise<Renting | null> => {
  var response = await axios.post<Renting>(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/rentings",
    payload
  );
  console.log(payload);
  console.log(response.status);
  return response.status === 201 ? response.data ?? null : null;
};

export const getAllMyOrder = async (
  id: string
): Promise<{ renting: Renting; product: Product }[] | null> => {
  try {
    const response = await axios.get<Renting[]>(
      process.env.NEXT_PUBLIC_API_BASE_URL + `/api/v1/users/${id}/rentings`
    );

    if (response.status === 200) {
      const rentProductList: { renting: Renting; product: Product }[] = [];
      await Promise.all(
        response.data.map(async (item) => {
          const rentProduct = await getProductByID(item.productId);
          if (rentProduct != null) {
            const rentingWithEnumStatus: Renting = {
              ...item,
              status: RentingStatus[item.status as keyof typeof RentingStatus],
            };
            rentProductList.push({
              renting: rentingWithEnumStatus,
              product: rentProduct,
            });
          }
        })
      );
      console.log(rentProductList);
      return rentProductList;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};



export const updateStatusReturn = async (
  id: string,
  trackingNumber: string
): Promise<boolean> => {
  var result = await axios.post(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/api/v1/rentings/${id}/returned`,
    {
      trackingNumber: trackingNumber,
    }
  );

  return result.status == 200 ? true : false;
};