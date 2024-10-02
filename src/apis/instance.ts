import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: false, //크로스 도메인 요청 시 쿠키, HTTP 인증 및 클라이언트 SSL 인증서를 사용하도록 허용한다.
});

export const getResponse = async <T>(url: string): Promise<T | null> => {
  try {
    console.log(`[GET] ${url}\n`);
    const response = await instance.get<T>(url, {
      headers: {
        Authorization: `Bearer `,
      },
    });

    console.log(response);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    console.error("Response error:", axiosError);
    return null;
  }
};
