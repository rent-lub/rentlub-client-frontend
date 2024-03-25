export interface Shop {
  setting: Setting;
  _id: string;
  name: string;
  description: string;
  apiKey: string;
  owner: string;
  shippingMethods: ShippingMethod[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Setting {
  depositPercentage: number;
  depositFixed: number;
  preparationTime: number;
}

export interface ShippingMethod {
  name: string;
  price: number;
  duration: number;
  _id: string;
}
