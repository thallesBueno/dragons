'use client'

import axios from "axios"
import { Dragon } from "@/entities";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DRAGONS_API_BASE_URL
});

const getDragons = async () => {
  const response = await axiosInstance.get<Dragon[]>('/');

  return response.data;
}

const getDragonDetails = async (id: string) => {
  const response = await axiosInstance.get<Dragon>(`/${id}`);

  return response.data;
}

const deleteDragon = async (id: string) => {
  await axiosInstance.delete(`/${id}`);
}

const createDragon = async (name: string, type: string, histories: string) => {
  await axiosInstance.post(`/`, {
    name,
    type,
    histories
  });
}

const DragonsAPI = {
  getDragons,
  getDragonDetails,
  deleteDragon,
  createDragon
}

export default DragonsAPI