import { LogoutRequest, LogoutResponse } from './_interfaces';
import { postResponse } from '@apis/instance';

// 로그아웃 API 호출 함수
export const postLogout = async (
  data: LogoutRequest
): Promise<string | null> => {
  const response = await postResponse<LogoutResponse>('/api/v1/logout', data); // TODO - 추후에 변경
  return response?.message || null;
};
