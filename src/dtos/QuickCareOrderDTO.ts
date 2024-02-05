export class QuickCareOrderDTO {
    id: number;
    product: string;
    quantity: number;
    userData: {
      name: string;
      address: string;
      city: string;
      state: string;
      zipcode: string;
      country: string;
    };
  
    [key: string]: any;
    
  }