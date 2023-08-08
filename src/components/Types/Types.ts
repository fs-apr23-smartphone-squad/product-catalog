export interface Phone {
  id: number,
  category: string,
  phoneId: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  priceRegular: number,
  priceDiscount: number,
  screen: string,
  resolution: string,
  processor: string,
  capacity: string,
  capacityAvailable: string;
  color: string,
  colorsAvailable: string,
  ram: string,
  year: number,
  image: string,
  images: string,
  camera: string,
  zoom: string,
  cell: string,
  description: Description[],
}

export interface PhoneApiResponse {
  count: number;
  rows: Phone[];
}

export interface Description {
  text: string[],
  title: string,
}
