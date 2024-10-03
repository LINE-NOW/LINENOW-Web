import { DeleteUserResponse } from './_interfaces';
import { deleteResponse } from '@apis/instance';

export const deleteUser = async (): Promise<DeleteUserResponse | null> => {
  const response = await deleteResponse<DeleteUserResponse>('/api/v1/deleteID'); // 엔드포인트 임의 작성
  return response;
};
