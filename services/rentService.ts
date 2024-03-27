import axios from "axios";

export interface CreateRentingPayload {
  userLineId: string;
  productId: string;
  startDate: string;
  endDate: string;
}

export interface ResponseCreateRenting {
  user: string;
  product: string;
  startDate: string;
  endDate: string;
  status: string;
  checkoutLink: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export const createRenting = async (
  payload: CreateRentingPayload
): Promise<ResponseCreateRenting | null> => {
  var response = await axios.post<ResponseCreateRenting>(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/rentings",
    payload
  );
  return response.status === 201 ? response.data ?? null : null;
};
