import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/ditto",
  withCredentials: false, //크로스 도메인 요청 시 쿠키, HTTP 인증 및 클라이언트 SSL 인증서를 사용하도록 허용한다.
});

export const getResponse = async <T>(url: string): Promise<T | null> => {
  try {
    const response: AxiosResponse<T> = await instance.get(url);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Response error:", axiosError);
    return null;
  }
};
