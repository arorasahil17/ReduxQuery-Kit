import { axiosInstance } from "./utils";

export const fetchData = async <T>(
  url: string,
  options?: any
): Promise<T[]> => {
  const response = await axiosInstance.get(url, options);
  return response.data;
};

export const fetchDataById = async <T>(
  url: string,
  id: string,
  options?: any
): Promise<T> => await axiosInstance.get(`${url}/${id}`, options);

export const createData = async <T>(
  url: string,
  data: T,
  options?: any
): Promise<T> => {
  const response = await axiosInstance.post(url, data, options);
  return response.data;
};

export const updateData = async <T>(
  url: string,
  data: T,
  options?: any
): Promise<T> => {
  const response = await axiosInstance.put(url, data, options);
  return response.data;
};

export const deleteData = async <T>(url: string, options?: any): Promise<T> => {
  const response = await axiosInstance.delete(url, options);
  return response.data;
};
