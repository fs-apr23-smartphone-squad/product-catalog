import { Phone } from '../Types/Types';

const BASE_URL = 'https://api.smartphonesquad.shop';

export async function get<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url;

  try {
    const res = await fetch(fullURL);
    const data: T = await res.json();

    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}

export const getPhones = (
  limit: number,
  offset: number,
  sortBy: string = 'price',
  sortOrder: 'ASC' | 'DESC' = 'ASC',
) => get<Phone[]>(`/products?limit=${limit}&offset=${offset}&sortBy=${sortBy}&sortOrder=${sortOrder}`);

export const getPhonesByIds = (phoneIds: string[]) => get<Phone[]>(`/products?ids=${phoneIds.join(',')}`);
export const getDiscount = () => get<Phone[]>('/products/discount');
export const getNew = () => get<Phone[]>('/products/new');
export const getRecommendedById = (phoneId: string) => get<Phone[]>(`/products/${phoneId}/recommended`);

export const getTablets = () => get<Phone[]>('/products?productType=tablets');
export const getAccessories = () => get<Phone[]>('/products?productType=accessories');
export const getAllPhones = () => get<Phone[]>('/products?productType=phones');
