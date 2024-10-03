import { deleteResponse, EmptyDTO } from '../../../instance';

export const deleteUser = async (): Promise<EmptyDTO | null> => {
  const response = await deleteResponse('/api/v1/deleteID'); // 엔드포인트 임의 작성
  return response;
};
