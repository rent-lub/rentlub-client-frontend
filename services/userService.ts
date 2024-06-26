import axios from "axios";

export interface createUserPayload {
  name: string;
  lineId: string;
  type: string;
}

export interface verifyUserPayload {
  lineId: string;
  email: string;
  idCard: string;
  dateOfBirth: string;
}

export async function createUser(payload: createUserPayload) {
  await axios
    .post(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/users", payload)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function checkUserExist(id: string): Promise<{
  _id: string;
  name: string;
  lineId: string;
  isVerified: boolean;
  type: string;
  shops: [];
  createdAt: string;
  updatedAt: string;
} | null> {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/users/" + id
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export async function verifyUser(payload: verifyUserPayload): Promise<boolean> {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/users/verify",
      payload
    );
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
