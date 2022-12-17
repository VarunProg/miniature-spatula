import axios from "axios";

interface ConfirmOrderRequest {
  firstName: string;
  email: string;
  recipes: string[];
}

export const confirmOrder = (
  confirmOrderRequest: ConfirmOrderRequest
): Promise<any> =>
  axios
    .post(
      "https://code-challenge-mid.vercel.app/api/submit",
      JSON.stringify(confirmOrderRequest),
      {
        headers: {
          "Content-Type": "text/plain",
        },
      }
    )
    .then((res) => res.data);
