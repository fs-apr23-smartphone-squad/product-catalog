export interface Phone {
  id: number,
  category: string,
  phoneId: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  color: string,
  ram: string,
  year: number,
  image: string,
  images: string,
}

export interface PhoneApiResponse {
  count: number;
  rows: Phone[];
}

interface PhoneDescription {
  text: string[],
  title: string,
}

export interface phoneDescription {
  id: string,
  category: string,
  namespaceId: string,
  name: string,
  capacityAvailable: string,
  capacity: string,
  priceRegular: number,
  priceDiscount: number,
  colorsAvailable: string,
  color: string,
  images: string,
  description: PhoneDescription[],
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  camera: string,
  zoom: string,
  cell: string,
}
