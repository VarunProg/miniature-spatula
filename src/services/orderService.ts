import axios from 'axios';

interface ConfirmOrderRequest {
  firstName: string;
  email: string;
  selectedRecipes: string[];
}

export const confirmOrder = (confirmOrderRequest: ConfirmOrderRequest): Promise<any> => 
  axios.post('https://code-challenge-mid.vercel.app/api/submit', 
    { 
      firstName: confirmOrderRequest.firstName, 
      email: confirmOrderRequest.email, 
      recipes: [...confirmOrderRequest.selectedRecipes] 
    },
    {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    }).then(res => res.data);