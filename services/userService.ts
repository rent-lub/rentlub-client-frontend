import axios from "axios";

export interface createUserPayload {
  name: string;
  lineId: string;
  type?: "CUSTOMER";
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

export async function checkUserExist(id: string): Promise<boolean> {
  await axios
    .get(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/users/" + id)
    .then(function (response) {
      if (response.status == 200) {
        return true;
      }
    })
    .catch(function (error) {
      return false;
    });
  return false;
}
