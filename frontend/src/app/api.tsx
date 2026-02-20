import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const uploadModel = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(`${BASE_URL}/models/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const predict = (data: (string | number)[]) => {
  return axios.post(`${BASE_URL}/models/predict`, { data });
};