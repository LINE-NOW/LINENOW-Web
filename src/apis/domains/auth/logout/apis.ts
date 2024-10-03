import { EmptyDTO, postResponseNoData } from '@apis/instance';

// 로그아웃 API 호출 함수
export const postLogout = async (): Promise<EmptyDTO | null> => {
  const response = await postResponseNoData('/api/v1/logout');
  return response;
};
