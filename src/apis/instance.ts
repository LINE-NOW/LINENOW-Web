import axios, { AxiosError } from 'axios';

const instance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: '',
  withCredentials: false, //크로스 도메인 요청 시 쿠키, HTTP 인증 및 클라이언트 SSL 인증서를 사용하도록 허용한다.
});

interface BaseDTO<T> {
  status: string;
  code: number;
  data: T;
  message: string;
}

export const getResponse = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await instance.get<BaseDTO<T>>(url, {
      headers: {
        Authorization: `Bearer `,
      },
    });

    console.log(
      `[GET] ${url}
      code: ${response.data.code} (${response.data.status})
      message: ${response.data.message}`
    );

    const data = response.data.data;
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;

    console.error('Response error:', axiosError);
    return null;
  }
};

// export const deleteResponse = async <T>(url: string): Promise<T | null> => {
//   try {
//     const response = await instance.delete<BaseDTO<T>>(url, {
//       headers: {
//         Authorization: `Bearer `,
//       },
//     });

//     console.log(
//       `[DELETE] ${url}
//       code: ${response.data.code} (${response.data.status})
//       message: ${response.data.message}`
//     );

//     const data = response.data.data;
//     return data;
//   } catch (error) {
//     const axiosError = error as AxiosError;

//     console.error('Response error:', axiosError);
//     return null;
//   }
// };

export const deleteResponse = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await instance.delete<T>(url);
    return response.data;
  } catch (error) {
    // const axiosError = error as AxiosError;
    // console.log(`[POST] ${url} - Data:`, data);
    // console.error('Response error:', axiosError);
    return null;
  }
};

export const postResponse = async <T>(
  url: string,
  data: any
): Promise<T | null> => {
  try {
    const response = await instance.post<T>(url, data);
    return response.data;
  } catch (error) {
    // const axiosError = error as AxiosError;
    // console.log(`[POST] ${url} - Data:`, data);
    // console.error('Response error:', axiosError);
    return null;
  }
};
