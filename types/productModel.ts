export interface Product {
  stock: Stock;
  deposit: Deposit;
  preparation: Preparation;
  _id: string;
  name: string;
  images: string[];
  active: boolean;
  description: string;
  shop: string;
  myShopId?: string;
  pricePerDay: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Deposit {
  isDefault: boolean;
  mode: string;
  value: number;
}

export interface Preparation {
  isDefault: boolean;
  value: number;
}

export interface Stock {
  amount: number;
  available: number;
}
