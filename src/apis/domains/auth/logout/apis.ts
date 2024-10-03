import { EmptyDTO, postResponse } from '@apis/instance';

// 로그아웃 API 호출 함수
export const postLogout = async (): Promise<string | null> => {
  const response = await postResponse('/api/v1/logout');
  return response?.message || null;
};
