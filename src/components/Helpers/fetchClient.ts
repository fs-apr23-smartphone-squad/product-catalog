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
