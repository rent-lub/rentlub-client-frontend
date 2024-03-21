import axios from "axios";

export interface createUserPayload {
  name: string;
  lineId: string;
  type?: "CUSTOMER";
}

export async function createUser(payload: createUserPayload) {
  console.log(payload);
  await axios
    .post("https://api.rentlub.iamgraph.live" + "/api/v1/users", payload)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function checkUserExist(id: string): Promise<boolean> {
  await axios
    .get("https://api.rentlub.iamgraph.live" + "/api/v1/users/" + id)
    .then(function (response) {
      if (response.status == 200) {
        return true;
      }
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
  return false;
}
