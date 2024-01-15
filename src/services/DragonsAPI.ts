import axios from "axios"

const axiosInstance = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
});

const getDragons = async () => {
  const response = await axiosInstance.get('/');

  return response.data;
}

const DragonsAPI = {
  getDragons
}

export default DragonsAPI