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
}

export enum SortTypes {
  Newest = 'Newest',
  LowestPrice = 'Price ⇂' ,
  HighestPrice = 'Price ↾',
}

export enum SortOrders {
  Increase = 'ASC',
  Decrease = 'DESC',
}
