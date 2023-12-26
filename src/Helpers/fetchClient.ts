/* eslint-disable */
import { Phone, PhoneApiResponse, phoneDescription } from '../Types/Types';

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

export const getPhones = () => get<Phone[]>('/products');

export const getPhonesForPagination = (
  limit: number,
  offset: number,
  sortBy: string,
  sortOrder: 'ASC' | 'DESC' = 'ASC',
  group: string,
  query: string,
): Promise<PhoneApiResponse> => get(`/products?limit=${limit}&offset=${offset}&sortBy=${sortBy}&sortOrder=${sortOrder}&group=${group}&query=${query}`);

export const getPhonesByIds = (phoneIds: string[]) => get<Phone[]>(`/products?ids=${phoneIds.join(',')}`);
export const getDiscount = () => get<Phone[]>('/products/discount');
export const getNew = () => get<Phone[]>('/products/new');
export const getRecommendedById = (category: string, phoneId: string | undefined) => get<Phone[]>(`/${category}/${phoneId}/recommended`);
export const getPhoneById = (category: string, phoneId: string | undefined) => get<Phone>(`/${category}/${phoneId}`);

export const getTablets = () => get<Phone[]>('/products?productType=tablets');
export const getAccessories = () => get<Phone[]>('/products?productType=accessories');
export const getAllPhones = () => get<Phone[]>('/products?productType=phones');

export const getSingleItem = (category: string, phoneId: string | undefined) => get<phoneDescription>(`/${category}/${phoneId}`);
export const getRecommendedBySingle = (category: string, phoneId: string | undefined) => get<Phone[]>(`/${category}/${phoneId}/recommended`);
