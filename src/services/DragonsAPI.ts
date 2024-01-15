'use client'

import axios from "axios"
import { Dragon } from "@/entities";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DRAGONS_API_BASE_URL
});

const getDragons = async () => {
  const response = await axiosInstance.get<Dragon[]>('/');

  console.log(response)

  return response.data;
}

const DragonsAPI = {
  getDragons
}

export default DragonsAPI